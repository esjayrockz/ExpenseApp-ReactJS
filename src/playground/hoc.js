//Higher Order Components(HOC) - A component(HOC) that renders other Components
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
<div>
  <h1>Info</h1>
  <p>The info is {props.info}</p>
</div>
);



const withAdminWarning = (WrappedComponent) => {
  return (props)=>(  //This HOC has to return another Component(it's a function here because of stateless functional component)
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props)=>(  //This HOC has to return another Component(it's a function here because of stateless functional component)
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>{props.message}</p>}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info); //AdminInfo stores the returned HOC
const AuthInfo = requireAuthentication(Info); //AuthInfo stores the returned HOC

ReactDOM.render(<AuthInfo isAuthenticated ={false} info ="vxcxvccx" message="You are not authenticated"/>, document.getElementById('app'));

//AuthInfo stores the returned HOC and so it makes sense to pass props there as above
