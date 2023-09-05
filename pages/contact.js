import WithLayout from 'components/layout/WithLayout';
import MapSection from 'components/sections/MapSection';
import FormSection from 'components/sections/FormSection';
import HoursSection from 'components/sections/HoursSection';

import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

const Contact = ({ aboutData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <MapSection aboutData={aboutData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2 bg-dark pt-4">
        <FormSection desc="To Stay In The Know About Everything Happening at Arezzo Ristorante & Bar, Please Add Yourself to Our Exclusive Update List." />

        <HoursSection aboutData={aboutData} />
      </div>
    </div>
  );
};

export default WithLayout(Contact);

export async function getStaticProps() {
  const { poweredImagesData, aboutData } = await fetchGoNationData({
    poweredImages: true,
    about: true,
    shout: false,
  });
  return {
    props: {
      poweredImagesData,
      aboutData,
    },
  };
}
