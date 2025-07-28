import Header from '@/components/layout/Header';
import Curriculum from './component'
import React from 'react'
import StudentNavbarNew from '@/components/layout/StudentB2B/student-navbar-new';

const YearlyPlan = () => {
	return <>
		<StudentNavbarNew activeState='Dashboard'/>
		<Curriculum />
	</>
}

export default YearlyPlan;
