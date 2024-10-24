import { useState, useEffect } from "react";
import { fetchAdminUsers, deleteUser } from "../utils/api";
import { Card, Button, Container } from "react-bootstrap";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchAdminUsers();
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Container>
      <h2>Manage Users</h2>
      {users.length ? (
        users.map((user) => (
          <Card key={user._id} className="mb-3">
            <Card.Body>
              <Card.Title>{user.email}</Card.Title>
              <Card.Text>
                User ID: {user._id}
              </Card.Text>
              <Button variant="danger" onClick={() => handleDelete(user._id)}>
                Delete User
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No users found</p>
      )}
    </Container>
  );
};

export default AdminUsers;
