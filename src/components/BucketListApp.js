import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class BucketListApp extends React.Component{

  state = {
    //options: props.options
    options: [],
    selectedOption: undefined //Modal prop which decides if modal should be open or not
  };

  handleClearModal = () => {
    this.setState(() => ({ selectedOption: undefined })); //This will close modal
  };

  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid value to add item'; //If empty value is submitted
    }
    else if(this.state.options.indexOf(option) > -1){ //Returns more than 1 if item found, else -1
      return 'Item already exists';
    }
    this.setState((prevState)=>({ options: prevState.options.concat(option) })); //Add item to the options array
  };

  handlePick = () => { // Choose random option from all items
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      this.setState(() => ({ selectedOption: this.state.options[randomNum] }));
  };

  handleDeleteOptions = () => {
    this.setState(()=>({ options: [] }));
  };

  handleDeleteOption = (param) => { //Keep items in array which do no match parameter
    this.setState((prevState)=>({options: prevState.options.filter((option) => option!== param) }));
  };

  componentDidMount(){ //Take items from localStorage and add it to options state to show the list
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    }
    catch(e){

    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json); //Update localStorage every time options array length changes
    }
  }

  render(){

      const title = 'BucketListApp';
      const subtitle = 'Create your bucket list.';

      return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
        <Action
          hasOptions={this.state.options.length>0}
          handlePick={this.handlePick}
        />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearModal={this.handleClearModal}
          />
      </div>
    );
    };
  }
  // BucketListApp.defaultProps = {
  //   options: []
  // };
