import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  SubmitButton,
} from "../../components/auth";

export default function PasswordSuccess() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle={
            <div className="text-center">
              Password Updated <br />
              Successfully!
            </div>
          }
          desc="Your new password has been saved successfully. You can now continue securely."
        />

        <SubmitButton
          type="button"
          text={
            <>
              <Icon icon="mdi:login" width={18} />
              Back to Login
            </>
          }
          onClick={() => navigate("/login")}
        />
      </AuthCard>
    </AuthLayout>
  );
}
