import React from "react";
import { useAuth } from "../../contexts/auth-context";

function Avatar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="avatar place-items-center flex items-start justify-center">
      <div className="w-40 rounded flex items-center justify-center">
        <img src="/src/assets/logomain.png" />
      </div>
      <div className="font-bold pt-1">
        <p>Hello, {user?.firstName}</p>
      </div>
    </div>
  );
}

export default Avatar;
