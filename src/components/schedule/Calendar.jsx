import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const CalendarEventContent = ({ event }) => {
  const imgEventWrapRef = useRef(null);

  useEffect(() => {
    // Clear previous content
    imgEventWrapRef.current.innerHTML = '';

    // Create image event when imageUrl is available
    if (event.extendedProps.imageUrl && imgEventWrapRef.current) {
      const imgEvent = document.createElement('img');
      imgEvent.src = event.extendedProps.imageUrl;
      imgEvent.alt = 'Event';
      imgEventWrapRef.current.appendChild(imgEvent);
    }
  }, [event.extendedProps.imageUrl]);

  // Create title event
  // const titleEvent = event._def.title ? <div className="fc-event-title fc-sticky">{event._def.title}</div> : null;

  return (
      <div ref={imgEventWrapRef}></div>
  );
};

CalendarEventContent.propTypes = {
  event: PropTypes.shape({
    extendedProps: PropTypes.shape({
      imageUrl: PropTypes.string,
    }),
    _def: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
};

const Calendar = () => {
  const currentDate = new Date();

  const getRandomStartHour = () => {
    // Generate a random hour between 0 and 23
    return Math.floor(Math.random() * 24);
  };

  const mockEvents = [
    {
      title: 'Meeting with Client',
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), getRandomStartHour()).getTime(),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), getRandomStartHour() + 1).getTime(),
      imageUrl: 'public/images/posts/post-7.jpg'
    },
    {
      title: 'Lunch Break',
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, getRandomStartHour()).getTime(),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, getRandomStartHour() + 1).getTime(),
      imageUrl: 'public/images/posts/post-8.jpg'
    },
    {
      title: 'Team Workshop',
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2, getRandomStartHour()).getTime(),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2, getRandomStartHour() + 1).getTime(),
      imageUrl: 'public/images/posts/post-9.jpg'
    },
    {
      title: 'Project Deadline',
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3, getRandomStartHour()).getTime(),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3, getRandomStartHour() + 1).getTime(),
      imageUrl: 'public/images/posts/post-10.jpg'
    },
    // Add more events as needed
  ];

  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      events={mockEvents}
      height="90%"
      eventContent={(arg) => <CalendarEventContent event={arg.event} />}
    />
  );
};

export default Calendar;
