import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RightSide from './components/RightSide.login';
import LeftSide from './components/LeftSide.login';

function Login() {
  return (
    <Row className="h-100">
      <Col xs={false} sm={6} className="h-100">
        <LeftSide />
      </Col>
      <Col xs={12} sm={6} className="h-100">
        <RightSide />
      </Col>
    </Row>
  );
}

export default Login;
