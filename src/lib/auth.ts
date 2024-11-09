export type User = {
    email: string;
    // Add other user properties as needed
  };
  
  export type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
  };
  
  // Simulate authentication API call
  export const loginUser = async (email: string, password: string): Promise<AuthState> => {
    // In a real app, this would be an API call to your backend
    if (email && password) {
      const user = { email };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "true");
      return { user, isAuthenticated: true };
    }
    throw new Error("Invalid credentials");
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  };
  
  export const checkAuth = (): AuthState => {
    if (typeof window === "undefined") return { user: null, isAuthenticated: false };
    
    const user = localStorage.getItem("user");
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    
    return {
      user: user ? JSON.parse(user) : null,
      isAuthenticated,
    };
  };