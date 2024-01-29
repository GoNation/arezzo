import axios from 'axios';
import jsonAdapter from 'axios-jsonp';
const storiesFetch = async businessId => {
  const storiesResponse = await fetch(
    `https://gonation.com/api/proxy/v2/businesses/${businessId}/aboutArticles`
  );
  const storiesData = await storiesResponse.json();
  return storiesData;
};

const poweredImagesFetch = async businessId => {
  const poweredImagesResponse = await fetch(
    `https://data.gonation.com/profile/poweredImages?profile_id=${businessId}`
  );
  const poweredImagesData = await poweredImagesResponse.json();
  return poweredImagesData;
};

const aboutFetch = async (businessId, useJSONP) => {
  if (useJSONP) {
    const aboutResponse = await axios({
      url: `https://data.gonation.com/profile/getname/?profile_id=${businessId}`,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    return aboutResponse?.data;
  } else {
    const aboutResponse = await fetch(
      `https://data.gonation.com/profile/getname/?profile_id=${businessId}`
    );
    const aboutData = await aboutResponse.json();
    return aboutData;
  }
};

const shoutFetch = async (businessId, useJSONP) => {
  if (useJSONP) {
    const shoutResponse = await axios({
      url: `https://data.prod.gonation.com/profile/shoutsnew/${businessId}`,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    return shoutResponse?.data;
  } else {
    const shoutResponse = await fetch(
      `https://data.prod.gonation.com/profile/shoutsnew/${businessId}`
    );
    const shoutData = await shoutResponse.json();
    return shoutData;
  }
};

const eventFetch = async (businessId, useJSONP) => {
  if (useJSONP) {
    const specialEventsResponse = await axios({
      url: `https://data.prod.gonation.com/profile/events?profile_id=${businessId}`,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    const recurringEventsResponse = await axios({
      url: `https://data.prod.gonation.com/profile/recurringevents?profile_id=${businessId}`,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    return {
      recurringEventsData: recurringEventsResponse?.data || {},
      specialEventsData: specialEventsResponse?.data,
    };
  } else {
    const specialEventsResponse = await fetch(
      `https://data.prod.gonation.com/profile/events?profile_id=${businessId}`
    );
    const recurringEventsResponse = await fetch(
      `https://data.prod.gonation.com/profile/recurringevents?profile_id=${businessId}`
    );
    const specialEventsData = await specialEventsResponse.json();
    const recurringEventsData = await recurringEventsResponse.json();
    return {
      recurringEventsData: recurringEventsData || {},
      specialEventsData,
    };
  }
};

const menuInventoryFetch = async (businessId, menuInventory = 1, useJSONP) => {
  // gross looking but to keep code small, included a ternary whether or not the user wants to use the poweredListId param
  if (useJSONP) {
    const menuInventoryResponse = await axios({
      url: `https://data.prod.gonation.com/pl/get?profile_id=${businessId}&powerlistId=powered-list-${menuInventory}`,
      adapter: jsonAdapter,
      callbackParamName: 'callback',
    });
    const menuInventoryData = await menuInventoryResponse?.data;
    return menuInventoryData;
  }
  const menuInventoryResponse = await fetch(
    `https://data.prod.gonation.com/pl/get?profile_id=${businessId}&powerlistId=powered-list-${menuInventory}`
  );

  const menuInventoryData = await menuInventoryResponse.json();
  return menuInventoryData;
};

const galleryFetch = async businessId => {
  const galleryResponse = await fetch(
    `https://data.prod.gonation.com/profile/gallery?profile_id=${businessId}`
  );
  const galleryData = await galleryResponse.json();
  return galleryData;
};

module.exports = {
  storiesFetch,
  poweredImagesFetch,
  aboutFetch,
  shoutFetch,
  eventFetch,
  menuInventoryFetch,
  galleryFetch,
};
