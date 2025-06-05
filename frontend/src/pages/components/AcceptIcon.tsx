import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useSitePage } from '../../context/SiteContext';

type AcceptIconProps = {
  id: string;
};

//TODO: display only for Auth
export default function AcceptIcon({ id }: AcceptIconProps) {
  const { isLoggedIn, handleAceptJob } = useSitePage();
  return (
    <>
      {isLoggedIn && (
        <button
          onClick={(e) => {
            handleAceptJob(id);
            e.stopPropagation();
            e.preventDefault();
          }}
          className="accept-btn"
        >
          <RocketLaunchIcon />
        </button>
      )}
    </>
  );
}
