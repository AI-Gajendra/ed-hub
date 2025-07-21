import Activity from "./activity";
import BackButton from '@/components/common-components/BackButton';


export default function CourseDetail() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/images/person.jpg', // UPDATE PATH

    }
    return <div>
        <BackButton Heading="Teacher Login Activity" />
        <Activity />
        

    </div>
}