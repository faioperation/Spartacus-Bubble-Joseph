import {
  AuthLayout,
  AuthCard,
  AuthHeader,
  OtpInput,
  SubmitButton,
  BackNextButtons,
} from "../../components/auth";

export default function VerifyOtp() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Spartacus Bubble"
          subtitle="Check your Email"
          desc="We sent a code to your email address.
          Please check your email for the 6 digit code."
        />

        <OtpInput />

        <SubmitButton text="Verify" />

        <div className="text-center text-sm text-gray-600">
          Didn’t receive the code?{" "}
          <button className="text-[#8BC53F] font-medium hover:underline cursor-pointer">
            Resend
          </button>
        </div>

        <BackNextButtons
          backTo="/login"
          nextTo="/new-password"
        />
      </AuthCard>
    </AuthLayout>
  );
}
