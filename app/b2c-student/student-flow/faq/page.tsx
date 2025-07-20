// page.tsx (e.g. /app/faq/page.tsx)
"use client";

import React, { useState } from 'react'; // Removed useState as activeMainCategory is not used in this page's content
import Footer from '@/components/layout/Footer';
// Accordion components are imported directly from shadcn/ui path in components.tsx
import {
	FAQSection,
	NewsletterSection,
	FAQItemData // Type
} from './components';
import { PageTitleBar } from './ui-components'; // Import PageTitleBar
import StudentB2CHeader from '@/components/layout/StudentB2BHeader';
import Newsletter from '@/components/common-components/Newsletter';

// --- Sample Data (from your original) ---
const faqQuestionsData: FAQItemData[] = [ // Renamed for clarity
	{ question: 'Question 1', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
	{ question: 'Question 2', answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
	{ question: 'Question 3', answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
	{ question: 'Question 4', answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
	{ question: 'Question 5', answer: 'Yes, Lorem Ipsum is widely used as placeholder text in design and development.' },
];
// --- End Sample Data ---

export default function FAQPage() {


	const handleBackClick = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};
	const [newsletterEmail, setNewsletterEmail] = useState("");
	const handleNewsletterEmailChange = (value: string) => {
		setNewsletterEmail(value);
	};

	const handleNewsletterSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Newsletter Subscription:", newsletterEmail);
		alert(`Subscribed with ${newsletterEmail} (check console)!`);
		setNewsletterEmail("");
	};


	return (
		// Original wrapper: div and inner div with bg-gray-100
		// Simplified to single wrapper
		<div className="min-h-screen flex flex-col bg-[#e3e3e3]">
			<StudentB2CHeader activeState='faq' />
			<PageTitleBar title="FAQs" onBackClick={handleBackClick} />
			<div className="px-2 lg:px-0">

			{/* Original main: container mx-auto p-2 max-w-[90vw] bg-white rounded-2xl my-6 flex flex-col sm:flex-row gap-4 */}
			<main className="flex-grow container mx-auto my-4 mt-6 p-3 bg-white 
                             rounded-2xl 
                           max-w-screen-xl ">
				<FAQSection
					questions={faqQuestionsData}
					imageSrc="/student.png" // Your original image path
					imageAlt="Student illustration for FAQ"
				/>
			</main>
			<div className='max-w-screen-xl mx-auto w-full mb-6'>

				<Newsletter />{/* Newsletter is outside the main white card as per your layout */}
			</div>
</div>
			<Footer />
		</div>
	);
}