import React from 'react';
import getGoogleString from '../../helpers/printing/getGoogleString';
import printAddress from '../../helpers/printing/printAddress';
import Title from '../ui/Title';
import Phone from './Phone';
import SocialLInks from '../ui/SocialLinks';

const DetailsBox = ({ aboutData, title = 'Contact Us' }) => {
  const detailClassList = 'mb-1 text-lg text-gray-800 text-sm';
  return (
    <div className="font-body text-gray-800 bg-white border-secondary border-2 mt-2 ml-2 px-4 py-2 md:px-8 md:pr-10">
      <div className="text-left">
        <h4 className="font-display font-bold uppercase text-xl md:text-2xl">
          {title}
        </h4>
        <p className={detailClassList}>
          <a
            href={getGoogleString(aboutData)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {printAddress(aboutData)}
          </a>
        </p>
        <p className={detailClassList}>
          <Phone {...aboutData} />
        </p>
        <div className={detailClassList}>
          <div className="flex justify-start">
            <SocialLInks links={aboutData.links} fill="#111111" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
