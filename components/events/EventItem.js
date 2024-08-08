import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import EventDate from './EventDate';
import EventDays from './EventDays';
import cloudinaryString from '../../helpers/cloudinary/cloudinaryString';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function EventItem({ event, variantName }) {
  const {
    _id,
    name,
    starts,
    ends,
    description,
    imageBaseUrl,
    imageurl,
    imagePrefix,
    ctas,
  } = event;

  const router = useRouter();

  const isDetailVisible = true;

  const handleEventClick = () => {
    // router.push(`/events#${_id}`);
    return;
  };

  return (
    <div
      key={_id}
      className={`eventItemContainer ${_id} relative overflow-hidden cursor-pointer border-4 border-light rounded p-4 bg-white shadow-md`}
      onClick={handleEventClick}
    >
      <Image
        width={1000}
        height={750}
        className="object-contain w-full h-auto"
        src={cloudinaryString(imageBaseUrl, imagePrefix, 1000)}
        alt={name}
      />
      <div className=" text-lg text-black mt-4 ">
        <h4 className="text-white bg-secondary p-2 font-display text-2xl uppercase lg:text-3xl">
          {name}
        </h4>
        {isDetailVisible && (
          <div className="eventDetailOverlay flex flex-col py-4">
            <div className="eventItemDateContainer flex flex-col items-start text-black">
              {event.eventDays ? (
                <EventDays
                  eventDays={event.eventDays}
                  variantName={variantName}
                />
              ) : (
                <EventDate date={starts} variantName={variantName} />
              )}
            </div>
            <p className="eventTime text-left my-2 text-black text-xl md:text-2xl">
              {`${dayjs(starts).format('h:mm A')}`} -{' '}
              {`${dayjs(ends).format('h:mm A')}`}
            </p>
            <p className="eventItemDescription text-black max-w-md text-lg md:text-xl font-body">
              {description}
            </p>
            {ctas && (
              <div className="eventCTABtns flex">
                {Object.keys(ctas).map(ctaName => {
                  if (ctas[ctaName]) {
                    return (
                      <Link
                        key={ctas[ctaName]}
                        href={ctas[ctaName]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="font-bold tracking-wide uppercase mt-12 cursor-pointer hover:text-primary">
                          {ctaName}
                        </span>
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
