import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        const { name,nation} = this.props;
        return (
        <h1>
            Hello {name} your an {nation}
       </h1> 
       ) //we need not declare props property initially 
    }
}
 
export default Welcome
 