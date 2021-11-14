//IMPORT REACT
import React, {Component} from 'react';

//CREATE THE COMPONENT - CLASS COMPONENT IS USED HERE
class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    //RETURN
    render(){
        return(
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> Restaurant </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/"> View Categories </a>
                        </li>       
                        <li className="nav-item">
                            <a className="nav-link" href="/view-food"> View Food </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create-food"> Add New Food </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create-category"> Add New Category </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/view-order"> View Order </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}

//EXPORT
export default Navbar;