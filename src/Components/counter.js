import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  
   
    render() { 
        const {counter,onDelete,onIncrement,onDecrement}=this.props;
        
        return ( 
            <div className="m-3">
                <span className="badge badge-pill badge-primary m-2 ">{counter.value}</span>
                <button onClick={()=>onIncrement(counter)} className="btn btn-primary  btn-secondary m-2 " >+</button>
                <button disabled={counter.value===0?'diasbled':''} onClick={()=>onDecrement(counter)} className='btn btn-primary btn-secondary m-2'>-</button>
                <button onClick={()=>onDelete(counter.id)} className="btn btn-primary  btn-danger">X</button>
            </div> 
        );
    }
}
 
export default Counter;