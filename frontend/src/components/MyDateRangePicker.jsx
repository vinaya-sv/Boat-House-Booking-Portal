import React, { useState } from 'react';

function MyDateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([
    new Date(2024, 4, 15), // March 15, 2024
    new Date(2024, 4, 16), // March 16, 2024
    new Date(2024, 4, 17), // March 17, 2024
    // Add more booked dates as needed
  ]);

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    if (startDate === null || endDate !== null) {
      // If start date is not set or end date is already set, set start date
      setStartDate(selectedDate);
      setEndDate(null); // Reset end date
    } else if (selectedDate < startDate) {
      // If selected date is before the start date, swap start and end dates
      setEndDate(startDate);
      setStartDate(selectedDate);
    } else {
      // Otherwise, set end date
      setEndDate(selectedDate);
    }
  };

  const isDateBlocked = (date) => {
    // Check if the date is in the bookedDates array
    return bookedDates.some((bookedDate) =>
      date.getFullYear() === bookedDate.getFullYear() &&
      date.getMonth() === bookedDate.getMonth() &&
      date.getDate() === bookedDate.getDate()
    );
  };

  return (
    <div className="calendar-container">
      <input
        type="date"
        value={startDate ? startDate.toISOString().split('T')[0] : ''}
        onChange={handleDateChange}
        min={new Date().toISOString().split('T')[0]}
        max={endDate ? endDate.toISOString().split('T')[0] : ''}
        disabledDates={isDateBlocked}
      />
      <input
        type="date"
        value={endDate ? endDate.toISOString().split('T')[0] : ''}
        onChange={handleDateChange}
        min={startDate ? startDate.toISOString().split('T')[0] : ''}
        // max={new Date().toISOString().split('T')[0]}
        disabledDates={isDateBlocked}
      />
    </div>
  );
}

export default MyDateRangePicker;
