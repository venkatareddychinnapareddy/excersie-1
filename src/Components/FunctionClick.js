import React from 'react';

function FunctionClick() {

    function clickHandler() {
        console.log('Function Button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div> // eventhandler is a fucntion but not a functional call ()
    )
}

export default FunctionClick
