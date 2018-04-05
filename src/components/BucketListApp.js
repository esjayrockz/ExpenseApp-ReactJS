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
    selectedOption: undefined
  };

  handleClearModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid value to add item';
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'Item already exists';
    }
    this.setState((prevState)=>({ options: prevState.options.concat(option) }));
  };

  handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      this.setState(() => ({ selectedOption: this.state.options[randomNum] }));
  };

  handleDeleteOptions = () => {
    this.setState(()=>({ options: [] }));
  };

  handleDeleteOption = (param) => {
    this.setState((prevState)=>({options: prevState.options.filter((option) => option!== param) }));
  };

  componentDidMount(){
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
      localStorage.setItem('options', json);
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
