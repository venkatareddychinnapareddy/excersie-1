import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'venkata reddy'
         }
         console.log('LifeCycleA constructor')
     }

     static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps') 
        return null
     }
     
     componentDidMount(){
         console.log('LifeCycle A componentDidMount')
     }

     shouldComponentUpdate(){
         console.log('LifeCycleA shouldComponentUpdate')
         return true
     }

     getSnapshotBeforeUpdate(prevprops,prevState){
         console.log('LifeCycleA shouldComponentUpdate')
           return null
     }

     componentDidUpdate(){
         console.log('LifeCycleA componentDidUpdate')
        }

     changeHandler = () => {
         this.setState({
             name: 'codevolution'
         })
     }

    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeHandler}>Change State</button>
                <LifeCycleB/>
            </div>

        )
    }
}

export default LifeCycleA
