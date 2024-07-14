import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
 

  return (
    <div className="App">
     
<h1>Welcome</h1>

< div> 
<h2> List Items </h2>

 <ul>
<li>Html</li>
<li>Css</li>
<li>React</li>

</ul>
</div> 


<div>
        <h2>Add New Item</h2>
        <form >
          <input
            type="text"
           
          />
          <button type="submit">Add </button>
        </form>
      </div>

    </div>
  );
}

export default App;
