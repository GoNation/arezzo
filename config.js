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
    name: 'Home',
    path: '/',
    pageDescription: '',
    customPageHero: 'home-pagehero',
    hidePageHero: true,
    isPrimaryCalledToAction: false,
    hidden: true,
  },
  {
    name: 'About',
    path: '/about',
    isPrimaryCalledToAction: false,
    pageHero: 'about-pagehero',
    tag: 'discover',
    customPageHeroTitle: 'Discover Our Tuscan Journey in Westport',
    aboutStoryName: 'about-page-content',
  },
  {
    name: 'Menu',
    isPrimaryCalledToAction: false,
    path: '/menu',
    pageHero: 'menu-pagehero',
  },
  {
    name: 'Reservations',
    isPrimaryCalledToAction: false,
    seoPageTitle: '',
    tag: 'discover',
    url: 'https://www.opentable.com/arezzo-ristorante',
    customPageHeroTitle: 'Secure Your Seat in Our Tuscan Oasis',
  },
  {
    name: 'Order Online',
    isPrimaryCalledToAction: false,
    seoPageTitle: '',
    tag: 'discover',
    children: [
      {
        name: 'Toast',
        isPrimaryCalledToAction: false,
        url: 'https://order.toasttab.com/online/arezzo-ristorante-5-riverside-ave',
      },
      {
        name: 'Grubhub',
        isPrimaryCalledToAction: false,
        url: 'https://www.grubhub.com/restaurant/arezzo-ristorante-5-riverside-ave-westport/7143776',
      },
      {
        name: 'Door Dash',
        isPrimaryCalledToAction: false,
        url: 'https://www.doordash.com/store/arezzo-ristorante-westport-26218604',
      },
      {
        name: 'UberEats',
        isPrimaryCalledToAction: false,
        url: 'https://www.ubereats.com/store/arezzo-ristorante/9GJldc5PW5iwr_DfzSj8Ow?diningMode=DELIVERY',
      },
    ],
  },

  {
    name: 'More',
    isPrimaryCalledToAction: false,
    children: [
      {
        name: 'Gallery',
        isPrimaryCalledToAction: false,
        path: '/gallery',
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
        customPageHeroTitle: 'Connect with Arezzo',
      },
      {
        name: 'Private Parties',
        isPrimaryCalledToAction: false,
        seoPageTitle: '',
        path: '/private-parties',
        customPageHeroTitle: 'Host Your Signature Tuscan Affair at Arezzo',
        pageHero: 'private-parties-pagehero',
      },
    ],
  },
  {
    name: 'Arezzo Express',
    path: '/arezzo-express',
    isPrimaryCalledToAction: true,
    pageHero: 'arezzo-express-pagehero',
    aboutStoryName: 'arezzo express page',
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
