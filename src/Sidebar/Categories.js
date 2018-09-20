import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {

    // state = {
    //     products: [],
    //     value: '?_sort=name:asc'
    // };

    // componentDidMount() {
    //     this.fetchUrl();
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value }, () => {
    //         this.fetchUrl();
    //     });
    // }

    // fetchUrl() {
    //     fetch(url + this.state.value)
    //         .then((result) => result.json())
    //         .then((result) => {
    //             this.setState({
    //                 products: result,
    //             })
    //         })
    // }

    render() {
        return (
            <div className="widget-container">
                <div className="categories-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="">News</a></li>
                        <li><a href="">Sale</a></li>
                        <li><a href="">Hoodies</a></li>
                        <li><a href="">T-shirts</a></li>
                        <li><a href="">Jeans</a></li>
                        <li><a href="">Skirts</a></li>
                        <li><a href="">Dresses</a></li>
                        <li><a href="">Shoes</a></li>
                        <li><a href="">Bags</a></li>


                    </ul>
                </div>
            </div>
        );
    }
}

export default Categories;