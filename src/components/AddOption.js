import React from 'react';

export default class AddOption extends React.Component{

  state = {
    error: undefined
  };

  //onFormSubmit will be triggered when an item is added to list.
  onFormSubmit = (event) => {
    event.preventDefault(); //prevent form submission's default action
    const option = event.target.elements.option.value.trim(); //trim the spaces of the input value and save it
    const error = this.props.handleAddOption(option); //error will remain undefined if item is successfully added
    this.setState(()=> ({ error }));
    if(!error){
      event.target.elements.option.value = ''; //This will clear the input form if no error
    }
  };

  render(){
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      <form className="add-option" onSubmit={this.onFormSubmit}>
        <input className="add-option__input" type="text" name="option"/>
        <button className="button">Add to list</button>
      </form>
      </div>
    );
  }
}
