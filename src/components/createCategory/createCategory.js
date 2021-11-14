//IMPORT
import React, {Component} from "react";
import axios from "axios";
import Select from 'react-select';

const initialState = {
    name: '',
    des: '',
    foods: [],
    options: [],
    selected: []
}

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onFoodSelect = this.onFoodSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8084/food').then(response => {
            console.log(response.data.data);
            this.setState({foods: response.data.data}, () => {
                let data = [];
                this.state.foods.map((item, index) => {
                    let food = {
                        value: item._id,
                        label: item.name
                    }
                    data.push(food);
                });
                this.setState({options: data});
            });
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onFoodSelect(e) {
        this.setState({selected: e ? e.map(item => item.value) : []});
    }

    onSubmit(e) {
        let category = {
            category: this.state.name,
            description: this.state.des,
            foods: this.state.selected
        }
        console.log('DATA TO SEND', category);
        axios.post('http://localhost:8084/category/create', category).then(response => {
            alert('Category Added');
        }).catch(error => {
            alert(error.message);
        });
    }

    //RETURN
    render() {
        return (
            <div className="container">
                <br/>
                <h1>Create Category</h1>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Category Name</label>
                        <input type="text" className="form-control" onChange={this.onChange} name="name"
                               value={this.state.name}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="des" className="form-label">Description</label>
                        <input type="text" className="form-control" onChange={this.onChange} name="des"
                               value={this.state.des}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="foods" className="form-label">Foods</label>
                        <Select
                            options={this.state.options}
                            onChange={this.onFoodSelect}
                            isMulti
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Category</button>
                </form>
            </div>
        )
    }
}

export default CreateCategory;