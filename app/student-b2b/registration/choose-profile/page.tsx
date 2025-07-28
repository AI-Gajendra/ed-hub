'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiCheck } from 'react-icons/fi'
import AuthLayout from '@/components/auth-layout' // Adjust path if needed
import { useRouter } from 'next/navigation'

const profiles = [
	{ id: 'student', label: 'Student / Parents', iconSrc: '/images/profile-student-smiley.svg', href: '/student-b2b/registration/school-code' },
	{ id: 'teacher', label: 'Teacher', iconSrc: '/images/profile-teacher-pen.svg', href: '' },
	{ id: 'principal', label: 'Principal', iconSrc: '/images/profile-principal-star.svg', href: '' },
]

export default function ChooseProfilePage() {
	const [selectedProfile, setSelectedProfile] = useState<string>(profiles[0].id)
	const router = useRouter();
	return (
		<AuthLayout
			leftPanelTitle="Become a Future School"
			leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
			<h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Profile</h2>
			<p className="text-sm text-black mb-8 leading-relaxed">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			</p>

			<div className="space-y-4">
				{profiles.map(profile => (
					<div
						key={profile.id}
						onClick={() => router.push(profile.href)}
						className="flex items-center justify-between p-2 pl-4 pr-2 cursor-pointer transition-all duration-200 bg-white hover:-lg rounded-full border border-gray-200">
						<div className="flex items-center gap-4">
							<Image src={profile.iconSrc} alt={`${profile.label} icon`} width={32} height={32} />
							<span className="text-md font-semibold text-gray-700">{profile.label}</span>
						</div>
						<div
							className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${selectedProfile === profile.id ? 'bg-[#3366FF]' : 'bg-transparent'
								}`}>
							{selectedProfile === profile.id && <FiCheck className="w-5 h-5 text-white stroke-2" />}
						</div>
					</div>
				))}
			</div>
		</AuthLayout>
	)
}
