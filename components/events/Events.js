import React from 'react';
import EventItem from './EventItem';

const Events = props => {
  const { businessData, singleEvents, recurringEvents } = props;
  const allEvents = singleEvents.concat(recurringEvents);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
      {allEvents.map(event => (
        <div key={event._id} className="event w-full p-3">
          <EventItem event={event} slug={businessData.slug} />
        </div>
      ))}
    </div>
  );
};

export default Events;
