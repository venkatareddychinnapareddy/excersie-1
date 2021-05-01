import React from 'react'

function IndexList() {
    const names = ['Venkata','Kishore','Nagarjuna','Arjun','Arjun']
    return (
        <div>
           {
              names.map((name,index) => <h2 key = {index}> {index} {name}</h2>) //as we all know key is used to set an unique if each item
            }
        </div> // if we reuse any name or anything use index because index as unique position, it is nothingbut using index as key
        
    )
}

export default IndexList
