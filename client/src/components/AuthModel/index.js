import {useState} from "react";

export default function AuthModel({setShowModel}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  console.log(email, password, confirmPassword);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModel(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const isSignup = true;

  return (
    <div className="auth-modal">
      <div onClick={handleClick} className="close-icon">
        X
      </div>
      <h2>Geting Started</h2>
      <p>
        By clicking Log in, you agreed to our terms. Learn how we process your
        data in our <a>Privacy Policy</a> and <a>Cookie Policy</a>
      </p>
      <h2>{isSignup ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password-check"
          id="password-check"
          name="password-check"
          placeholder="Confirm Password"
          required={true}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
      </form>
      AUTH MODEL
    </div>
  );
}
