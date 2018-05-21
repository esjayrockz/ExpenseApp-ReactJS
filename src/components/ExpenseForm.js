import React from 'react';

export default class ExpenseForm extends React.Component {

  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
          />
        </form>
      </div>
    )
  }
}
