import SortIcon from '@mui/icons-material/Sort';
import SortingButtonSelect from './SortingButtonSelect';
import { Planets, Status } from '../../lib/constants';
import { useSitePage } from '../../context/SiteContext';

export default function SortingControls() {
  const {
    sortByPlanet,
    sortByStatus,
    isPersonalOnly,
    setSortByStatus,
    setSortByPlanet,
    setPersonalOnly
  } = useSitePage();

  return (
    <section className="sorting">
      <SortIcon />

      <SortingButtonSelect
        items={Planets}
        onChange={setSortByPlanet}
        selectedValue={sortByPlanet}
      >
        Planet
      </SortingButtonSelect>
      <SortingButtonSelect
        items={Status}
        onChange={setSortByStatus}
        selectedValue={sortByStatus}
      >
        Status
      </SortingButtonSelect>
      <SortingButton
        isActive={isPersonalOnly}
        onClick={setPersonalOnly}
      >
        My Bounties
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: (val: boolean) => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  const { isLoggedIn } = useSitePage();
  return (
    <>
      {isLoggedIn && (
        <button
          onClick={() => onClick((prev: boolean) => !prev)}
          className={`sorting__button sorting__button--recent ${isActive ? "sorting__button--active" : ""
            }`}
        >
          {children}
        </button>
      )}
    </>
  );
}
