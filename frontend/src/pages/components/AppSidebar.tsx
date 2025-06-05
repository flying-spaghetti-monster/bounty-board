import ResultsCount from './ResultsCount'
import SortingControls from './SortingControls'
import JobListSearch from './JobListSearch'
import PaginationControls from './PaginationControls'

export default function AppSidebar() {
  return (
    <aside className="sidebar flex flex-col h-screen">
      <div className="sidebar__top">
        <ResultsCount />
        <SortingControls />
      </div>
      <JobListSearch />
      <PaginationControls />
    </aside>
  )
}
