import React, { useEffect, useState } from "react";
import "./FetchData.css"; // Import the CSS file

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h2 className="title">User List</h2>
            <div className="user-grid">
                {users.map((user) => (
                    <div key={user.id} className="card">
                        <h4>{user.name}</h4>
                        <h5 className="username">{user.username}</h5>
                        <p>
                            <strong>Email:</strong> {user.email} <br />
                            <strong>Phone:</strong> {user.phone} <br />
                            <strong>Website:</strong>
                            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                                {user.website}
                            </a> <br />
                            <strong>Company:</strong> {user.company.name}
                        </p>
                        <button className="btn">View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchData;
