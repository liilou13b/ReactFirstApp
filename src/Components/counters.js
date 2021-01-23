

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {counters,onIncrement,onDelete,onReset,onDecrement}=this.props;
        return ( 
            <div className="container">
                <button onClick={()=>onReset()} type="button" className="btn btn-primary mt-2">Reset</button>
               {
                   counters.map(c=>
                        <Counter 
                         key={c.id} 
                         counter={c}
                         onIncrement={onIncrement}
                         onDelete={onDelete}
                         onDecrement={onDecrement}
                        />
                    )
               }
            </div>
        );
    }
}
 
export default Counters;