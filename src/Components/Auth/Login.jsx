import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase.config';

function Login() {
  const [errMsg, setErrMsg] = useState(""),
  navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    signInWithEmailAndPassword(auth, form.get("mail"), form.get("pass"))
    .then(res=>{
      setErrMsg("");
      navigate("/");
    })
    .catch(err=>{
      setErrMsg(err.message);
    });
  };

  const simulateGoogleSignIn = () => {
    const provider = new GoogleAuthProvider(auth);
    signInWithPopup(auth, provider)
    .then(res=>{
      navigate("/");
    })
    .catch(err=>{
      setErrMsg(err.message);
    })
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    name='mail'
                    required
                  />
                </div>

                <div className="form-group my-3">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    name='pass'
                  />
                </div>

                {
                  !errMsg &&
                  <div className="form-group">
                    <p className='text-danger'>{errMsg}</p>
                  </div> 
                }

                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>

              <p className='text-center my-3'>Don't have an account? <Link to='/register/'>Click here</Link></p>

              <div className="d-flex align-items-center justify-content-center">
                <hr width="38%" />
                OR
                <hr width="38%" />
              </div>

              <div className="text-center">
                <button
                  className="btn btn-light"
                  onClick={simulateGoogleSignIn}
                >
                  <img
                    src="/img/images.png" // Replace with the Google logo image
                    alt="Google Sign-In"
                    style={{ marginRight: '10px',width: "20px" }}
                  />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;