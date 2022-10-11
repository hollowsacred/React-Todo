
import "./FilterItems.scss";

interface FilterItemsProps {
  onFilterSelect: (filter: string) => void;
}

const filterHandler = (e: React.MouseEvent, onFilterSelect: any) => {
  let el = e.target as HTMLElement;

  if (el.tagName !== "BUTTON") {
    return;
  }
 
  e.currentTarget.childNodes.forEach(el => {(el as HTMLElement).classList.remove('btn_active');} )

 
  el.classList.add('btn_active');
  onFilterSelect(el.dataset.isdone);
};

const FilterItems: React.FC<FilterItemsProps> = ({ onFilterSelect }) => {
  return (
    <div
      className="btns-filter"
      onClick={(e) => {
        filterHandler(e, onFilterSelect);
      }}
    >
      <button data-isdone="isdone">Done</button>
      <button data-isdone="all" className="btn_active">All</button>
    </div>
  );
};
export default FilterItems;
