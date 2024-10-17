import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../context/useUser";
import { useCart } from "../context/useCart";

function Logout() {
  const navigate = useNavigate();
  const { logout } = useUser();
  const { setCartItems } = useCart();

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
          setCartItems([]);
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
  }, [logout, navigate, setCartItems]);

  return null;
}

export default Logout;
