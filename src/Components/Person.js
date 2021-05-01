import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>
                 Hello I'm {person.name} and i am {person.age} years old. And i know {person.skill}
            </h2>
        </div>
    )
}

export default Person
