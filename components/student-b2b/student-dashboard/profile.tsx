'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header'; // Assuming Header is in this path
import Footer from '@/components/layout/Footer'; // Assuming Footer is in this path
import { FiArrowLeft, FiEdit2 } from 'react-icons/fi'; // Edit icon

// Helper Input Component
const FormInput = ({ label, id, placeholder, type = "text", value, onChange }: { label: string, id: string, placeholder: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="w-full">
        <label htmlFor={id} className="block text-xs font-medium text-gray-600 mb-1">
            {label}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
        />
    </div>
);


export default function EditStudentProfilePage() {
    const [formData, setFormData] = useState({
        name: 'Shlok Agheda',
        emailAddress: 'example@gm.com',
        contactNumber: '1234567890',
        classNum: '8th',
        gender: 'Male',
        dob: '00 JAN 0000', // Consider using a proper date format or date picker
        group: 'A',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        pinCode: '000000',
    });
    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProfileSave = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Profile Data Saved:", formData);
        // API call to save profile data
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter Subscription:", newsletterEmail);
        // API call to subscribe
        setNewsletterEmail('');
    };

    // Sample user data for the Header
    const headerUser = {
        name: formData.name,
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg', // UPDATE PATH
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header user={headerUser} />

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    {/* Profile Header Section */}
                    <div className="flex items-start mb-8">
                        {/* Back Button */}
                        <button className="mr-4 p-2 text-gray-600 hover:text-blue-600 focus:outline-none">
                            <FiArrowLeft className="w-6 h-6" />
                        </button>

                        {/* Avatar and Name */}
                        <div className="relative mr-6">
                            <Image
                                src="/placeholder-avatar-student.jpg" // UPDATE PATH
                                alt={formData.name}
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <button className="absolute bottom-0 right-0 p-1.5 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 focus:outline-none">
                                <FiEdit2 className="w-3 h-3" />
                            </button>
                        </div>
                        <div className="mt-3">
                            <h1 className="text-xl font-bold text-gray-800">{formData.name}</h1>
                            <p className="text-sm text-yellow-500 font-medium">Student</p>
                        </div>

                        {/* Decorative Pattern - Right Side */}
                        <div
                            className="hidden md:block ml-auto w-2/5 h-20 bg-repeat opacity-70 rounded-lg"
                            style={{
                                backgroundImage: 'url(/images/colorful-bg-pattern.png)', // UPDATE PATH
                                backgroundSize: 'auto 60px', // Adjust size for pattern density
                            }}
                        ></div>
                    </div>

                    {/* Profile Form */}
                    <form onSubmit={handleProfileSave}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 mb-8">
                            <FormInput label="Name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                            <FormInput label="Email Address" id="emailAddress" placeholder="example@gm.com" type="email" value={formData.emailAddress} onChange={handleChange} />
                            <FormInput label="Contact Number" id="contactNumber" placeholder="1234567890" type="tel" value={formData.contactNumber} onChange={handleChange} />

                            <FormInput label="Class" id="classNum" placeholder="8th" value={formData.classNum} onChange={handleChange} />
                            <FormInput label="Gender" id="gender" placeholder="Male" value={formData.gender} onChange={handleChange} />
                            <FormInput label="D.O.B." id="dob" placeholder="00 JAN 0000" value={formData.dob} onChange={handleChange} />

                            <FormInput label="Group" id="group" placeholder="A" value={formData.group} onChange={handleChange} />
                            <FormInput label="City" id="city" placeholder="Mumbai" value={formData.city} onChange={handleChange} />
                            <FormInput label="State" id="state" placeholder="Maharashtra" value={formData.state} onChange={handleChange} />

                            <FormInput label="Country" id="country" placeholder="India" value={formData.country} onChange={handleChange} />
                            <FormInput label="Pin code" id="pinCode" placeholder="000000" value={formData.pinCode} onChange={handleChange} />

                            {/* Save Button - Aligned right in the grid */}
                            <div className="md:col-start-3 md:flex md:justify-end md:items-end">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-md"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Newsletter Subscription Section */}
                <div
                    className="mt-8 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden bg-pink-600"
                     style={{
                        backgroundImage: 'url(/images/newsletter-bg-pattern.png)', // UPDATE PATH
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'auto',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
                        <p className="text-sm opacity-90 mb-8 max-w-lg mx-auto">
                            Lorem Ipsum is simply dummy text of the printing.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex items-center bg-white rounded-full p-1.5 shadow-lg">
                            <input
                                type="email"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                placeholder="Email Address"
                                className="flex-grow px-5 py-2.5 text-gray-700 text-sm bg-transparent border-none focus:outline-none placeholder-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2.5 bg-yellow-400 text-gray-800 font-semibold text-sm rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}