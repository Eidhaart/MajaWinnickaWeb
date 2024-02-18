import React from "react";
import "./Events.css";

function Events({ id }) {
  return (
    <div className="events-component">
      <h1 id={id} className="event-title">
        Events
      </h1>
      <div className="events-container">
        <div className="upcoming">
          <h2>Upcoming</h2>
          <ul className="list-holder">
            <li>
              <div class="event-entry">
                <div class="date-box upcoming"></div>
                <div class="event-details">
                  <h2 class="event-name">Exhibition at Cafe Startboxen</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">31/3-21/4 2024</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Boulevarden, Täby</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="event-entry">
                <div class="date-box upcoming alt"></div>
                <div class="event-details">
                  <h2 class="event-name">Artist Alley at Comiccon</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">3/5-5/5 2024</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Arne Beurlings Torg 5, Kista</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="past">
          <h2>Past</h2>
          <ul className="list-holder">
            <li>
              <div class="event-entry">
                <div class="date-box aniv"></div>
                <div class="event-details">
                  <h2 class="event-name">Artist Alley at Comiccon</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">3/11-5/11 2023</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Mässvägen 1, Älvsjö</span>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="event-entry">
                <div class="date-box dublin"></div>
                <div class="event-details">
                  <h2 class="event-name">Artshow at Worldcon</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">15/8-19/8 2019</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Convention centre Dublin</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="event-entry">
                <div class="date-box first"></div>
                <div class="event-details">
                  <h2 class="event-name">Artist Alley at Comiccon</h2>
                  <div class="event-info">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <span class="date-span">14/9-16/9 2018</span>
                  </div>
                  <div class="event-location">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>Arne Beurlings Torg 5, Kista</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;
