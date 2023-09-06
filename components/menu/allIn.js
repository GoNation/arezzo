import React from 'react';
import MenuItem from './menuItem';
import shortid from 'shortid';
import slugify from 'slugify';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

const AllIn = ({
  menuData,
  setModalActive,
  onBackClick,
  shouldHideFirstSection = true,
}) => {
  const styles = {
    allInContainer: 'allInContainer flex flex-wrap w-full mt-4 xl:mt-0',
    menuContainer:
      'menuContainer text-left w-full md:mx-4 grid-rows-3 grid-cols-2 py-2',
    sectionTitle:
      'text-2xl lg:text-4xl uppercase text-center text-dark font-light font-display md:ml-0 mb-4',
    sectionDescription:
      'menuSectionDescription text-light mb-4 mt-1 font-body text-xs max-w-lg text-left',
    backBtn: 'backToMenuBtn',
  };

  const splitSectionChildren = section => {
    return section.inventory.reduce(
      (acc, curr) => {
        if ('item' in curr) acc.childItems.push(curr);
        else if ('section' in curr) acc.childSections.push(curr);
        return acc;
      },
      { childItems: [], childSections: [] }
    );
  };

  const renderMenu = (menu, nested, idx) => {
    const { section } = menu;
    const parsedSection = splitSectionChildren(menu);
    const removeSections = ['menu', 'cocktails menu', 'desserts menu', ''];

    const sectionClass = `${styles.allInContainer} ${slugify(section.name, {
      lower: true,
    })}`;
    const menuClass = `sec-${section.name}-${idx} ${styles.menuContainer} ${
      removeSections.includes(section.name.toLowerCase()) ? 'hidden' : ''
    }`;

    return (
      <div key={shortid.generate()} className={sectionClass}>
        {section.imageIsDefault ? (
          ''
        ) : (
          <div className="relative mb-4 w-full">
            <Image
              width={1200}
              height={400}
              src={section.imageUrl}
              className="object-cover max-h-96 w-full"
            />
            <div className="absolute bottom-0 bg-white px-8 py-2 font-display font-light uppercase  rounded-tr text-primary">
              {section.name}
            </div>
          </div>
        )}

        <div className={menuClass}>
          {section.name && (
            <h4 className={styles.sectionTitle}>
              <span>{section.name}</span>
            </h4>
          )}
          {section.desc && (
            <p className={styles.sectionDescription}>{section.desc}</p>
          )}
          <div className="flex flex-wrap">
            {parsedSection.childItems.map(({ item }, index) => (
              <MenuItem
                key={shortid.generate()}
                type={'default'}
                item={item}
                isSingleItem={parsedSection.childItems.length === 1}
                menuItemIndex={index}
              />
            ))}
          </div>
        </div>
        {/* child sections */}
        {parsedSection.childSections.map((childSection, idx) => {
          return renderMenu(childSection, true, idx);
        })}
      </div>
    );
  };

  return (
    <div className="allInContainerWrapper">
      {onBackClick && (
        <button className={styles.backBtn} onClick={() => onBackClick()}>
          ← Back
        </button>
      )}

      {renderMenu(menuData)}
    </div>
  );
};

export default AllIn;
