const appRoot = document.getElementById('app');
let visibility = false;
const showDetails = () => {
   visibility = !visibility;
   renderReact();
}

const renderReact = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick ={showDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>

        {
          visibility && (<div><p>Here are the details.</p></div>)
        }

    </div>
  );
  ReactDOM.render(template,appRoot);
}

renderReact();
