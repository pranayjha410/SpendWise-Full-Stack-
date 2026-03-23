import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
const Login = () => {
  return (
  <AuthLayout>
    
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        
        <h3 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h3>

        <p className="text-gray-500 text-center mb-6">
          Please enter your details to log in
        </p>
        
      </div>
    
   </AuthLayout>
  )
}

export default Login
