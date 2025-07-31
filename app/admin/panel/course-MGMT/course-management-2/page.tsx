
import GoBack from "@/components/principal/goback";
import CourseManagement from "./component";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";

export default function CourseDetail() {
    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/images/person.jpg', // UPDATE PATH

    }
    return <div className="bg-[#EEEEEE] ">
       
        <GoBack GoBackHeading="School Name" />
       <MaxWidthWrapper className="bg-white  m-4 md:m-6 p-4 rounded-2xl">
       <div> <CourseManagement/></div>
</MaxWidthWrapper>
    </div>
}