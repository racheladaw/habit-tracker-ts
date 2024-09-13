import React from "react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/user')
      .then(response => response.json())
      .then(data => setCurrentUser(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

  function signOut() {
    fetch('http://localhost:3000/users/sign_out',  {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
    })
    .then(response => setCurrentUser(null))
    .catch(error => console.error('Error:', error));
  }

  return (
    <nav>
      {currentUser ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <a href="http://localhost:3000/users/sign_in">Sign In</a>
      )}
    </nav>
  );
}