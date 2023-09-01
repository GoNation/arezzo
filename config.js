const businessId = 'bzn-lR5SB-VRRM62Q5EbjJVO2g';
const poweredId = '573c99987455de37e2a63560';
const domain = 'https://www.arezzowestport.com/';
const iframeURL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12018.976690198839!2d-73.3642158!3d41.1401104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e81bc4ae726687%3A0x2a36d268c64d2630!2sArezzo%20Ristorante!5e0!3m2!1sen!2sus!4v1693504379179!5m2!1sen!2sus';
const iframe = `<iframe src="${iframeURL}" width="600" height="450" className="w-full h-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
const primaryColor = '#C6AB86';
const secondaryColor = '#A1815B';
const tertiaryColor = '#020202';
const darkColor = '#181612';
const backgroundColor = '#FEFEFE';
const lightColor = '#E1DEDB';

const routes = [
  {
    name: 'Home', // This is the name that will appear in the navigation
    path: '/', // This is the path that will be used to build the URL
    pageDescription: 'Welcome to our homepage', // This is the description that will appear in the <head> tag. If not provided, the business description will be used.
    customPageHero: 'home-pagehero', // This is the name of the image that will be used as the page hero. If not provided, we will attempt to find the page hero based on the page name.
    hidePageHero: true, // This will hide the page hero if set to true
    isPrimaryCalledToAction: false,
    hidden: true,
  },
  {
    name: 'About',
    path: '/about',
    isPrimaryCalledToAction: false,
    pageHero: 'about-pagehero',
    tag: 'discover',
    customPageHeroTitle: 'WELCOME TO THC',
    aboutStoryName: 'about-page-content',
  },

  {
    name: 'Menu',
    isPrimaryCalledToAction: false,
    path: '/menu',
    pageHero: 'menu-pagehero',
  },

  {
    name: 'Gallery',
    isPrimaryCalledToAction: false,
    path: '/gallery',
  },

  {
    name: 'Order Online',
    isPrimaryCalledToAction: false,
    url: 'https://order.toasttab.com/online/arezzo-ristorante-5-riverside-ave',
    seoPageTitle: '',
    tag: 'discover',
  },

  {
    name: 'Reservations',
    isPrimaryCalledToAction: false,
    seoPageTitle: '',
    tag: 'discover',
    path: '/reservations',
  },

  {
    name: 'Events',
    isPrimaryCalledToAction: false,
    path: '/events',
  },
  {
    name: 'Contact',
    isPrimaryCalledToAction: false,
    seoPageTitle: '',
    tag: 'discover',
    path: '/contact',
    customPageHeroTitle: ' ',
  },
  {
    name: 'Private Parties',
    isPrimaryCalledToAction: true,
    seoPageTitle: '',
    path: '/private-parties',
  },
];

const filteredOutGalleryImages = [
  'Website photos',
  'website photos',
  'Website Photos',
  'shout',
  'shouts',
  'Shout',
  'Shouts',
];

const hardCodedAddressText = '';
const hardCodedAddressURL = '';

module.exports = {
  businessId,
  poweredId,
  domain,
  routes,
  iframe,
  filteredOutGalleryImages,
  primaryColor,
  secondaryColor,
  lightColor,
  darkColor,
  backgroundColor,
  hardCodedAddressText,
  hardCodedAddressURL,
  tertiaryColor,
};

//
