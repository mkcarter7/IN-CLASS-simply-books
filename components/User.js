import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function User() {
  const { user } = useAuth();
  console.warn(user);

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={user.photoURL} alt={user.displayName} style={{ width: '10rem', margin: '10px auto', borderRadius: '50%' }} />
        <Card.Body>
          <Card.Title>{user.displayName}</Card.Title>
          <p className="card-text bold">{user.email}</p>
          <p className="card-text bold">Latest Login: {user.metadata.lastSignInTime}</p>
        </Card.Body>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.bool,
    lastSignInTime: PropTypes.string,
  }).isRequired,
};
