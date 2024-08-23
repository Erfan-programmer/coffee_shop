import React from 'react'
import Navbar from './modules/Navbar/Navbar'
import { cookies } from 'next/headers'
import { authUser } from '@/utils/serverHelpers'
import CategoryModel from "@/models/Category"
const Header= async ({userToken}:any) => {
  const category = await CategoryModel.findOne({}) 
  return (
    <>
    <Navbar userToken={userToken} categoryName={JSON.parse(JSON.stringify(category.label))}/>
    </>
  )
}

export default Header