import React from 'react';
import ReactDOM from 'react-dom';
import BucketListApp from './components/BucketListApp'; //No need to use .js at the end here when using Webpack
import 'normalize.css/normalize.css';
import './styles/styles.scss';
ReactDOM.render(<BucketListApp />, document.getElementById('app'));


/*Functional stateless components should be used if no state,
function handlers, lifecycle-aspects are required since they will be faster than class components.
 If they use props, access these props using props instead of this.props */
