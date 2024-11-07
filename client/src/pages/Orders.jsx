import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {useFirebase} from '../context/firebase'

const OrderPage = () => {
    const { state } = useLocation();
    const { title, isbn} = state;
    const [quantity, setQuantity] = useState(1);
    const [orderDetails, setOrderDetails] = useState(null);
    const firebase=useFirebase()
    const userName=firebase.user.displayName
    


    // Load order details from local storage on component mount
    useEffect(() => {
        const savedOrder = JSON.parse(localStorage.getItem("orderDetails"));
        if (savedOrder) {
            setOrderDetails(savedOrder);
        }
    }, []);

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const newOrderDetails = {
            userName,
            title,
            isbn,
            quantity,
        };
        // Save order details to both state and local storage
        setOrderDetails(newOrderDetails);
        localStorage.setItem("orderDetails", JSON.stringify(newOrderDetails));
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            <h2>Order Book</h2>
            <p><strong>User:</strong> {userName}</p>
            <p><strong>Book Title:</strong> {title}</p>
            <p><strong>ISBN:</strong> {isbn}</p>
            <form onSubmit={handleOrderSubmit}>
                <label>
                    Number of Books:
                    <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min="1" 
                        required 
                        style={{ margin: "10px 0", padding: "5px", width: "100%" }}
                    />
                </label>
                <button type="submit" className="btn btn-success">Place Order</button>
            </form>

            {/* Order Details Section */}
            {orderDetails && (
                <div 
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <h3>Order Summary</h3>
                    <p><strong>User:</strong> {userName}</p>
                    <p><strong>Book Title:</strong> {orderDetails.title}</p>
                    <p><strong>ISBN:</strong> {orderDetails.isbn}</p>
                    <p><strong>Quantity:</strong> {orderDetails.quantity}</p>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
