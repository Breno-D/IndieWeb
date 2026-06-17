import React, { useState } from 'react';
import './Calendar.css'; 

const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const MONTHS = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

export default function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get total days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Get day of the week the 1st of the month falls on (0 = Sunday, 6 = Saturday)
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Create an array for the grid cells
  const calendarCells = [];

  // 1. Fill empty padding cells for days from the previous month
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
  }

  // 2. Fill active days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = 
      day === new Date().getDate() && 
      month === new Date().getMonth() && 
      year === new Date().getFullYear();

    calendarCells.push(
      <div key={`day-${day}`} className={`calendar-cell day ${isToday ? 'today' : ''}`}>
        {day}
      </div>
    );
  }

  // Handle month changes
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="calendar-container">
      {/* Header controls */}
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h3>{MONTHS[month]} {year}</h3>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      {/* Weekday labels */}
      <div className="calendar-grid weekdays">
        {WEEKDAYS.map(day => (
          <div key={day} className="weekday-label">{day}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="calendar-grid days">
        {calendarCells}
      </div>
    </div>
  );
}
