import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-600 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Forgot Password
        </h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username">Mobile Number</Label>
            <Input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your number"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">New Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your new password"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              placeholder="Confirm your password"
              className="mt-1"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
