import { SignInForm } from '@/components/auth/signin-form';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-600">
            Please sign in to your account
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}