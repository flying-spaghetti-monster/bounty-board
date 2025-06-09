import { Planets, Status } from '../../types';

type SortingButtonSelectProps = {
  children: React.ReactNode,
  items: Planets | Status | string[],
  onChange: (value: string) => void;
  selectedValue: string | null;
};

const SortingButtonSelect: React.FC<SortingButtonSelectProps> = ({ children, items, onChange, selectedValue }: SortingButtonSelectProps) => {
  return (
    <>
      {items && (
        <select value={selectedValue || ''} onChange={(e) => onChange(e.target.value)} className="max-w-[70px]">
          <option key='default' value=''>{children}</option>
          {(Array.isArray(items) ? items : [items]).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default SortingButtonSelect;