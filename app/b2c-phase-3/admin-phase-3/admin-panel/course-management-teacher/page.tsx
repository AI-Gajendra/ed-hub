import BackButton from '@/components/common-components/BackButton';
import React from 'react'
import CourseManagement from './ManageComponent';
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';

const Managements = () => {
  return (
    <>
     <BackButton Heading="Course Name" />
      <AdminB2CWrapper>
        <CourseManagement />
      </AdminB2CWrapper>
    </>
  )
}

export default Managements;