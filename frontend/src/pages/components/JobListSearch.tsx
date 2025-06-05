import { useSitePage } from '../../context/SiteContext';
import JobList from "./JobList";

export default function JobListSearch() {
  const { itemsSortedAndSliced, isLoading } = useSitePage();
  return <JobList jobItems={itemsSortedAndSliced} isLoading={isLoading} />;
}
