import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Counters from './Components/counters';

class App extends Component {
  state = { 
    counters:[
      {id:1,value:0},
      {id:2,value:1},
      {id:3,value:2},
      {id:4,value:0}
    ]
  }
   numberCounterActive=()=>{
    const counters= this.state.counters.filter(c=>c.value>0);
    let count= counters.length;
    count =count?count:0;
    return count;
   };
   handleIncrement=(counter)=>{
    const counters= this.state.counters;
    const index= counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
   }
   handleDelete=id=>{
     const counters= this.state.counters.filter(c=>c.id!==id);
     this.setState({counters});
   }
   handleReset=()=>{
    const counters = this.state.counters.map(c=>{
      c.value=0;
      return c;
    })
    this.setState({counters});
    
   }
   handleDecrement=counter=>{
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     counters[index].value--;
     this.setState({counters});
   }
  render() { 
    
     const count=this.numberCounterActive();
    if (this.state.counters.length===0) {
        return ( 
         <div className="alert alert-danger m-2 text-center" role="alert">
           There are no counters in the App 
          </div>
        );
      }

    return ( 
      <React.Fragment>
        <Navbar
         nbrCounterActive={count}
        />
        <Counters 
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        
        />
        
        </React.Fragment>
     );
  }
}
 
export default App;

