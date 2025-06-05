import { Planets, Status } from '../../types';

type SortingButtonSelectProps = {
  children: React.ReactNode,
  items: Planets | Status,
  onChange: (value: string) => void;
  selectedValue: string;
};

const SortingButtonSelect: React.FC<SortingButtonSelectProps> = ({ children, items, onChange, selectedValue }: SortingButtonSelectProps) => {
  return (
    <select value={selectedValue} onChange={(e) => onChange(e.target.value)} className="max-w-[70px]">
      <option key='default' value=''>{children}</option>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SortingButtonSelect;