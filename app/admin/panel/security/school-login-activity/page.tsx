'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SchoolLoginActivity() {
	const [selectedTab, setSelectedTab] = useState<string>('Teachers')
	const [selectedClass, setSelectedClass] = useState<string>('Class 1') // ✅ Track selected class

	const tabs = [{ label: 'Teachers' }, { label: 'Students' }]

	const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5']

	return (
		<div className="p-4">
			<MaxWidthWrapper className="bg-white  rounded-2xl py-4  my-4 ">
				<div className="relative overflow-hidden p-4 rounded-2xl">
					{/* Background Image */}
					<div
						className="absolute  font-main inset-0 z-0 bg-[url('/common-images/pattern.png')] bg-cover bg-center filter grayscale opacity-50"
						aria-hidden="true"
					/>
					<div className="flex rounded-2xl flex-wrap lg:flex-nowrap gap-4 sm:gap-6">
						<div className="w-full lg:w-[70%] relative z-20">
							<div className="my-4 rounded-full bg-white px-4 py-2 w-fit">
								<p className="font-semibold text-md md:text-xl">School Name</p>
							</div>
							<Image
								src={'/images/school.jpg'}
								width={1880}
								height={1250}
								alt="School Management Report"
								className="w-full h-96 rounded-2xl object-cover"
							/>
						</div>
						<div className="w-full lg:w-[30%]  z-10  font-main h-fit text-black rounded-2xl bg-white p-3">
							<p>
								<span className="font-medium">Email: </span>
								example@gm.com
							</p>
							<p>
								<span className="font-medium">Contact: </span>
								+91 1234567890
							</p>
							<p>
								<span className="font-medium">City: </span>
								Mumbai
							</p>
							<p>
								<span className="font-medium">State: </span>
								Maharashtra
							</p>
							<p>
								<span className="font-medium">Address: </span>
								Vivamus sit amet sem ac nibh bibendum condimentum vel in sem. Curabitur tincidunt pretiutm faucibus. Vestibulum eget
								pellentesque justo. Vivamus ut pulvinar nibh
							</p>
						</div>
					</div>
				</div>

				{/* Tabs */}
				<div className="flex items-center justify-start gap-8 mb-4 font-medium">
					{tabs.map((tab, indx) => (
						<div
							key={indx}
							className={cn(
								'text-[#6B7280] hover:cursor-pointer',
								selectedTab === tab.label && 'text-[#3366FF] underline underline-offset-8 decoration-2'
							)}
							onClick={() => setSelectedTab(tab.label)}>
							{tab.label}
						</div>
					))}
				</div>

				{/* Class Buttons */}
				<div className="rounded-2xl border border-[#E5E7EB] px-4 py-2 flex flex-wrap sm:flex-nowrap justify-start sm:justify-center items-center sm:gap-8">
					{classes.map((cls, indx) =>
						selectedClass === cls ? (
							<Button
								key={indx}
								className="rounded-xl bg-[#FF3366] hover:bg-[#FF3366]/90 text-white px-2"
								onClick={() => setSelectedClass(cls)}>
								{cls}
							</Button>
						) : (
							<Button
								key={indx}
								className="rounded-2xl bg-white hover:bg-gray-100 text-[#6B7280] px-4"
								onClick={() => setSelectedClass(cls)}>
								{cls}
							</Button>
						)
					)}
				</div>

				<div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
					{selectedTab === 'Teachers' ? (
						<>
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
							<TecherChip />
						</>
					) : (
						<>
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
							<StudentRectangle />
						</>
					)}
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

function TecherChip() {
	return (
		<Link href={"/admin/panel/security/teacher-login-activity"}>
			<div className="rounded-2xl bg-[#F3F4F6] flex gap-4 items-center p-2 min-w-52 w-full">
				<Image
					src={'/images/teacher.jpg'}
					width={480}
					height={331}
					alt="teacher profile image"
					className="rounded-2xl w-18 h-18 object-cover"
				/>
				<div>
					<p className="font-semibold text-lg">Name</p>
					<p className="text-[#FF3366] text-sm font-medium">Subject</p>
					<p className="text-xs text-[#6B7280] font-light">Class Assigned</p>
					<p className="text-xs text-[#6B7280] font-light">Batch Assigned</p>
				</div>
			</div></Link>
	)
}

function StudentRectangle() {
	return (<Link href={"/admin/panel/security/student-login-activity"}>
		<div className="bg-[#F3F4F6] rounded-2xl px-2 py-2 border border-[#B0B0B0] flex items-center gap-2">
			<Image
				src="/images/admin-student-profile.png"
				alt="Teacher Profile"
				width={228}
				height={228}
				className="w-20 h-20 aspect-square"
			/>
			<div className="flex flex-col justify-between items-start">
				<h2 className="text-lg font-light">Student Name</h2>
				<div className="flex flex-col gap-0.5 mt-1">
					<h4 className="text-[#6B7280] text-sm">Level / Grade</h4>
					<h4 className="text-[#6B7280] text-sm">Group</h4>
				</div>
			</div>
		</div></Link>
	)
}
