import React from "react";

const BookCard = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={props.coverimg} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.genre}</li>
                <li className="list-group-item">{props.price}</li>
                <li className="list-group-item">{props.stock}</li>
                <li className="list-group-item">{props.isbn}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Add to Card</a>
            </div>
        </div>
    );
};

export default BookCard;
