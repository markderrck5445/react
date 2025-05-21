import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }, 1500);
    }
  };

  // We don't need the navigateToHome function anymore since we're using Link

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {isSuccess ? (
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Registration successful!</h3>
            <p className="mt-1 text-sm text-gray-500">
              Your account has been created successfully.
            </p>
            <Link  to="/Home"
              className="mt-6 block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 text-center"
            >
              Proceed to Home
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {showPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                      )}
                      {!showPassword && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {showConfirmPassword ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                      )}
                      {!showConfirmPassword && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      )}
                    </svg>
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                </button>
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{' '}
                <a href="/login" className="text-blue-600 hover:text-blue-800">
                  Log in
                </a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}