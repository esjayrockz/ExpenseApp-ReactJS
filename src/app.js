class BucketListApp extends React.Component{

  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'Item already exists';
    }
    this.setState((prevState)=>({ options: prevState.options.concat(option) }));
  }

  handlePick(){
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNum]);
  }

  handleDeleteOptions(){
    this.setState(()=>({ options: [] }));
  }

  handleDeleteOption(param){
    this.setState((prevState)=>({options: prevState.options.filter((option) => option!== param) }));
  }

  render(){

      const title = 'BucketListApp';
      const subtitle = 'Create your bucket list.';

      return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length>0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption}
        />
      </div>
    );
    };
  }

  BucketListApp.defaultProps = {
    options: []
  };

/*Functional stateless components as below should be used if no state is required to be maintained
 If they use props, take props as parameters instead of this.props
 Access these props using props instead of this.props */

const Header = (props) => {
  const styles = {color:'red'};
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

const Options = (props) =>{
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Clear list</button>
      {
        props.options.map((option)=>(
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e)=>{
          props.handleDeleteOption(props.optionText);
        }}>
        Remove
      </button>
    </div>
  );
};


class AddOption extends React.Component{

  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  onFormSubmit(event){
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=> ({ error }));
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add to list</button>
      </form>
      </div>
    );
  }
}


ReactDOM.render(<BucketListApp />, document.getElementById('app'));
