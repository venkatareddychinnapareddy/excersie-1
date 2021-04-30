import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from  './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Messege from './Components/Messege';
import Counter from './Components/Counter';


function App() {
  return (
    <div className="App">

     { /*<Greet/> 

     <Welcome name="Randy" nation='american'/>
     <Welcome name="Kofi" nation='Africa'/>
     <Welcome name="Cena" nation='Canada'/>

     <Hello name="venkat" age="20" city="guntur">
       <p>This is children props</p>
       </Hello>
     <Hello name="Kiran" age="30" city="Hyderabad">
       <button>Action</button>
     </Hello>
     <Hello name="vajiRam" age="40" city="Delhi">
       <i>Hello Me</i>
     </Hello>  

     <Messege/>

     <Counter/> */}

     <Hello name="venkat" age="20" city="guntur">
       <p>This is children props</p>
       </Hello>
       <Welcome name="Randy" nation='american'/>
    </div>
  );
}

export default App;
