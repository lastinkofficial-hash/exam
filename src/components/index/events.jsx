import React from 'react';
import e1 from '../../img/e1.jpg';
import e2 from '../../img/e2.jpg';

const eventsData = [
  {
    id: 1,
    image: e1,
    date: '15',
    month: 'Jun',
    time: '12:00 AM - 12:30 AM',
    location: 'Hilton Quebec',
    description: "One make creepeth man for so bearing their firmament won't fowl meat over seas great",
    link: '#'
  },
  {
    id: 2,
    image: e2,
    date: '15',
    month: 'Jun',
    time: '12:00 AM - 12:30 AM',
    location: 'Hilton Quebec',
    description: "One make creepeth man for so bearing their firmament won't fowl meat over seas great",
    link: '#'
  }
];

const Events = () => {
  return (
    <div className="events_area py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5">
            <div className="main_title mb-5">
              <h2 className="mb-3 text-white">Upcoming Events</h2>
              <p className="text-white-50">
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {eventsData.map((event) => (
            <div className="col-lg-6 col-md-6 mb-4" key={event.id}>
              <div className="single_event position-relative shadow-sm bg-white h-100 d-flex flex-column">
                <div className="event_thumb">
                  <img src={event.image} alt="event" className="img-fluid w-100" />
                </div>
                <div className="event_details p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex mb-4 align-items-center">
                    <div className="date me-4 text-center px-3 py-2 bg-light rounded">
                      <span className="fs-3 fw-bold text-primary d-block">{event.date}</span> {event.month}
                    </div>
                    <div className="time-location text-muted">
                      <p className="mb-1">
                        <i className="bi bi-clock me-2"></i> {event.time}
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-geo-alt me-2"></i> {event.location}
                      </p>
                    </div>
                  </div>
                  <p className="flex-grow-1">
                    {event.description}
                  </p>
                  <div className="mt-auto">
                    <a href={event.link} className="btn btn-primary rounded-0 mt-3">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="text-center pt-lg-5 pt-3">
              <a href="#" className="event-link text-decoration-none fs-5">
                View All Event <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;