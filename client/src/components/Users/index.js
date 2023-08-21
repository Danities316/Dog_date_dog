import React, { useState } from 'react'
import Navbar from '../Navbar';
import axios from 'axios';

export default function Users() {
    const [currentUser, setCurrentUser] = useState(null)

    const submit = async (e) => {
        e.preventDefault();
        try {
          const data = await axios.get("http://localhost:9000/user/profile", {
            data: {
              email: currentUser
            },
            withCredentials: true,
          });
          console.log(data)
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
    <Navbar />
    <div>Get Users</div>
      <div class="container">
        <div class="window">
          <div class="overlay"></div>
          <div class="content">
            <div class="welcome">Welcome Back!</div>
            <form action="POST">
              <div class="input-fields">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="input-line full-width"
                ></input>
              </div>
              <div>
                <button class="ghost-round full-width" onClick={submit}>Get User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
  )
}
