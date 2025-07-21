'use client'

import { useState } from 'react'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import Navbar from '@/components/phase-3/navbar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'

const user = {
	avatarSrc: '/admin/usernav.jpg',
	name: 'Shlok Agheda',
	role: 'Student',
}

export default function GradeAndContent() {
	const subjects = ['Mathematics', 'English', 'Science', 'Social Studies', 'Hindi', 'EVS', 'Gk & IT', 'Third Language']

	return (
		<div className="bg-[#EEEEEE] h-full min-h-screen">
			<Navbar user={user} />
			<MaxWidthWrapper className="py-10">
				<div>
					<div className="flex gap-4 justify-between items-center">
						<ArrowLeft />
						<div className="text-xl font-medium mb-2">Chooses Pre-Recorded Courses</div>
						<div></div>
					</div>
					<div className="w-full flex justify-center items-center mt-4">
						<Button className="bg-[#FF3366] hover:bg-[#F9FAFB]/90 text-white rounded-2xl px-2">Academic Courses</Button>
					</div>
				</div>

				{/* The content Box */}
				<div className="flex gap-4 justify-end items-center my-8">
					{Array.from({ length: 4 }).map((_, index) => (
						<DropdownMenu key={index}>
							<DropdownMenuTrigger asChild>
								<Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
									Filter {index + 1} <ChevronDown />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Billing</DropdownMenuItem>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuItem>Subscription</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					))}
				</div>

				<div>
					<h2 className="text-xl">Select Grades and Content according to Subjects</h2>

					<div className="space-y-8 mt-4">
						{/* Maths */}
						{subjects.map((sub, indx) => (
							<div className="bg-white p-4 rounded-2xl" key={indx}>
								<h3 className="text-xl font-semibold mb-2">{sub}</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2 justify-between items-center">
									<GradeCard />
									<GradeCard />
									<div className="sm:col-span-2 lg:col-span-1">
										<GradeCard />
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Total */}
					<div className="my-20">
						<p className="text-lg">You have selected X number of grades and content.</p>
						<h1 className="text-[#3366FF] font-bold text-3xl leading-12">Total Cost: X,XXX</h1>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	)
}

function GradeCard() {
	const [selected, setSelected] = useState(true)

	return (
		<div className="bg-[#F0F0F0] rounded-2xl overflow-hidden w-full">
			<Image
				src={'/phase-3/grade-card.png'}
				alt="Grade Card"
				width={572}
				height={572}
				className="w-full max-h-52 object-cover"
			/>

			<div className="p-4">
				<h3 className="text-[1.3rem] text-center mb-2 font-medium">Grade and Content Name</h3>
				<p className="text-[#2E2E2E] text-center text-sm tracking-wide leading-6">
					Courses offered in this Course Type Name. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>

				{/* Toggle Section */}
				<div className="mt-4 text-center">
					<p className="text-sm my-2 text-[#2E2E2E]">{selected ? 'Selected' : 'Not Selected'}</p>

					<div className="flex justify-center items-center gap-3 cursor-pointer" onClick={() => setSelected(!selected)}>
						{/* Custom Toggle Switch */}
						<div
							className={`w-14 h-6 flex items-center rounded-full p-1 duration-300 ${
								!selected ? 'bg-yellow-600' : 'bg-[#EBE9E9]'
							}`}>
							<div
								className={`bg-[#3366FF] w-5 h-5 rounded-full shadow-md transform duration-300 ${
									!selected ? 'translate-x-8' : ''
								}`}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
