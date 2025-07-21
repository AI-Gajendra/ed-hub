import ChartsReport from './charts'
import CourseSection from './course-section'
import MaxWidthWrapper from '@/components/admin/max-width-wrapper'
import TeacherCard from './teacher-card'
import TeacherControlPanel from './teacher-control-panel'
import BackButton from '@/components/common-components/BackButton'

export default function page() {
	return (
		<div>
			<BackButton Heading="Teacher Profile" />
			<MaxWidthWrapper>
				<main className="flex-grow w-full max-w-[90rem] mx-auto p-4 ">
					<div className="space-y-4 ">
						<TeacherCard />
						<TeacherControlPanel />
						<CourseSection />
						<ChartsReport />
					</div>
				</main>
			</MaxWidthWrapper>
		</div>
	)
}
