//IMPORT
import React, {Component} from 'react';
import axios from 'axios';

//CREATE THE COMPONENT - CLASS COMPONENT IS USED HERE
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            totalAmount: ''
            }
    }


    componentDidMount() {
        axios.get('http://localhost:8084/food').then(response => {
            console.log(response.data.data);
            this.setState({foods: response.data.data});
        })
        axios.get(`http://localhost:8084/food/amount/${this.props.match.params.id}`)
        .then(response => { 
            this.setState({totalAmount: response.data.totalAmount })
        })
        .catch(error =>{
        alert(error.message)
        })
    }
    


    //RETURN
    render() {
        return (
            <div className="container">
                <br/>
                    <h1>Order is Here!</h1>
                    <br/>
                    <h4> Total Amount:{this.state.totalAmount} </h4>
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

export default Order;