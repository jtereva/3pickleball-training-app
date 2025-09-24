import { useState } from 'react';
import { User, LogIn, LogOut } from 'lucide-react';

/**
 * Simple authentication component using localStorage
 * For production, this would be replaced with a proper auth service
 * @param {Object} user - Current user object
 * @param {Function} onLogin - Function to handle login
 * @param {Function} onLogout - Function to handle logout
 */
const AuthComponent = ({ user, onLogin, onLogout }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onLogin({ name: name.trim(), email: email.trim() });
      setIsLoginOpen(false);
      setName('');
      setEmail('');
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
        <User className="text-green-500" size={20} />
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-gray-900">Welcome, {user.name}!</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
        <div className="sm:hidden">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
        </div>
        <button
          onClick={onLogout}
          className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Sign out"
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsLoginOpen(!isLoginOpen)}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <LogIn size={16} />
        <span className="hidden sm:inline">Sign In</span>
      </button>

      {isLoginOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border p-4 w-80 z-10">
          <form onSubmit={handleLogin} className="space-y-3">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Sign In</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsLoginOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;