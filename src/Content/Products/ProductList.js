import React, { Component } from 'react';
import Product from './Product';
import config from '../../config';

import Sort from '../Filter/Sort';

const url = config.productsUrl;

class ProductList extends Component {
    state = {
        products: [],
        value: '?_sort=price:desc',
    };

    componentDidMount() {
        this.fetchUrl();
    }

    handleChange(event) {
        this.setState({ value: event.target.value }, () => {
            this.fetchUrl();
        });
    }

    fetchUrl() {
        fetch(url + this.state.value)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    products: result,
                })
            })
    }

    render() {
        const productList = this.state.products.map((product) => {
            return <Product key={product.id} product={product} />
        });

        return (
            <div className="productList">
                <div className="products-header">
                    <div className="products-header-title">
                        <h2>Latest Arrivals</h2>
                    </div>
                    <div className="sort-filter">
                        <Sort handleChange={(event) => this.handleChange(event)} value={this.state.value} />
                    </div>
                </div>
                <div className="products">
                    {productList}
                </div>
            </div>
        );
    }
}

export default ProductList;
