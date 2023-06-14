import SpinnerComponent from 'react-bootstrap/Spinner';
import Typography from '../typography';

function Spinner() {
  return (
    <SpinnerComponent animation="border" role="status">
      <Typography variant="label" className="visually-hidden">
        Loading...
      </Typography>
    </SpinnerComponent>
  );
}

export default Spinner;
