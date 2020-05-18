import React from "react";
//import Route
import { Route, Link } from 'react-router-dom';
//import Form
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Pizza?</Link>
      <Route path='/pizza' component={Form}/>
    </div>
  );
};
export default App;
