import React, { useEffect, useState } from 'react'
import "./Cards.css"

const Cards = () => {

  // 1️⃣ Create a state for API data
  const [users, setUsers] = useState([]);

  // 2️⃣ Fetch data when component mounts
  useEffect(() => {
    const a = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUsers(data))   // update state with fetched data
      .catch((error) => console.error("Error fetching users:", error));
      
  }, []); // run only once after first render

  // 3️⃣ Render cards from state
  return (
    <div >
      <h1 className='font-bold text-2xl p-[20px] m-4'>User List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", width: "100vw", marginLeft: "20px"}}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            
            <p><strong>userId:</strong> {user.userId}</p>
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>Title:</strong> {user.title}</p>
            <p><strong>Body:</strong> {user.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards
