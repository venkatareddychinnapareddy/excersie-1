import React from 'react';

let Hello = ({name,age,city,children}) => {  // we have declare props property initially here ,,, destrcturing in perameter
   // const {name,age,city,children} = props; this is called destrcting in body
    return (
        <div  id="hello" className='dummyClass'>
            <h1>
                Hello {name} your age is {age} and your from {city}
            </h1>
            {children}
        </div>

    )    // With using JSX here jsx simply calls createElement

    /* return React.createElement(
         'div',
          {id: 'hello',className:'dummyClass'}, 
           React.createElement('h1', null, 'Hello Buddy'));   without using JSX */

}

export default Hello