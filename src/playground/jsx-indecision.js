console.log('App.js is running!')

//JSX - Javascript XML

const app = {
  title:'Create your Bucket List!',
  subtitle: 'New York City & Melbourne',
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted');
  const option = event.target.elements.option.value;
  if(option){
    app.options.push(option);
    event.target.elements.option.value='';
    renderReact();
  }
}

const removeList = () => {
  app.options = [];
  renderReact();
};


const makeRandomChoice = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length) ;

  alert(app.options[randomNum]);
};

const appRoot = document.getElementById('app');
const renderReact = () => {

  const template = (

    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length>0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick ={removeList}>Clear list</button>
      <button disabled ={app.options.length===0} onClick ={makeRandomChoice}>Which one should I do first?</button>
      <ol>
        {
          app.options.map((option) => <li key ={option}>{option}</li>)
        }
      </ol>
      <form onSubmit ={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add to list</button>
      </form>
    </div>);

  ReactDOM.render(template, appRoot);
};

renderReact();
