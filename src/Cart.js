import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: "Phone",
                    qty: 1,
                    img: "",
                    id:1
                },
                {
                    price: 999,
                    title: "Watch",
                    qty: 1,
                    img: "",
                    id:2
                },
                {
                    price: 999,
                    title: "Laptop",
                    qty: 1,
                    img: "",
                    id:3
                }
            ]
        }
        // this.increaseQty = this.increaseQty.bind(this);
    }
    handleIncreaseQty = (product) => {
        console.log(product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products 
            //or
            //products = products
        });
    }
    handleDecreaseQty = (product) => {
        console.log(product);
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products 
            //or
            //products = products
        });
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = {product} 
                            key={product.id}
                            onIncreaseQty = {this.handleIncreaseQty}
                            onDecreaseQty = {this.handleDecreaseQty}
                        />
                    )
                })}
            </div>
        );
    }
}


export default Cart;