//IMPORT
import React, {Component} from 'react';
import axios from 'axios';

//CREATE THE COMPONENT - CLASS COMPONENT IS USED HERE
class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: []
            }
    }


    componentDidMount() {
        axios.get('http://localhost:8084/food').then(response => {
            console.log(response.data.data);
            this.setState({foods: response.data.data});
        })
    }


    //RETURN
    render() {
        return (
            <div className="container">
                <br/>
                    <h1>Foods</h1>
                    <br/>
                    {this.state.foods.length > 0 && this.state.foods.map((item, index)=>
                        <div key={index} className="card mb-3">
                            <div className="p-3">
                                <h5>Code : {item.code}</h5>
                                <h5>Name : {item.name}</h5>
                                <h5>Amount : {item.amount}</h5>
                                <h5>Size: {item.size}</h5>
                            </div>
                            
                        </div>
                    )}
                </div>
        )
    }
    }

export default Foods;