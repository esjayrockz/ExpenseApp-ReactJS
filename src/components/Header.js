import React from 'react';

const Header = (props) => {
  const styles = {color:'purple'};
  return (
    <div style={styles}>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Bucket List App'
};

export default Header;
