import React from 'react'
import CoursesSection from './components'
import Navbar from '@/components/phase-3/navbar'
const user = {
	avatarSrc: '/admin/usernav.jpg',
	name: 'Shlok Agheda',
	role: 'Student',
}
export default function Course() {
	return (
		<>
			<Navbar user={user} />
			<div className="bg-[#eeeeee] sm:py-6 sm:px-8 p-4  overflow-x-hidden min-h-screen">
				<CoursesSection />
			</div>
		</>
	)
}
