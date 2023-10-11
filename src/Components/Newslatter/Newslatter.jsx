// src/components/Newsletter.js
import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>Get it touch with us!!</h1>
            <p>Receive the latest updates from us without any efforts!!</p>
        </div>

        <div className="col-md-6">
          <div className="card" style={{border: "none"}}>
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Subscribe to our Newsletter</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;