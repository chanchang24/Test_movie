
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';// cần import
// import Header from 'components/Header/Header';
import PageNotFound from 'containers/share/PageNotFound/PageNotFound';
import { adminRoutes, clientRoutes } from 'routes';
import ClientLayout from 'layouts/ClientLayout';
import Login from 'containers/share/Auth/Login/Login';
import Register from 'containers/share/Auth/Register/Register';
import AdminLayout from 'layouts/AdminLayout';
// import Button from 'components/Button/Button';

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map(route => {
      const { path, component, exact, isPrivate } = route;
      return (<Layout
      path={path}
        component={component}
        exact={exact}
        isPrivate={isPrivate}
         />)
    })
  }
  return (
    <div className="App">
      {/* Router để routing qua page khác */}
      <Router>
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          {renderLayout(adminRoutes, AdminLayout)}
          <Route path="/login" component={Login} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
