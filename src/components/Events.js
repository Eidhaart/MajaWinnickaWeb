import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="events-component">
      <h1 className="event-title">Events</h1>
      <ul>
        <li>
          <h2>Upcoming</h2>
          <ul>
            <li>
              <div class="event-entry">
                <div class="date-box">
                  <span class="day">01</span>
                  <span class="month">Nov</span>
                </div>
                <div class="event-details">
                  <h2 class="event-name">Name for the Event</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">Date span</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Location</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h2>Past</h2>
          <ul>
            <li>
              <div class="event-entry">
                <div class="date-box">
                  <span class="day">01</span>
                  <span class="month">Nov</span>
                </div>
                <div class="event-details">
                  <h2 class="event-name">Name for the Event</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">Date span</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Location</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="event-entry">
                <div class="date-box">
                  <span class="day">01</span>
                  <span class="month">Nov</span>
                </div>
                <div class="event-details">
                  <h2 class="event-name">Name for the Event</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">Date span</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Location</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="event-entry">
                <div class="date-box">
                  <span class="day">01</span>
                  <span class="month">Nov</span>
                </div>
                <div class="event-details">
                  <h2 class="event-name">Name for the Event</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">Date span</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Location</span>
                  </div>
                </div>
              </div>
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Events;
