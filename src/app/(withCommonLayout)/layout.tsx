import FooterPage from '@/components/Shared/Footer/Footer'
import Navbar from '@/components/Shared/Navbar/Navbar'
import React from 'react'

const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen'>{children}</div>
      <FooterPage></FooterPage>
    </>
  )
}

export default CommonLayout
