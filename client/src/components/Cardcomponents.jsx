import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate("/orders", { 
            state: { 
                title: props.title, 
                isbn: props.isbn, 
                userName: "CurrentUser" // Replace with actual user data
            }
        });
    };

    return (
        <div 
            className="card" 
            style={{ 
                width: "18rem", 
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
                borderRadius: "8px", 
                overflow: "hidden", 
                margin: "10px" 
            }}
        >
            <img 
                className="card-img-top" 
                src={props.coverimg} 
                alt="Cover" 
                style={{ 
                    height: "250px", 
                    objectFit: "cover" 
                }} 
            />
            <div className="card-body">
                <h5 className="card-title">Title: {props.title}</h5>
                <p className="card-text">
                    Description: {props.description}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Genre: {props.genre}</li>
                <li className="list-group-item">Price: Rs {props.price}/-</li>
                <li className="list-group-item">Stock: {props.stock}</li>
                <li className="list-group-item">ISBN: {props.isbn}</li>
            </ul>
            <div className="card-body">
                <button 
                    className="btn btn-primary" 
                    style={{
                        display: "block",
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: "5px",
                        color: "#fff",
                        backgroundColor: "green",
                        textDecoration: "none"
                    }}
                    onClick={handleOrderClick}
                >
                    Order
                </button>
            </div>
        </div>
    );
};

export default BookCard;
