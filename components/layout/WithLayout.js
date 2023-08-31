// React and Next imports
import React from 'react';
import { useRouter } from 'next/router';

// Component imports
import Navigation from './navigation';
import Footer from './footer';
import PageHero from 'components/heros/PageHero';
import PageHead from './PageHead';

// Utility and helper imports
import buildAvatar from 'helpers/general/buildAvatar';
import { retrievePageHeroImage } from 'helpers';
import { findPageData } from 'helpers';

// Configurations
import { routes } from 'config';

const WithLayout = Component => {
  return function WrappedComponent(props) {
    const { pathname } = useRouter();

    // Data destructuring
    const { shoutData, poweredImagesData, aboutData } = props;

    // Page specific data
    const pageData = findPageData(routes, pathname);
    const pageTitle = `${pageData?.name} | ${aboutData.name}` || pathname;
    const pageDescription = pageData?.pageDescription || aboutData.desc;
    const customPageHero = pageData?.customPageHero || null;
    const hidePageHero = pageData?.hidePageHero || false;
    const pageHeroTitle = pageData?.customPageHeroTitle || pageData?.name || '';

    return (
      <>
        <PageHead
          title={pageTitle}
          description={pageDescription}
          avatar={buildAvatar(aboutData)}
        />

        <Navigation business={aboutData} navLayout="logoLeft" />

        {!hidePageHero && (
          <PageHero
            img={retrievePageHeroImage(
              pathname,
              customPageHero,
              poweredImagesData
            )}
            pageTitle={pageHeroTitle}
          />
        )}

        <main className="">
          <Component {...props} pageData={pageData} />
        </main>

        <Footer logoAsText business={aboutData} shoutData={shoutData} />
      </>
    );
  };
};

export default WithLayout;
