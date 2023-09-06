import React from 'react';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import WithLayout from 'components/layout/WithLayout';
import Masonry from 'components/gallery/Masonry';
import { filteredOutGalleryImages } from 'config';

const Gallery = ({ galleryData }) => {
  const filterGalleryAlbums = abm =>
    !filteredOutGalleryImages.includes(abm.name.toLowerCase());
  return (
    <section className="min-h-screen with-texture  px-0 bg-dark py-4 pt-32">
      <Masonry data={galleryData.filter(filterGalleryAlbums)}></Masonry>
    </section>
  );
};

export default WithLayout(Gallery);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, menuInventoryData, galleryData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      gallery: true,
      shout: false,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      menuInventoryData,
      galleryData,
    },
  };
}
