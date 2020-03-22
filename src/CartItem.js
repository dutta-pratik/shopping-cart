import React from "react";

class CartItem extends React.Component {
   
    increaseQty = () => {
        // this.state.qty += 1;

        //setstate i used to rerender the state
        //setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form 2 - if prevState require use this funcio for setstate
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });

    }
    decreaseQty = () => {
        this.setState((prevState) => {
            if(prevState.qty > 0){
                return {qty: prevState.qty - 1}
            }
        });
    }
    render() {
        console.log(this.props)
        const {price, title, qty} = this.props.product;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style={styles.image}/>
                </div>
                <div className = "right-block">
                    <div style={ { fontSize: 25} }> {title} </div>
                    <div style={ {color: "#777"} }>Rs {price} </div>
                    <div style={{color: "#777"}}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick = {this.increaseQty}></img>
                            
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                            onClick = {this.decreaseQty}></img>
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc"
    }
}

export default CartItem;