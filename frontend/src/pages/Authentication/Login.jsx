import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  TextInput,
  PasswordInput,
  SubmitButton,
} from "../../components/auth";

export default function Login() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // (future use) rememberMe true হলে এখানে localStorage / cookie ব্যবহার করা যাবে
    // এখন UI only
    navigate("/home");
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Login to Account"
          desc="Please enter your email and password to continue"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput label="Email address" placeholder="Enter your email" />
          <PasswordInput label="Password" />

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-[#8BC53F] cursor-pointer"
              />
              Remember Password
            </label>

            <button
              type="button"
              onClick={() => navigate("/forget-password")}
              className="text-[#8BC53F] hover:underline cursor-pointer"
            >
              Forgot password?
            </button>
          </div>

          <SubmitButton text="Sign in" />
        </form>

        {/* Back to Home */}
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="mt-4 text-sm text-gray-500 hover:text-[#8BC53F] transition cursor-pointer"
        >
          ← Back to Home
        </button>
      </AuthCard>
    </AuthLayout>
  );
}
