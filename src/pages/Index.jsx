import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to My App</h1>
      <p>This is the main entry point of the application.</p>
      {!isAuthenticated && (
        <Button onClick={() => navigate("/login")} className="mt-4">
          Login
        </Button>
      )}
    </div>
  );
};

export default Index;
