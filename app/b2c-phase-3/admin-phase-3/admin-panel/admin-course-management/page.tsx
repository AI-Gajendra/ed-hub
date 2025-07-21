import React from 'react'
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';
import BackButton from '@/components/common-components/BackButton';
import AdminCourse from './AdminCourse';

const AdminCourseManagement = () => {
  return (
    <>
      <BackButton Heading="Edit Memeberships Plans" />
      <AdminB2CWrapper>
        <AdminCourse />
      </AdminB2CWrapper>
    </>
  )
}

export default AdminCourseManagement;