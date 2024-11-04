import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {useFirebase} from '../context/firebase'


function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const firebase=useFirebase()
    console.log(firebase)

    const handleCreateAccount=async(e)=>{
        await e.preventDefault()
        firebase.signupWithEmailAndPassword(email,password)
    }
  return (
    <Form onSubmit={handleCreateAccount}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" value={password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleCreateAccount}>
        Submit
      </Button>
    </Form>
  );
}

export default Signup;