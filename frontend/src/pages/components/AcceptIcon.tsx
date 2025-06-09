import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useSitePage } from '../../context/SiteContext';

type AcceptIconProps = {
  id: string;
  status: string
};

export default function AcceptIcon({ id, status }: AcceptIconProps) {
  const { isLoggedIn, handleAceptJob } = useSitePage();
  const isAccepted: boolean = status ? status === 'accepted' : false;

  return (
    <>
      {isLoggedIn && !isAccepted && (
        <button
          onClick={(e) => {
            handleAceptJob(id);
            e.stopPropagation();
            e.preventDefault();
          }}
          className="accept-btn w-6"
          disabled={isAccepted}
        >
          <RocketLaunchIcon />
        </button>
      )}
    </>
  );
}
