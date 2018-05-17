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
  return (props)=>(  //This HOC has to return another Component(function here because of stateless functional component)
    <div>
      <p>This is private info. Please don't share</p>
      <WrappedComponent/>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="Hmm, check this out"/>, document.getElementById('app'));
