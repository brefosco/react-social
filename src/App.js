import React from 'react';
import './App.css';
import SocialLogin from './components/SocialLogin'
import { Container, Row, Col } from 'reactstrap'

function App() {
  return (
    <Container className="App">
      <Row style={{ marginTop: '20px', textAlign: 'center' }} >
        <Col ><p className="h4">Social login testing app</p></Col>
      </Row>
      <Row>
        <Col sm={12}><SocialLogin /></Col>
      </Row>
    </Container>
  );
}

export default App;
