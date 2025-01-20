import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useGuide from "../Hooks/useGuide";

const GuideRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const { isGuide, isGuideLoading } = useGuide();
  const location = useLocation();

  if (loading || isGuideLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isGuide) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
export default GuideRouter;
