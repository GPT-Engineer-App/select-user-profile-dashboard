import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <p>Welcome to your dashboard, {user.username}!</p>
    </div>
  );
};

export default Dashboard;