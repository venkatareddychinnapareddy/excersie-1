import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from  './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Messege from './Components/Messege';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import IndexList from './Components/IndexList';
import Stylesheet from './Components/Stylesheet';
import InLine from './Components/InLine';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">

      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>

     {/* <Greet/> */}

     {/* <Welcome name="Randy" nation='american'/>
     <Welcome name="Kofi" nation='Africa'/>
     <Welcome name="Cena" nation='Canada'/> */}

     {/* <Hello name="venkat" age="20" city="guntur">
       <p>This is children props</p>
       </Hello>
     <Hello name="Kiran" age="30" city="Hyderabad">
       <button>Action</button>
     </Hello>
     <Hello name="vajiRam" age="40" city="Delhi">
       <i>Hello Me</i>
     </Hello>   */}

     {/* <Messege/> */}

     {/* <Counter/>  */}

     {/* <Hello name="venkat" age="20" city="guntur">
       <p>This is children props</p>
       </Hello>
       <Welcome name="Randy" nation='american'/> these are destructuring concepts */}

       {/* <FunctionClick /> */}

       {/* <ClassClick />  */}

       {/* <EventBind/>  */}

       {/* <ParentComponent/> */}

       {/* <UserGreeting/> */}

       {/* <NameList/> */}

       {/* <IndexList/> */}
       
       {/* <Stylesheet primary={true}/> */}

       <InLine/>
       
    </div>
  );
}

export default App;
