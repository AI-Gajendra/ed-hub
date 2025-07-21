import BackButton from '@/components/common-components/BackButton';
import StudentDashboard from './student-dashboard';
import React from 'react'

const student = () => {
  return (
    <>
      
      <BackButton Heading="All Students" />
      <StudentDashboard />
    </>
  )
}

export default student;