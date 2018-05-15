import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
      You probably put in an incorrect URL <br/>
      <Link to="/">Go to home page</Link>
    </div>
  );

export default NotFoundPage;
