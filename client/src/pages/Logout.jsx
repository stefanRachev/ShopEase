import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../context/useUser";

function Logout() {
  const navigate = useNavigate();
  const { logout } = useUser();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (response.ok) {
          logout();
          navigate("/login");
        } else {
          console.error("Logout failed");
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    performLogout();
  }, [logout, navigate]);

  return null;
}

export default Logout;
