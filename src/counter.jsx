import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:0
    };
    render() { 
        return (
            <div>
                <p>{this.state.count}</p>
                <button>Add</button>
            </div>
        );
    }

    // method1
    formatCount(){
        return this.state.count == 0? 'Zero': this.state.count;
    }
}
 
export default Counter;