import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAccess } from "../../api/auth";

export const Admin: React.FC = () => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccess = async () => {
      const access = await checkAccess("admin");
      if (!access) {
        navigate("/login");
      }
      setHasAccess(access);
    };

    verifyAccess();
  }, [navigate]);

  if (hasAccess === null) {
    return <div>Loading...</div>;
  }

  return <div>Admin</div>;
};
