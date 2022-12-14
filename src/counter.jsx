import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:0,
        fnames: ['Leon', 'Ronald','Faith','Tifany']
        


    };
    render() { 
       return (
            <div>
                <p className= { this.getBadgeClasses() } >{this.formatCount()}</p>
                <button  className = 'btn btn-secondary m-2'>Add</button>
                {this.state.fnames.length === 0 && 'Please add a name in your list'}
                {this.checkListNum()}
            </div>
        );
    }

    checkListNum(){
        return this.state.fnames.length === 0 ? 'Your list of name is empty':
         <ul>  
            {this.state.fnames.map(fname => <li key={ fname }> {fname} </li>) }
        </ul>
    }

    getBadgeClasses() {
        let classes = 'btn m-2 btn-';
        if (this.state.count === 0)
            classes += 'danger';

        else
            classes += 'primary';
        return classes;
    }
   

    // method1
    formatCount(){
        return this.state.count == 0?  'Zero' : this.state.count;
    }
    
  
}
 
export default Counter;