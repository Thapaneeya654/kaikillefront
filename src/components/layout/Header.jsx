import { useAuth } from "../../contexts/auth-context";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useAuth();
  return (
    <div>
      <div className="navbar bg-primary rounded-lg flex justify-between">
        <a className="text-warning font-bold uppercase text-2xl pl-4">
          KAIKILLE
        </a>
        {user ? null : (
          <Link to={"/register"}>
            <button className="btn normal-case btn-warning text-primary">
              Not a member? Sign up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
