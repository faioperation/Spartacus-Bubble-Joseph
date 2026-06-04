import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  PasswordInput,
  SubmitButton,
  BackNextButtons,
} from "../../components/auth";

export default function NewPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Set a new password"
          desc="Create a new password. Ensure it differs from previous ones for security."
        />

        <form>
          <PasswordInput label="New Password" />
          <PasswordInput label="Confirm Password" />

          {/* Main CTA */}
          <SubmitButton text="Reset Password" />

          {/* Back & Next navigation */}
          <BackNextButtons
            backTo="/verify-otp"
            nextTo="/password-success"
            backLabel="Back"
            nextLabel="Next"
          />
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
