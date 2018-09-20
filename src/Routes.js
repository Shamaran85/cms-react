import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProductList from './Content/Products/ProductList';
import ProductPage from './Content/Products/ProductPage';
import Checkout from './Content/Checkout/Checkout';
import Complete from './Content/Checkout/Complete';

const routes = () => (
    <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path='/products/:id' component={ProductPage} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/complete' component={Complete} />
    </Switch>
)

export default routes
