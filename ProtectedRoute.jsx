import React from 'react';
import { Navigate } from 'react-router-dom'; // Replace Redirect with Navigate

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    // If the user is not authenticated, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
