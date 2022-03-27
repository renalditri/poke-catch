import './App.css';
import styled from '@emotion/styled';
import { Button, Container, Card } from "./components";
import { Row, Col } from 'react-bootstrap';

function App() {
  const ButtonMenu = styled(Button)`
    display: flex;
    align-items: center; 
    justify-content: center;
    min-height: 20vh;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  `;
  return (
    <Container App className="vh-100">
      <Row className="w-75">
        <Col xs={12}>
          <ButtonMenu full isLink to="/catch">Catch</ButtonMenu>
        </Col>
        <Col xs={6}>
          <ButtonMenu full isLink to="/list">List</ButtonMenu>
        </Col>
        <Col xs={6}>
          <ButtonMenu full isLink to="/myList">MyList</ButtonMenu>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
