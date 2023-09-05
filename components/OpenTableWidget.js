// components/OpenTableWidget.js

import React from 'react';

const OpenTableWidget = () => (
  <div
    className="w-full flex justify-center  reservations-widget"
    dangerouslySetInnerHTML={{
      __html: `
        <script type="text/javascript" src="//www.opentable.com/widget/reservation/loader?rid=94495&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true"></script>
      `,
    }}
  />
);

export default OpenTableWidget;
