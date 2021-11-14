//IMPORT
import React, {Component} from 'react';

import axios from 'axios';
import Select from 'react-select';


const initialState = {
    code: '',
    name: '',
    amount: 0,
    size: 0,
    categories: [],
    options: [],
    selectedCategories: []
}

//CREATE THE COMPONENT - CLASS COMPONENT IS USED HERE
class CreateFood extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8084/category').then(response => {
            console.log(response.data.data);
            this.setState({categories: response.data.data}, () => {
                let data = [];
                this.state.categories.map((item, index) => {
                    let category = {
                        value: item._id,
                        label: item.category
                    }
                    data.push(category);
                });
                this.setState({options: data});
            });
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }


    onCategorySelect(e) {
        this.setState({selected: e ? e.map(item => item.value) : []});
    }

onSubmit(e){
        e.preventDefault();
        let food = {
            code: this.state.code,
            name: this.state.name,
            amount: this.state.amount,
            size: this.state.size,
            categories: this.state.selectedCategories
        }
        console.log('DATA TO SEND', food )
        axios.post('http://localhost:8084/food/create', food)
        .then(response => {
            alert('Data Successfully inserted')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)
        })
    }


    //RETURN
    render(){
        return (
            <div className='container'>
            <h1> Add New Food </h1>
            <form onSubmit = {this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label"> Food Code </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="code" 
                    name="code" 
                    value={this.state.code} 
                    onChange={this.onChange}
                    />
                </div>
    
                <div class="mb-3">
                    <label htmlFor="model" className="form-label"> Name </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.onChange}
                    />
                </div>
    
                <div className="mb-3">
                <label htmlFor="amount" className="form-label"> Amount </label>
                    <input 
                    type="Number" 
                    className="form-control" 
                    id="amount" 
                    name="amount" 
                    value={this.state.amount} 
                    onChange={this.onChange}
                    />
                </div>
    
                <div className="mb-3">
                <label htmlFor="size" className="form-label"> Size </label>
                    <input 
                    type="Number" 
                    className="form-control" 
                    id="size" 
                    name="size" 
                    value={this.state.size} 
                    onChange={this.onChange}
                    />
                </div>

                <div className="mb-3">
                <label htmlFor="category" className="form-label"> Select the Category </label>
                <Select
                                options={this.state.options}
                                onChange={this.onCategorySelect}
                                className={"basic-multi-select"}
                                isMulti
                />
                </div>
    
                <button type="submit" className="btn btn-primary"> ADD Food </button>
            </form>
        </div>
        )
      }
    }

export default CreateFood;