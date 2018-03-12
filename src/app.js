class BucketListApp extends React.Component{
  render(){

    const title = 'BucketListApp';
    const subtitle = 'Create your bucket list.';
    const options = ['thing one','thing two', 'thing four'];
    return (
    <div>
      <Header title={title} subtitle = {subtitle}/>
      <Action />
      <Options options={options}/>
      <AddOption />
    </div>
  );
  };
}

class Header extends React.Component{

  render(){
    const styles = {color:'red'};

    return (
      <div style={styles}>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  handlePick(){
    alert('Handle pick');
  }

  render(){
    return (
      <div>
        <button onClick={this.handlePick}>Which one should I do now?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  removeAll(){
    const text = 'List cleared';
    alert(text);
  }
  render(){
    return (
      <div>
        <button onClick={this.removeAll}>Clear list</button>
        {
          this.props.options.map((option)=><Option key={option} optionText={option}/>)
        }

      </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}




class AddOption extends React.Component{

  onFormSubmit(event){
    event.preventDefault();
    console.log('Form submitted');
    const option = event.target.elements.option.value.trim();
    if(option){
      alert(option);
      // app.options.push(option);
      event.target.elements.option.value='';
      console.log(event);
      // renderReact();
    }
  }

  render(){

    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add to list</button>
      </form>
    );
  }
}

  ReactDOM.render(<BucketListApp />, document.getElementById('app'));
