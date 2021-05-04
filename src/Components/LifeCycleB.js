import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'venkata reddy'
         }
         console.log('LifeCycleB constructor')
     }

     static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B getDerivedStateFromProps') 
        return null
     }
     
     componentDidMount(){
         console.log('LifeCycle B componentDidMount')
     }

     shouldComponentUpdate(){
         console.log('LifeCycleB shouldComponentUpdate')
         return true
     }

     getSnapshotBeforeUpdate(prevprops,prevState){
         console.log('LifeCycleB shouldComponentUpdate')
           return null
     }

     componentDidUpdate(){
         console.log('LifeCycleB componentDidUpdate')
     }

    render() {
        console.log('LifeCycle B render')
        return (
            <div>
               LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
