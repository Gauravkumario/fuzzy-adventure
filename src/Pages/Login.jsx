import React, { useEffect } from "react";
import {
  useNavigate,
  useNavigation,
  useLocation,
  useActionData,
  Form,
} from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return data;
  } catch (err) {
    return {
      error: err.message,
    };
  }
}

export default function Login() {
  const data = useActionData();
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const from = location.state?.from || "/host";

  useEffect(() => {
    if (data?.token) {
      navigate(from, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="login-container">
      {location.state?.message && (
        <h3 className="login-error">{location.state.message}</h3>
      )}
      <h1 className="login-page-header">Sign in to your account</h1>
      {data?.error && <h3 className="login-error">{data.error}</h3>}
      <Form action="/login" method="post" className="login-form">
        <input name="email" type="email" placeholder="Email : van@life.com" />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password : vanlife"
        />
        <br />
        <button
          disabled={navigation.state === "submitting"}
          className="login-btn"
        >
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
