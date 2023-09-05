import React, { useEffect } from 'react';

const MenuTab = ({
  section,
  inventory,
  setActiveSection,
  setDisplayedCellSection,
  isTabs,
  activeSection,
}) => {
  useEffect(() => {
    return () => {};
  }, []);

  const isActive = activeSection.section._id === section._id;

  // Separate out the styles for clarity
  const styles = {
    base: 'flex-1 xl:flex-none min-w-[221px] xl:min-w-[290px] text-center px-4 md:py-5 font-regular py-3 mb-2 md:m-2 md:mb-4 md:mt-0 text-xs uppercase cursor-pointer transition-all duration-200 font-display',
    hover: 'hover:bg-secondary hover:text-white',
    active: 'bg-secondary text-white',
    notActive: 'bg-transparent border-2 border-primary text-dark',
  };

  let classes = `${styles.base} ${styles.hover}`;

  // Determine active or not active styles
  if (isActive) {
    classes += ` ${styles.active}`;
  } else {
    classes += ` ${styles.notActive}`;
  }

  return (
    <div
      className={classes}
      id="menuTab"
      onClick={() =>
        isTabs
          ? setActiveSection({ section, inventory })
          : setDisplayedCellSection({
              section,
              inventory,
            })
      }
    >
      {section.name}
    </div>
  );
};

export default MenuTab;
