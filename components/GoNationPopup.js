import React, { useState, useEffect } from 'react';
import useGoNationPopup from 'hooks/useGoNationPopup';

const Popup = () => {
  const { data } = useGoNationPopup();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setIsOpen(true); // Only open the popup if there is data
    }
  }, [data]);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Don't render the popup at all if it's not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{data?.title || 'Popup Title'}</h2>
          <button onClick={handleClose} className="focus:outline-none">
            &times;
          </button>
        </div>
        <div className="my-4">
          {data?.body?.length ? (
            <div
              dangerouslySetInnerHTML={{
                __html: data.body,
              }}
              className="text-gray-600"
            ></div>
          ) : (
            ''
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
