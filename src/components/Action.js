import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        Which one should I do now?
      </button>
    </div>
  );
};

export default Action;
