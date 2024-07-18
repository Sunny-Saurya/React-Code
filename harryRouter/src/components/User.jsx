import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();
  console.log(username); // Debugging log

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
    </div>
  );
}

export default User;