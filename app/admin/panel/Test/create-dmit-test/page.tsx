'use client'

import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import NamingBar from '@/components/admin/ui/naming-bar'
import { Input } from '@/components/ui/input'
import PointSection from '@/components/admin/ui/point-section'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DmitTestQuestions() {
	return ( <><NamingBar name="Create New DMIT Test" />
		<div className="bg-[#eeeeee] ">
			<div className='p-4'>
			<MaxWidthWrapper className="bg-white  rounded-2xl my-10 pb-10">
				<PointSection
					points={[
						{ value: 1, name: 'DMIT Test Details', isActive: true },
						{ value: 2, name: 'DMIT Test Questionnaire ', isActive: false ,link:"/admin/panel/Test/create-dmit-test-questions"},
						{ value: 3, name: 'Review', isActive: false ,link:"/admin/panel/Test/create-dmit-test-review"},
					]}
				/>

				<div className="flex flex-col justify-center  font-main items-center gap-8 mt-4 w-full max-w-lg px-4 mx-auto">
  {/* Test Name */}
  <div className="w-full">
    <Label htmlFor="testName" className="font-medium">
      Test Name
    </Label>
    <Input
      className="rounded-full bg-[#F9FAFB] mt-2 w-full"
      placeholder="Text"
    />
  </div>

  {/* Description */}
  <div className="w-full">
    <Label htmlFor="description" className="font-medium">
      Description
    </Label>
    <Textarea
      placeholder="Text"
      id="description"
      className="rounded-2xl bg-[#F9FAFB] mt-2 w-full"
      rows={6}
    />
  </div>

  {/* Duration & Points */}
  <div className="w-full">
    <Label className="font-medium mb-4">Duration & Point</Label>
    <div className="flex flex-wrap sm:flex-nowrap gap-4">
      <div className="text-xs text-[#6B7280] flex-1 min-w-[100px]">
        <Label htmlFor="hours" className="font-light">
          Hours
        </Label>
        <Input
          id="hours"
          type="number"
          className="rounded-full bg-[#F9FAFB] mt-2 w-full placeholder:text-black placeholder:text-center"
          placeholder="00"
        />
      </div>
      <div className="text-xs text-[#6B7280] flex-1 min-w-[100px]">
        <Label htmlFor="minutes" className="font-light">
          Minutes
        </Label>
        <Input
          id="minutes"
          type="number"
          className="rounded-full bg-[#F9FAFB] mt-2 w-full placeholder:text-black placeholder:text-center"
          placeholder="00"
        />
      </div>
      <div className="text-xs text-[#6B7280] flex-1 min-w-[100px]">
        <Label htmlFor="totalPoints" className="font-light">
          Total Points
        </Label>
        <Input
          id="totalPoints"
          type="number"
          className="rounded-full bg-[#F9FAFB] mt-2 w-full placeholder:text-black placeholder:text-center"
          placeholder="00"
        />
      </div>
      <div className="text-xs text-[#6B7280] flex-1 min-w-[100px]">
        <Label htmlFor="passPoint" className="font-light">
          Pass Points
        </Label>
        <Input
          id="passPoint"
          type="number"
          className="rounded-full bg-[#F9FAFB] mt-2 w-full placeholder:text-black placeholder:text-center"
          placeholder="00"
        />
      </div>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
    <Link href={"/admin/panel/Test/dmit-test"} className="w-full sm:w-auto">
      <Button className="rounded-full py-6 w-full" variant={"outline"}>
        Cancel
      </Button>
    </Link>
    <Link href={"/admin/panel/Test/create-dmit-test-questions"} className="w-full sm:w-auto">
      <Button className="bg-[#3366FF] rounded-full py-6 w-full sm:w-auto text-white shadow-none">
        Continue
      </Button>
    </Link>
  </div>
</div>

			</MaxWidthWrapper></div>
		</div></>
	)
}
