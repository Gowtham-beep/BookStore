import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [isbn, setIsbn] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [coverimg, setCoverimg] = useState(null);
    const firebase = useFirebase();
    const navigate = useNavigate();

    const handleDataStorage = async (e) => {
        e.preventDefault();
        await firebase.storeDataOfBooks(title, genre, isbn, price, stock, description, coverimg);
        navigate(0);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "20px" }}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '100%', maxWidth: '600px' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Add Book</Card.Title>
                    <Form onSubmit={handleDataStorage}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                value={title}
                                placeholder="Enter Title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                onChange={(e) => setGenre(e.target.value)}
                                type="text"
                                placeholder="Enter Genre"
                                value={genre}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control
                                onChange={(e) => setIsbn(e.target.value)}
                                type="text"
                                placeholder="Enter ISBN"
                                value={isbn}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                placeholder="Enter Price"
                                value={price}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                onChange={(e) => setStock(e.target.value)}
                                type="number"
                                placeholder="Enter Stock"
                                value={stock}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder="Enter description"
                                value={description}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cover Image URL</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder="Enter image URL"
                                onChange={(e) => setCoverimg(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="w-100">Add Book</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddBooks;
