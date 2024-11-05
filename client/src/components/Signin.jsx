import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState,useEffect} from 'react';
import { useFirebase } from '../context/firebase';
import {useNavigate} from 'react-router-dom'

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();
  const navigate=useNavigate()
  
  useEffect(()=>{
    if(firebase.isLoggedIn){
    navigate('/')
    }
  },[firebase,navigate])

  const handleSigninWithEmailAndPassword = async (e) => {
    e.preventDefault();
    await firebase.signinWithEmailAndPassword(email, password);
  };
const handleGoogleSignin=async()=>{
await firebase.signinWithGoogle()
}


  return (
    <div className="d-flex justify-content-center align-items-center" >
      <Card style={{ width: '24rem' }} className="shadow-sm p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-center mb-4">Sign In</Card.Title>
          <Form onSubmit={handleSigninWithEmailAndPassword}>
            <Form.Group className="mb-3" controlId="SigninEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="Enter email" 
                value={email}
                required 
              />
              </Form.Group>

            <Form.Group className="mb-4" controlId="SigninPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" 
                value={password} 
                required
              />
            </Form.Group>
            <div style={{
                display:'flex',
                flexDirection:"column",
                gap:"8px"
            }}>
            <Button variant="primary" type="submit" className="w-100">Sign In</Button>
            <Button variant="danger" className="w-100" onClick={handleGoogleSignin}>Signin with Google</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signin;
