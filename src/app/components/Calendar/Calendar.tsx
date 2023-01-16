import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {
  Datepicker,
  CalendarPrev,
  CalendarNav,
  CalendarNext,
} from '@mobiscroll/react';
import './CalendarStyles.css';

function Calendar() {
  const calendarHeader = () => {
    return (
      <React.Fragment>
        <CalendarPrev className="custom-prev" />
        <CalendarNav className="custom-nav" />
        <CalendarNext className="custom-next" />
      </React.Fragment>
    );
  };
  return (
    <Datepicker
      touchUi={false}
      display="inline"
      controls={['calendar']}
      showOuterDays={false}
      firstSelectDay={1}
      renderCalendarHeader={calendarHeader}
    />
  );
}

export default Calendar;
