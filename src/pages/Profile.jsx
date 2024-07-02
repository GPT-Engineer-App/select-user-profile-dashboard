import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl mb-4">Profile</h1>
      <p>Welcome, {user.username}!</p>
    </div>
  );
};

export default Profile;