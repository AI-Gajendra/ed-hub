import GoBack from '@/components/principal/goback';
import React from 'react'
import AdminCourse from './component';
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';
import MaxWidthWrapper from '@/components/admin/max-width-wrapper';

const AdminCourseManagement = () => {
  return (
    <>
      <GoBack GoBackHeading="Edit Memeberships Plans" />
      <MaxWidthWrapper>
        <AdminCourse />
      </MaxWidthWrapper >
    </>
  )
}

export default AdminCourseManagement;