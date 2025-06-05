import { Bounty } from '../../types';
import AcceptIcon from './AcceptIcon';

type ListItemProps = {
  jobItem: Bounty;
  isActive: boolean;
};

export default function JobListItem({ jobItem, isActive }: ListItemProps) {
  return (
    <li className={`job-item ${isActive ? "job-item--active" : ""}`}>
      <a href={`#${jobItem.id}`} className="flex p-4">

        <div className="job-item__badge">
          <img src={jobItem.image} alt="jobItem.title" />
        </div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">${jobItem.reward} | {jobItem.status}</p>
        </div>

        <div className="job-item__right">
          <AcceptIcon id={jobItem.id} status={jobItem.status} />
        </div>
      </a>
    </li>
  );
}
