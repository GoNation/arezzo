import React from 'react';
import splitSectionChildren from '../../helpers/menu/splitSectionChildren';
import MenuTab from './menuTab';

const Tabs = ({
  menuData,
  onCellClick,
  activeSection,
  setActiveSection,
  hasNestedTabs,
  displayedCellSection,
  setDisplayedCellSection,
}) => {
  const { childSections } = splitSectionChildren(menuData);

  const renderChildSections = () => {
    if (hasNestedTabs) {
      return activeSection.inventory.map(({ section, inventory }, index) => {
        return (
          <MenuTab
            key={`menuTab-${index}`}
            section={section}
            inventory={inventory}
            onCellClick={onCellClick}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            displayedCellSection={displayedCellSection}
            hasNestedTabs
            setDisplayedCellSection={setDisplayedCellSection}
          />
        );
      });
    } else {
      return childSections
        .filter(({ section }) => !section.hidden)
        .map(({ section, inventory }) => (
          <MenuTab
            key={section._id}
            section={section}
            inventory={inventory}
            onCellClick={onCellClick}
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            displayedCellSection={displayedCellSection}
            setDisplayedCellSection={setDisplayedCellSection}
            isTabs
          />
        ));
    }
  };

  return (
    <div className="flex flex-wrap  items-center justify-start max-w-[732px] m-auto xl:m-0 xl:flex-col">
      {activeSection && renderChildSections()}
    </div>
  );
};

export default Tabs;
