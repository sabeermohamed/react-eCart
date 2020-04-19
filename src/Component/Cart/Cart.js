import React,{Component}from 'react'
import Title from "../Title";
import CartColumns from "../Cart/CartColumns";
import EmptyCart from "../Cart/EmptyCart";
import {ProductConsumer}  from "../../context";
import CartList from "../Cart/CartList";
import CartTotal from "../Cart/CartTotal";
export default class Cart extends Component{
    render()
    {
        return(
            <section>
                <ProductConsumer>
                    {value=>{
                        const{cart}=value;
                        if(cart.length>0)
                        {
                            return(
                                <React.Fragment>
                                    <Title name="your " title="cart"/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            );
                        }else{
                            return <EmptyCart/>;
                        }
                    }
                    }
                </ProductConsumer>
            </section>
        );
    }
}