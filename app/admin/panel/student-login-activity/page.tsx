import Activity from "@/components/admin/ui/activity";
import GoBack from "@/components/principal/goback";

export default function CourseDetail() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/images/person.jpg', // UPDATE PATH

    }
    return <div>
       
        <GoBack GoBackHeading="Student Login Activity" />
        <Activity isStudent/>
        

    </div>
}