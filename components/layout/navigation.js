import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Link from 'next/link';
import Image from 'next/image';
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import MobileNavigation from './MobileNavigation';
import { FaAngleDown } from 'react-icons/fa';

import { routes } from 'config';
import buildAvatar from 'helpers/general/buildAvatar';
import slugifyLower from 'helpers/printing/slugifyLower';
import { getTarget } from 'helpers/general/links';

const Navigation = ({
  business,
  logoAsText = false,
  navLayout = 'stacked',
}) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const logo = buildAvatar(business);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hasScrolled = () => scrollPosition > 1;

  // Component for the dropdown children
  const Dropdown = ({ children }) => (
    <div className="absolute left-0 mt-0 space-y-2 bg-white text-black shadow-md py-1 hidden group-hover:block">
      {children.map(child => (
        <LinkItem
          key={slugify(child.name, { lower: true })}
          route={child}
          className={`block px-4 py-2 hover:bg-secondary hover:text-white whitespace-pre uppercase bold `}
        />
      ))}
    </div>
  );

  // Component for individual link items
  const LinkItem = ({ route, className }) => (
    <Link
      href={route.path || route.url || slugifyLower(route.name) || '#'}
      className={className}
      target={getTarget(
        route.path || route.url || slugifyLower(route.name) || '#'
      )}
    >
      {route.name}
    </Link>
  );

  // Function to render each route
  const renderRoute = route => (
    <div key={slugify(route.name, { lower: true })} className="relative group">
      {route.children ? (
        <>
          <span className="text-white text-sm md:text-base lg:text-xl uppercase font-bold inline-flex items-center">
            {route.name}
            <span className="ml-1">
              <FaAngleDown color="#ffffff" />
            </span>
          </span>
          <Dropdown children={route.children} />
        </>
      ) : (
        <LinkItem
          route={route}
          className={`font-display tracking-wider text-sm lg:text-xs xl:text-base uppercase font-bold px-2 ${
            route.hidden && 'hidden'
          }   ${
            route.isPrimaryCalledToAction
              ? 'lg:bg-white lg:text-primary lg:px-5 lg:py-1 border border-primary hover:text-dark no-underline hover:no-underline transition-all duration-500 '
              : 'text-white  transition-all duration-500 hover:text-gray-300'
          } `}
        />
      )}
    </div>
  );

  const renderLogo = () => (
    <div
      className={`transition-all  max-w-[250px] lg:max-w-[200px] xl:max-w-[275px] py-2 px-4 rounded-sm  flex justify-center w-full`}
    >
      <div className="">
        <Link href={'/'}>
          <Image
            className="transition-all"
            src={logo}
            alt="Business Logo"
            width={500}
            height={200}
          />
        </Link>
      </div>
    </div>
  );

  const renderNavItems = () => (
    <div className={`hidden lg:flex space-x-3`}>{routes.map(renderRoute)}</div>
  );

  const renderNavigationContent = () => {
    if (navLayout === 'logoLeft') {
      return (
        <div className="flex w-full justify-between items-center">
          {renderLogo()}
          {renderNavItems()}
        </div>
      );
    } else if (navLayout === 'logoRight') {
      return (
        <div className="flex justify-between items-center">
          {renderNavItems()}
          {renderLogo()}
        </div>
      );
    } else {
      // Default to stacked layout
      return (
        <>
          {renderLogo()}
          {renderNavItems()}
        </>
      );
    }
  };

  return (
    <div className={`absolute w-full z-50 transition-all`}>
      <div className="xl:px-8 px-2 sm:px-4 w-full py-4 pt-6 lg:pt-8 flex items-center justify-between">
        {renderNavigationContent()}

        <div className="lg:hidden  right-8 top-14 md:top-16 z-10">
          <Hamburger
            toggled={navIsOpen}
            toggle={setNavIsOpen}
            color={navIsOpen ? '#ffffff' : '#ffffff'}
          />
        </div>

        {navIsOpen && <MobileNavigation business={business} logo={logo} />}
      </div>
    </div>
  );
};

export default Navigation;
