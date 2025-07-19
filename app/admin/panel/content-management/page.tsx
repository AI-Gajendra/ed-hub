'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ChevronDown, Search, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Image from 'next/image'

export default function ContentManagement() {
	const tabs = ['Analysis', 'Teachers', 'Student', 'Content'] as const
	type Tab = (typeof tabs)[number]

	const [activeTab, setActiveTab] = useState<Tab>('Content')

	return (
		<div className="bg-[#EEEEEE]">
			<NamingBar name="School Name" />
			<div className="px-4">
				<MaxWidthWrapper className="bg-white p-4 rounded-2xl my-8">
					<SearchFilterBar />
					<div className="my-6 flex items-center justify-start gap-4 sm:gap-8 font-medium">
						{tabs.map(tab => (
							<div
								key={tab}
								onClick={() => setActiveTab(tab)}
								className={cn(
									'cursor-pointer',
									activeTab === tab ? 'text-[#3366FF] underline underline-offset-8' : 'text-[#6B7280]'
								)}>
								{tab}
							</div>
						))}
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{Array.from({ length: 12 }).map((_, i) => (
							<FolderCard key={i} />
						))}
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	)
}

function SearchFilterBar() {
	return (
		<div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
			<div className="relative w-full">
				<Input className="border-black rounded-full pl-9" placeholder="Search" />
				<Search className="absolute top-0 translate-y-1/4 left-2" />
			</div>

			<Button className="bg-[#FF3366] w-full sm:w-fit hover:bg-[#FF3366]/90 font-normal px-2 rounded-full text-white">
				Create Folder
			</Button>

			<div className="flex flex-nowrap gap-4">
				{[1, 2, 3].map(n => (
					<DropdownMenu key={n}>
						<DropdownMenuTrigger asChild>
							<Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
								Filter {n} <ChevronDown />
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
		</div>
	)
}

function FolderCard() {
	return (
		<div className="p-3 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] flex gap-4">
			<Image src="/admin/folder-img.png" alt="Folder" width={100} height={100} className="w-24 h-24 object-cover rounded-xl" />

			<div className="flex flex-col gap-1 justify-between items-start w-full">
				<h4 className="font-medium">Folder Name</h4>
				<p className="text-xs font-[#6B7280]">100 Files</p>
				<Button className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full w-full font-normal text-[#6B7280]">
					<Settings />
					Manage Access
				</Button>
			</div>
		</div>
	)
}
