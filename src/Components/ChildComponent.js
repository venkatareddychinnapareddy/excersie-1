import React from 'react';

 function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler('venkat')}>Greet Parent</button> 
        </div> // when we wish to pass ower own pearmeter inside use arrow function
    )
}
export default ChildComponent