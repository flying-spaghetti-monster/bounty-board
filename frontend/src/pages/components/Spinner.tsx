import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="inline-flex animate-spin text-black">
        <RotateRightIcon />
      </div>
    </div>);
}
