//IMPORT
import React, {Component} from 'react';

//IMPORT AXIOS
import axios from 'axios';

//CREATE THE COMPONENT - CLASS COMPONENT IS USED HERE
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8084/category')
        .then(response => {
            console.log('Categories: ', response.data.data);
            this.setState({categories: response.data.data});
        })
    }

    navigateFoodPage(e, categoryId){
        window.location = `/food/${categoryId}`
    }

    //RETURN
    render(){
        return (
            <div className="container">
                <br/>
                    <h1>Categories</h1>
                    <br/>
                    {this.state.categories.length > 0 && this.state.categories.map((item, index)=>
                        <div key={index} className="card mb-3">
                            <div className="p-3" onClick={e => this.navigateFoodPage(e, item._id)}>
                                <h4> Category: {item.category}</h4>
                                <h5> Description: {item.description}</h5>
                            </div>
                        </div>
                    )}
                </div>
        )
      }
    }

export default Categories;