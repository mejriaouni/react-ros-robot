import React , {Component} from "react";
import Connection from "./Connection";




class Home extends Component {
    state = { Counter : 0,}
    increment_counter()
    {
        //this.state.Counter = this.state.Counter + 1;
        this.setState({Counter : this.state.Counter + 1});
        console.log(this.state.Counter );
    }
    render(){
        return (
            <main>
                <h1 className="text-center mt-3">Robot Control Page</h1>
               <Connection/>
            </main>
        );
    }
}

export default Home;