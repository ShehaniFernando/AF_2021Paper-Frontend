/*import React, {Component} from "react";
import axios from 'axios';
import Select from 'react-select';

const initialState = {
    category: '',
    food: '',
    categories: [],
    optionsCategory: [],
    selectedCategory: [],
    optionsFoods: [],
    selected: []
}

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onFoodSelect = this.onFoodSelect.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:8084/category').then(response => {
            console.log(response.data.data);
            this.setState({categories: response.data.data}, () => {
                let data = [];
                this.state.categories.map((item, index)=>{
                    let category = {
                        value: item.category,
                        label: item.category
                    }
                    data.push(category);
                });
                this.setState({optionsCategory: data});
            });
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onFoodSelect(e) {
        this.setState({selectedCategory: e ? e.map(item => item.value) : []});
    }


    onSubmit(e) {
        let food = {
            code: this.state.code,
            name: this.state.name,
            amount: this.state.amount,
            size: this.state.size,
            categories: this.state.categories
        }
        console.log('DATA TO SEND', food);
    }

    render() {
        return (
            <div className="container">
                <h1>Create Food</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <Select
                            options={this.state.optionsCategory}
                            onChange={this.onChange}
                            className={"basic-select"}
                            isMulti
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="food" className="form-label">Foods</label>
                        <Select
                            options={this.state.optionsFoods}
                            onChange={this.onChange}
                            className={"basic-select"}
                            isMulti
                        />

                    </div>
                </form>
                <h3>Payment</h3>
            </div>
        )
    }
}

export default Payment;*/