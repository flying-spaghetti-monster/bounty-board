import { Link } from 'react-router';
import Spinner from "./Spinner";
import { useActiveId, useGetBountyById } from '../../hooks/hooks';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSitePage } from '../../context/SiteContext';
import { cp } from '../../lib/utils';

export default function JobItemContent() {
  const activeId = useActiveId();
  const { jobItem, isLoading } = useGetBountyById(activeId);
  const { handleAceptJob } = useSitePage();
  const { isLoggedIn } = useSitePage();

  if (isLoading) {
    return <LoadingJobContent />;
  }

  if (!jobItem) {
    return <EmptyJobContent />;
  }
  const isAccepted: boolean = jobItem.status ? jobItem.status === 'accepted' : false;

  return (
    <section className="job-details">
      <div>
        <img src={jobItem.image} alt="#" />
        {isLoggedIn && (
          <button className={cp("apply-btn", {
            "bg-[#2671dd] hover:bg-[#4e6bd1]": !isAccepted,
            "bg-gray-600 hover:bg-gray-600": isAccepted
          })} disabled={isAccepted} onClick={(e) => {
            handleAceptJob(activeId);
            e.stopPropagation();
            e.preventDefault();
          }}>
            Accept
          </button>
        )}

        <section className="job-info">
          <div className="job-info__left mt-4">
            <div className="job-info__badge"><img src={jobItem.image} alt="#" /></div>
          </div>

          <div className="mt-22">
            <h2 className="second-heading">{jobItem.title}</h2>
            <p className="job-info__description">{jobItem.description}</p>
            <p className="">Target: {jobItem.target}</p>

            <div className="job-info__extras mt-5">
              <p className="job-info__extra">
                <AttachMoneyIcon />
                {jobItem.reward}
              </p>
              <p className="job-info__extra">
                <CheckBoxIcon />
                {jobItem.status}
              </p>
              <p className="job-info__extra">
                <LocationOnIcon />
                {jobItem.planet}
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function LoadingJobContent() {
  return (
    <section className="job-details">
      <div>
        <Spinner />
      </div>
    </section>
  );
}

function EmptyJobContent() {
  return (
    <section className="job-details mt-20">
      <div>
        <div className="job-details__start-view">
          <p>What are you looking for?</p>
          <p>
            <Link to="/login">Login</Link> and add new Bounty job or select existed
          </p>
        </div>
      </div>
    </section>
  );
}
