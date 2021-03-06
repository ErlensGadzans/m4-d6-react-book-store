import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from "./components/NavBar"
import {Col, Container, Row} from "react-bootstrap"
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BooksList from './components/BooksList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <Container>
          <Row>
            <NavBar />
            <WarningSign text="WARNING"/>        
            <MyBadge text="This is MyBadge" color="red"/>
            {/* <CommentForm /> */}
            <BooksList />
          </Row>
    </Container>


  );
}

export default App;
