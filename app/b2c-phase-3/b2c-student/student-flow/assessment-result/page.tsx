// For App Router: app/page.tsx
import ResultsCard from '@/components/b2c-phase-3/b2c-student/result'; // Adjust path if needed


export default function HomePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 py-10 bg-no-repeat bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/images/Assesment Results.jpg')",
        backgroundColor: '#292929', }} // Assuming your image is science-bg.png
    >
      <ResultsCard />
    </main>
  );
}