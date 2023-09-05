import React from 'react';
import CellsAndAllIn from './CellsAndAllIn';
import TabsView from './tabsView';
import AllInOnce from './allIn';

const Menu = ({ menuData, mode }) => {
  const getRenderType = () => {
    switch (mode) {
      case 'allInOnce':
        return <AllInOnce menuData={menuData} mode={menuData.mode} />;
      case 'cellsThenAllInOnce':
      // return <CellsAndAllIn menuData={menuData} mode={menuData.mode} />;
      case 'tabs':
        return <TabsView menuData={menuData} mode={menuData.mode} />;
      case 'cellsThenTabs':
        if (menuData.mode) {
          return (
            <CellsAndAllIn
              mode={menuData.mode}
              menuData={menuData}
              isCellsAndTabs
            />
          );
        }

      default:
        return (
          <h1>Menu Could Not Be Loaded At This Time, please Try Again Later</h1>
        );
    }
  };

  return (
    <section className="py-6 px-5   font-body bg-white lg:-mt-32 z-10 relative rounded m-3 md:mx-8 lg:mx-0">
      {menuData?.mode && getRenderType()}
      {/* <CellsAndAllIn menuData={m enuData} mode={mode} />; */}
    </section>
  );
};

export default Menu;
