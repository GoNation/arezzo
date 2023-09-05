import HoursDisplay from 'components/hours/hoursDisplay';

const HoursSection = ({ aboutData }) => (
  <div className="text-center md:col-span-1 flex justify-center items-center bg-light p-4">
    <div className="bg-white w-full h-full p-4 flex flex-col justify-center items-center text-lg lg:text-xl text-gray-800">
      <h4 className="font-display text-xl md:text-3xl uppercase xl:text-4xl text-gray-800">
        Hours
      </h4>
      <HoursDisplay {...aboutData} />
    </div>
  </div>
);

export default HoursSection;
