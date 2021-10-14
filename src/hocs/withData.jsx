import axios from "axios";
import Loader from "components/Loader/Loader";
import React, { useEffect, useState } from "react";

const withData = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios({
            url:props.dataSource,
            method: 'GET',
        })
            .then(res=>{
                setData(res.data.content.slice(0,10))
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);
    if(data.length <1) return<Loader/>;
    // ngoài truyền cái prop data còn phải truyền cái props ngược lại
    return <WrappedComponent data={data} {...props}/>;

  }
};
export default withData;