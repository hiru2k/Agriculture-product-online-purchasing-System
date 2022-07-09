import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import DeliveryHome from './cart/DeliveryHome'
import DeliveryCreate from './cart/DeliveryCreate'
import DeliveryOffers from './cart/DeliveryOffers'
import DeliveryCharges from './cart/DeliveryCharges'
import AdminDeliveryHome from './admin_delivery/AdminDeliveryHome'
import ShowOrderDetails from './admin_delivery/ShowOrderDetails'
import CreateOffers from './admin_delivery/CreateOffers'
import UpdateOffers from './admin_delivery/UpdateOffers'
import UpdateOffers2 from './admin_delivery/UpdateOffers2'


import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/AdminDeliveryHome" exact component={AdminDeliveryHome} />
            <Route path="/ShowOrderDetails" exact component={ShowOrderDetails} />
            <Route path="/CreateOffers" exact component={CreateOffers} />
            <Route path="/UpdateOffers" exact component={UpdateOffers} />
            <Route path="/UpdateOffers2/:id" exact component={UpdateOffers2} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/DeliveryHome" exact component={DeliveryHome} />
            <Route path="/DeliveryCreate" exact component={DeliveryCreate} />
            <Route path="/DeliveryCharges" exact component={DeliveryCharges} />
            <Route path="/DeliveryOffers" exact component={DeliveryOffers} />



            <Route path="*" exact component={NotFound} />
            
        </Switch>
    )
}

export default Pages
