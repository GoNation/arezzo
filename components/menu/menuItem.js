import React, { useState } from 'react';
import Image from 'next/image';
import Price from './Price';
import PriceWithVariants from './PriceWithVariants';
import Lightbox from 'react-image-lightbox';
import makeSentancesCapital from 'helpers/general/makeSentanceCapital';

const styles = {
  menuItem: 'w-full  md:w-1/2 md:mb-4',
  menuItemInnerContainer:
    'menuItemInnerContainer m-auto w-full h-full relative',
  menuItemImageContainer: 'menuItemImageContainer',
  menuItemName:
    'menuItemName w-full block text-base text-dark inline-flex font-regular flex w-full justify-between md:text-lg lg:text-xl xl:text-2xl font-regular text-dark',
  menuItemDescription:
    'menuItemDescription max-w-xs text-sm md:text-base xl:text-lg font-light font-body font-regular text-gray-800',
};

const MenuItem = ({
  item,
  type,
  withDollar,
  hasMenuImages,
  menuItemIndex,
  isSingleItem,
}) => {
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: '',
  });

  const removeImageCopy = img =>
    img.includes('copy') ? img.substring(0, img.length - 5) : img;

  const imageCopy = item.imageUrl.includes('copy')
    ? removeImageCopy(item.imageUrl)
    : item.imageUrl;

  const ImageComponent = () => {
    if (!item.photo_id) return null;
    return (
      <div
        className={styles.menuItemImageContainer}
        onClick={() => setLightbox({ isOpen: true, mainSrc: item.imageUrl })}
      >
        <div className="itemImageFill" />
        <Image
          className={item.photo_id ? 'menuItemImg' : 'menuItemImgDefault'}
          width={800}
          height={800}
          src={imageCopy}
          alt={item.name}
        />
      </div>
    );
  };

  const ContentComponent = () => (
    <div className="menuItemContentContainer flex flex-wrap ">
      {item.variants.length === 1 && item.variants[0].label === '' ? (
        <>
          <p className={styles.menuItemName}>
            {item.name}
            <Price withDollar={true} variants={item.variants} toSide />
          </p>
          {item.desc && (
            <p className={styles.menuItemDescription}>
              {makeSentancesCapital(item.desc)}
            </p>
          )}
        </>
      ) : (
        <>
          <p className={styles.menuItemName}>{item.name}</p>
          {item.desc && (
            <p className={styles.menuItemDescription}>
              {makeSentancesCapital(item.desc)}
            </p>
          )}
          <PriceWithVariants
            withDollar={withDollar}
            variants={item.variants}
            toSide
          />
        </>
      )}
    </div>
  );

  const defaultType = () => (
    <div className={styles.menuItemInnerContainer}>
      <div className="absolute h-full "></div>
      <div className="my-1">
        {lightBox.isOpen && (
          <Lightbox
            imageCaption={
              <div sx={{ height: '25px' }}>
                <p className={styles.menuItemName}>{item.name}</p>
              </div>
            }
            mainSrc={removeImageCopy(lightBox.mainSrc)}
            onCloseRequest={() => setLightbox({ isOpen: false })}
          />
        )}
        <ImageComponent />
        <ContentComponent />
      </div>
    </div>
  );

  return <div className={styles.menuItem}>{defaultType()}</div>;
};

export default MenuItem;
