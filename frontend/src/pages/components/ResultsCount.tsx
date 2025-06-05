import { useSitePage } from '../../context/SiteContext';

export default function ResultsCount() {
  const { total } = useSitePage();

  return (
    <p className="text-xl">
      <span className="font-bold">{total}</span>
    </p>
  );
}
