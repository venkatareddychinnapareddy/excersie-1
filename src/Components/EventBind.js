import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             messege : 'Hello you'
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         messege:'Good bye!'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            messege : 'Good bye!'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.messege}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div> 
            //this keyword is undefined in JS so we need to bind it  
            // 1.approach(binding in the render inline) , 
            // 2.approach(arrow function approach) and 
            // 3. approach(binding in class constructor) 
            // 4.Class property as arrow function
        )
    }
}
export default EventBind