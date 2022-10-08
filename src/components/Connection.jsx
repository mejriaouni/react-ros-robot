import React , {Component} from "react";
import Alert from "react-bootstrap/Alert";






class Connection extends Component {
    state = { connected : false}
    init_connection()
    {
       var ros = new window.ROSLIB.Ros();
    }
    render(){
        return (
            <div>
                <Alert className="text-center m-3" variant={this.state.connected? "success" : "danger"}>{this.state.connected? "Robot Connected" : "Robot Disconnected"}</Alert>
            </div>
        );
    }
}

export default Connection;