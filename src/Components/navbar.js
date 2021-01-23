import React from 'react';
const Navbar = (props) => {
    const {nbrCounterActive: count}=props;
    return ( 
        <React.Fragment>
        <nav className="navbar  navbar-light bg-light">
         <div className="container">
         <a className="navbar-brand" > <span className="badge badge-pill badge-primary">{count}</span></a>
         </div>
        </nav>
    </React.Fragment> 
     );
}
 
export default Navbar;