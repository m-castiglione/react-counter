import React, {Component} from 'react';
import Display from './Display';
import ButtonPad from './ButtonPad';


class  Counter extends Component {
    constructor(props){
        super(props)
   
    this.state = {
        count: 0
    };
    }
    
    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    reset = () => {
        this.setState({count: 0})
    }

    render() {
    return (
        
        <div className="counter">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1><center>{this.state.count}</center></h1>
            <center><button class="btn" onClick={this.increment}><i class="far fa-arrow-alt-circle-up"></i></button></center>
            <center><button class="btn" onClick={this.decrement}><i class="far fa-arrow-alt-circle-down"></i></button></center>
            <center><button class="btn" onClick={this.reset}><i class="fas fa-redo"></i></button></center>
        </div>
    )
    }
}

export default Counter;