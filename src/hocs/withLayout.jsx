import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const widthLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    // ...rest: là biến tự đặt bóc tách những cái props còn lại
    // const{component,... rest} = props;
    // render
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    
    const content = (
      <Route
        {...rest}
        //routeProps để truyền xuống những cái props khác của Route
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );

    //Protect private routes
    if (isPrivate) {     
      if (currentUser) {
        return content;
      }else{
        alert('Please login');
      }

      // về trang home
      return <Redirect to="/login"/>
    }
    return content;
    
  };
};
export default widthLayout;
