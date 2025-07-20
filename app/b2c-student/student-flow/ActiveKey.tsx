"use client"
import { BookOpen, Brain, ChartNoAxesColumn, Info, Star } from "lucide-react";
import { useState } from "react";

export default function ActiveKey() {
    const [activeTab, setActiveTab] = useState("about");

    const menuItems = [
        { id: "about", label: "About Course", icon: Info },
        { id: "benefits", label: "Benefits", icon: Star },
        { id: "pedagogy", label: "Pedagogy", icon: Brain },
        { id: "curriculum", label: "Curriculum", icon: BookOpen },
        { id: "levels", label: "Levels", icon: ChartNoAxesColumn },
    ];

    const contentMap = {
        about: {
            title: "About Course",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique rhoncus risus, nec sagittis sapien bibendum non. Aenean suscipit, tortor sed tempor ornare, purus enim aliquet sapien, vitae fringilla ipsum massa in justo. Maecenas venenatis mauris vitae ligula tincidunt volutpat. Fusce id enim velit. Fusce ornare, nulla ut malesuada sagittis, libero sem aliquam tortor, vel aliquet nisl mauris a nisl. Nam vestibulum egestas nibh sit amet malesuada. Proin erat risus, mollis in metus vestibulum, auctor maximus metus. Morbi ac dictum sem. Nullam vitae congue tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquam nisl quis nisl tincidunt, nec aliquam lectus gravida. Pellentesque varius purus vel dignissim pulvinar. Proin viverra elit eget leo dictum aliquam. Nam ornare arcu sed pretium ornare. Vestibulum vel dignissim dolor.

Etiam ornare arcu in lorem mollis eleifend. Curabitur blandit tortor vitae augue cursus, eu efficitur tellus rhoncus. Aenean vestibulum enim ac lobortis pharetra. Vestibulum aliquet nisl a odio lacinia, a porttitor mi bibendum. Maecenas non auctor ante. In pulvinar erat nulla, ac vehicula mauris semper a. Nullam posuere tortor vitae odio venenatis, quis imperdiet neque placerat.`,
        },
        benefits: {
            title: "Benefits",
            content: `Discover the numerous advantages this course offers. From skill development to career advancement, you'll gain valuable insights and practical knowledge that will benefit you professionally and personally. Our comprehensive approach ensures you get the most out of your learning experience.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        pedagogy: {
            title: "Pedagogy",
            content: `Our teaching methodology is designed to maximize learning outcomes through interactive sessions, hands-on practice, and real-world applications. We employ modern educational techniques that cater to different learning styles and preferences.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
        curriculum: {
            title: "Curriculum",
            content: `The curriculum is carefully structured to provide a progressive learning path. Starting with fundamentals and gradually building up to advanced concepts, each module is designed to reinforce previous learning while introducing new challenges.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        },
        levels: {
            title: "Levels",
            content: `This course is designed for multiple proficiency levels, from beginners to advanced learners. Each level has specific objectives and outcomes, ensuring that every participant can progress at their own pace while meeting established benchmarks.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
        },
    };

    return (
        <div className="max-w-7xl flex flex-col lg:flex-row bg-[#FFFFFF] rounded-2xl mx-auto overflow-hidden">
            {/* Fixed Sidebar */}
            <div className="w-64 flex-shrink-0">
                <div className="px-4 pt-4 lg:p-6">
                    <nav className="space-y-4">
                        {menuItems.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = activeTab === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`
                    w-full flex items-center gap-3 px-4 py-2 rounded-full text-left transition-all duration-200
                    ${isActive
                                            ? "bg-[#FF3366] text-white"
                                            : "text-[#6B7280] hover:bg-gray-100 hover:text-gray-900"
                                        }
                  `}
                                >
                                    <IconComponent size={20} />
                                    <span className="">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-auto">
                <div className="px-4 lg:pl-8 lg:pr-4 py-4">
                    <h1 className="text-xl lg:pr-4 font-semibold mb-6">
                        {contentMap[activeTab as keyof typeof contentMap].title}
                    </h1>

                    <div className="max-w-none">
                        <p className="leading-relaxed text-sm sm:text-base whitespace-pre-line text-black">
                            {contentMap[activeTab as keyof typeof contentMap].content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}