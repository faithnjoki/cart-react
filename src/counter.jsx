import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:0


    };
    render() { 
        let classes = 'btn m-2 btn-';
        classes += this.state.count === 0 ? 'danger': 'primary';
        
        return (
            <div>
                <p className= { classes } >{this.formatCount()}</p>
                <button  className = 'btn btn-secondary m-2'>Add</button>
            </div>
        );
    }

    // method1
    formatCount(){
        return this.state.count == 0?  'Zero' : this.state.count;
    }
    
  
}
 
export default Counter;