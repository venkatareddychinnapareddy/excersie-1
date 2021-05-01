import React from 'react';

const heading = {
    fontSize :'80px',
    color: 'blue'
}

function InLine() {
    return (
        <div>
            <h1 style={heading}>Hello Your tested Covid + Inline</h1>
             <h1 className="error">Error</h1>
        </div>
    )
}

export default InLine
