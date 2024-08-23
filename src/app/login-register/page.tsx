import Login_register from '@/components/templates/login-register/login-register'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
const Login_Register = () => {
  const userToken = cookies().get("token")
  
  if(userToken){
    redirect("/")
}
  return (
    <Login_register />
  )
}

export default Login_Register