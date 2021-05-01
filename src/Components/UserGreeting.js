import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    //CONDTIONAL RENDERING CONCEPT

    render() {

        return(
            this.state.isLoggedIn && <div>Hello Venkat</div> // In this case both should be true
        )

        // return(
        //     this.state.isLoggedIn ? <div>Welcome venkata reddy</div> : <div>Welcome Guest</div>
        // )

        // if(this.state.isLoggedIn){
        //    return(
        //         <div>
        //           Welcome Venkata reddy
        //        </div>
        //    )
        // }
        //    else{
        //        return(
        //             <div>
        //              Welcome Guest
        //           </div>
        //        )
        //    }
        
        // return (
        //     <div>
        //         <div>Welcome venkata reddy </div>               
        //         <div>Welcome Guest  </div>               
        //     </div>
        // )
    }
}

export default UserGreeting
