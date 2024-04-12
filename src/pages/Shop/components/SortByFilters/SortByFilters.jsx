// Hooks
import { useState } from "react";
// CSS
import styles from "./SortByFilters.module.css";
// Assets
import { ReactComponent as DownArrowIcon } from "../../../../assets/svgs/down-arrow-icon.svg";

function SortByFilters() {
  const [sortType, setSortType] = useState("Default sorting");
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const changeSortType = (e) => {
    setSortType(e.target.innerText);
    setDropdownActive(false);

    // TODO: Send filter query to DB
  };

  return (
    <div className={styles.container}>
      <div onClick={toggleDropdown} className={styles.active}>
        <span>{sortType}</span>
        <span>
          <DownArrowIcon />
        </span>
      </div>

      {dropdownActive && (
        <div className={styles.dropdown}>
          <ul className={styles.sortTypeList}>
            <li onClick={changeSortType}>Default sorting</li>
            <li onClick={changeSortType}>Sort by price: low to high</li>
            <li onClick={changeSortType}>Sort by price: high to low</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortByFilters;
