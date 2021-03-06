import React from 'react';
import Person from './Person';

function NameList() {
    // const names = ['Venkata','Kishore','Nagarjuna']
    const persons = [
        {
            id : 1,
            name : 'Venkata reddy',
            age : 20 ,
            skill : 'Web Development'
        },
        {
            id : 2,
            name : 'Wilson',
            age : 30 ,
            skill : 'browsing'
        },
        {
            id : 3,
            name : 'Shine',
            age : 40 ,
            skill : 'Routing'
        }
    ]

     const personList =  persons.map(person => <Person key={person.age} person={person} />)  // Key are unique each list item should have a unique id

    return (
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        // </div>

        // <div>
        //     {
        //       names.map(name => <h2>{name + ' reddy'}</h2>)
        //     }
        // </div>
       
        <div>
              {personList} 
        </div> // this is the third way of mapping
    )
}

export default NameList
