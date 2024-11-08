import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useFirebase } from '../context/firebase';
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();
  const navigator=useNavigate()

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    await firebase.signupWithEmailAndPassword(email, password);
  };

  const renderSigninpage=()=>{
    navigator('/signinpage')
  }
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <Card style={{ width: '24rem' }} className="shadow-sm p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title className="text-center mb-4">Create Account</Card.Title>
          <Form onSubmit={handleCreateAccount}>
            <Form.Group className="mb-3" controlId="SignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                required
              />
              </Form.Group>

            <Form.Group className="mb-4" controlId="SignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" 
                value={password} 
                required
              />
              <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <div style={{
                display:'flex',
                flexDirection:"column",
                gap:"8px"
            }}>
            <Button variant="primary" type="submit" className="w-100">Signup</Button>
            <Button variant="primary" className="w-100" onClick={renderSigninpage}>Signin</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
