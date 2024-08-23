import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import Cart from '@/components/templates/Cart/shopCart/Cart'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

const page = async () => {
  const user = await authUser()
  return (
    <section className='relative mb-[100px] mt-[50px] md:mb-[100px] md:mt-[40px]'>
        <BreadCrumb title={["سبد خرید"]} />
        <div className="max-w-screen-xl mx-auto mt-[20px]">
            <Cart user={user}/>
        </div>
    </section>
  )
}

export default page