//IMPORT
import React, {Component} from 'react';

//IMPORT AXIOS
import axios from 'axios'

//CREATE THE COMPONENT - CLASS COMPONENT IS USED HERE
class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pay: '',
            categoryId: '',
            foods: []
        }
    }

    componentDidMount() {
        console.log('Category ID: ', this.props.match.params.id);
        axios.get(`http://localhost:8084/category/${this.props.match.params.id}`).then(response => {
            console.log('Foods: ', response.data.data);
            this.setState({foods: response.data.foods});
            this.setState({pay: response.data.foods.category, categoryId: this.props.match.params.id});
            console.log('Count:', this.state.foods.length>0);
        })
    }


    navigateFoodPage(e, foodId){
        window.location = `/cost/${foodId}/${this.state.categoryId}`
    }

    //RETURN
    render(){
        return (
            <div className="container">
                <br/>
                <h1>Food List:- {this.state.trip}</h1>
                <br/>
                {this.state.foods.length > 0 && this.state.foods.map((item, index)=>
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateFoodPage(e, item._id)}>
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

export default FoodList;