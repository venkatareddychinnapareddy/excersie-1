import React from 'react';

function Column() {
    return (
        <>   
            <td>Name</td>
            <td>Venkat</td>
        </>   //giving td data within the div tags leads breakage of code so use React.Fragmnet
    )// and we can pas an empty closing tag instead of React.fragment
}

export default Column
