import Header from '@/components/layout/Header';
import Curriculum from './component'
import React from 'react'
import StudentNavbarNew from '@/components/b2c-phase-3/student-navbar-new';

const YearlyPlan = () => {
	return <>
		<StudentNavbarNew activeState='My course'/>
		<Curriculum />
	</>
}

export default YearlyPlan;
