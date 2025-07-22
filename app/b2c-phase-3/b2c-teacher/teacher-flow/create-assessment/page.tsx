import { CreateTestPage } from '@/components/phase-3/b2c-teacher/create-test/CreateTestPage';

export default async function CreateAssessment({ searchParams }: { searchParams: Promise<{ step?: string }>; }) {
  const resolvedParams = await searchParams;
  const step = parseInt(resolvedParams?.step || '1');
  const currentTestStep = isNaN(step) ? 1 : step;

  return (
	<div>
	  <CreateTestPage testType="Assessment" currentTestStep={currentTestStep} />
	</div>
  );
}