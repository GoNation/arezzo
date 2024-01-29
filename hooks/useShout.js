import { useEffect, useState } from 'react';
// import config from 'content/config/config.json';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';

const useShout = bizId => {
  const businessId = bizId || 'bzn-lR5SB-VRRM62Q5EbjJVO2g' || '';

  if (!businessId) {
    return { shout: {}, isLoading: false };
  }

  const [clientFetchedShout, setClientFetchedShout] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShout = async () => {
      setIsLoading(true);
      try {
        const { shoutData } = await fetchGoNationData({
          shout: true,
          useJSONP: true,
          businessId,
        });

        if (shoutData) {
          setClientFetchedShout(shoutData);
        }
      } catch (error) {
        console.error('Error fetching shout:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShout();
  }, [businessId]);

  return {
    shout: clientFetchedShout,
    isLoading,
  };
};

export default useShout;
