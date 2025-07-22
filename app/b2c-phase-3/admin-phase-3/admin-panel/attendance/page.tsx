import AttendancePage from './attendance-page'
import Link from 'next/link'
import NamingBar from '@/components/admin/ui/naming-bar'
export default function page() {
	return (
		<div>
			<Link href="/b2c-phase-3/admin-phase-3/admin-panel/dashboard">
				<NamingBar name="Attendance" />
			</Link>
			<AttendancePage />
		</div>
	)
}
