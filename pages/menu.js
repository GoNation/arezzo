import React from 'react';
import WithLayout from 'components/layout/WithLayout';
import GoNationMenu from 'components/menu/Menu';
import { gonationId } from 'config';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import Container from 'components/ui/Container';

const Menu = ({ aboutData, menuInventoryData }) => {
  return (
    <div className="menu-wrap py-8 bg-gray-100">
      <Container size="large">
        <div className="lg:pb-32 ">
          <GoNationMenu
            gonationID={gonationId}
            businessData={aboutData}
            menuData={menuInventoryData[0]}
            mode={'tabs'}
          />
        </div>
      </Container>
    </div>
  );
};

export default WithLayout(Menu);

export async function getStaticProps() {
  const { poweredImagesData, aboutData, menuInventoryData } =
    await fetchGoNationData({
      poweredImages: true,
      about: true,
      menuInventory: true,
      menuPL: 1,
    });
  return {
    props: {
      poweredImagesData,
      aboutData,
      menuInventoryData,
    },
  };
}
