import { Link } from 'react-router-dom';
import Typography from '../../components/typography';

function NotFound() {
  return (
    <>
      <Typography variant="error">Not Found</Typography>
      <Link to="/">
        <Typography variant="hint">Go Home</Typography>
      </Link>
    </>
  );
}

export default NotFound;
