import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/TeacherB2CHeaderPhase3";
import GoBack from "@/components/principal/goback";
import TeachingForm from "./manage-course-teach";

const ManageTeachCourse = () => {

    return (
        <>
            <Header activeState="Dashboard"/>
            <GoBack GoBackHeading="Manage Your Course" />
            <TeachingForm />
            <Footer />
        </>
    )
}

export default ManageTeachCourse;