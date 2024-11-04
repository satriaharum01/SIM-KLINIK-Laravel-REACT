import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const TITLE = 'Dental Medan';
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [alertMessage, setAlertMessage] = useState('');
  
  const formhandleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div>
      <div className="logo text-center">
        <h1>{TITLE}</h1>
      </div>
      <div className="login-box">
        {alertMessage && (
          <div className="alert alert-danger">
            Username atau Password kamu salah. Silahkan coba kembali.
          </div>
        )
        }

        < Form className="login-form" method="POST">
          <h3 className="login-head"><i className="bi bi-person me-2"></i>SIGN IN</h3>
          <div className="mb-3">
            <label className="form-label">USERNAME</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={formhandleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">PASSWORD</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={formhandleChange}
              required
            />
          </div>
          <div className="mb-3">
            <div className="utility">
            </div>
          </div>
          <div className="mb-3 btn-container d-grid">
            <Button className="btn btn-primary btn-block"><i className="bi bi-box-arrow-in-right me-2 fs-5"></i>SIGN
              IN</Button>
          </div>
        </Form>
      </div>
    </div >
  );
};

export default Login;