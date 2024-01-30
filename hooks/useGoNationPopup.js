import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import { useState, useEffect } from 'react';

const useGoNationPopup = () => {
  const [shouldShowPopup, setShouldShowPopup] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchGoNationData({
          stories: true,
        });

        console.log('fetchedData.storiesData', fetchedData.storiesData);
        const validPopup = findValidPopup(fetchedData.storiesData.general);
        if (validPopup) {
          console.log('poup valid', validPopup);
          setData(validPopup);
          setShouldShowPopup(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { shouldShowPopup, data };
};

const isPopupValid = popup => {
  console.log('popup : ', popup);
  const expirationTag = popup.tags.find(tag => tag.startsWith('expires-'));
  if (!expirationTag) return true; // No expiration date, always show

  const expirationDate = expirationTag.split('-').slice(1).join('-');
  return new Date(expirationDate) > new Date();
};

const findValidPopup = data => {
  return data.find(
    popup => popup.tags.includes('popup') && isPopupValid(popup)
  );
};

export default useGoNationPopup;
