'use client'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { Input } from '@/components/ui/input'
import { ChevronDown, Download, Search, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function ContentManagement() {
	return (
		<div className="bg-[#EEEEEE]">
			<NamingBar name="School Name" />

			<div className="px-4">
				<MaxWidthWrapper className="bg-white p-4 rounded-2xl my-8">
					<SearchFilterBar />

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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
			<Image src="/admin/image-copy.png" alt="Folder" width={100} height={100} className="w-24 h-24 object-cover rounded-xl" />

			<div className="flex flex-col gap-1 justify-between items-start flex-1">
				<h4 className="font-medium">File Name</h4>
				<p className="text-xs font-[#6B7280]">23rd June 2023</p>
				<div className="flex gap-4 items-center w-full">
					<Button className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full font-normal text-[#6B7280] flex-1">
						<Settings />
						Manage Access
					</Button>
					<Button className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full font-normal text-[#6B7280] flex-1">
						<Download />
						Download
					</Button>
				</div>
			</div>
		</div>
	)
}
