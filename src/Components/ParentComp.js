import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComponent from './MemoComponent';


 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name :'venkat'
         }
     }

     componentDidMount(){
         setInterval(() => {
           this.setState({ 
               name : 'venkat'
           })
        }, 2000);
     }
     
    render() {
        console.log('***************Parent Compo Render********')
        return (
            <div>
                  Parent component 
                  <MemoComponent name={this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp> */}
                {/* <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
