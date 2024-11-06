import Button from "react-bootstrap/esm/Button"
import CardBody from "react-bootstrap/esm/CardBody"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import {useFirebase} from '../context/firebase'

const Addbooks=()=>{
    const [title,setTitle]=useState('')
    const [genre,setGenre]=useState('')
    const [isbn,setIsbn]=useState('')
    const [price,setPrice]=useState('')
    const [stock,setStock]=useState('')
    const [description,setDescription]=useState('')
    const [coverimg,setCoverimg]=useState(null)
    const firebase=useFirebase()

    const handledataStorage= async (e)=>{
        e.preventDefault()
        await firebase.storeDataOfBooks(title,genre,isbn,price,stock,description,coverimg)
    }
    

    return(
        <div className="d-flex justify-content-center align-items-center" style={{margin:"20px 0 0 0"}}>
            <Card>
                <CardBody style={{width:'54rem'}} className="shadow-sm p-3 mb-5 bg-white rounded">
                    <Card.Title className="text-center mb-4">Add Book</Card.Title>
                    <Form onSubmit={handledataStorage}> 
                    <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        onChange={(e) => setTitle(e.target.value)} 
                        type="text" 
                        value={title}
                        placeholder="Enter Title" 
                        required 
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control 
                        onChange={(e) => setGenre(e.target.value)} 
                        type="text" 
                        placeholder="Enter Genre"
                        value={genre} 
                        required 
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control 
                        onChange={(e) => setIsbn(e.target.value)} 
                        type="text" 
                        placeholder="Enter ISBN" 
                        value={isbn}
                        required 
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        onChange={(e) => setPrice(e.target.value)} 
                        type="text" 
                        placeholder="Enter Price" 
                        value={price}
                        required 
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>Stock</Form.Label>
                    <Form.Control 
                        onChange={(e) => setStock(e.target.value)} 
                        type="number" 
                        placeholder="Enter Stock"
                        value={stock} 
                        required 
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" >
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
                    <Button variant="primary" type="submit" className="w-50" style={{margin:"0 0 0 400px"}}>Add Book</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}
export default Addbooks