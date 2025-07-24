import React from 'react'
import PrincipalLoginBanner from './login-banner'
import LoginTable from './login-status'

const LoginActivityTeacher = () => {
  return (
    <>
    <PrincipalLoginBanner name='Teacher Name' button1='Class Assigned' button2='Class Assigned' profileImage='/teacher-b2b/profile2.png' activity="Teacher" />
    <LoginTable />
    </>
  )
}

export default LoginActivityTeacher;