import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        const { name, nation} = this.props;
       // const {state1,state2} = this.state;
        return (
        <h1>
            Hello {name} your an {nation}
       </h1> 
       ) //we need not declare props property initially 
    }
}
 
export default Welcome
 