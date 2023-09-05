import React from 'react';

const Price = ({ variants, withDollar }) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="menuPriceContainer text-white pr-4 block">
      <p className="menuItemPriceLabel font-bold">{variants[0].labelTitle}</p>
      <p className="menuItemPriceLabel font-bold">{variants[0].label}</p>
      <p className="menuItemPrice">
        {withDollar ? '$' : ''}
        {variants[0].price}
      </p>
    </div>
  );
};

export default Price;
