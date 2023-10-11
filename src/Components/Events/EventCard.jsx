import Card from 'react-bootstrap/Card';
import { Link, useLocation } from 'react-router-dom';

function EventCard({event}) {
  const location = useLocation();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={event.image_url} />
      <Card.Body>
        <Card.Title>{event.event_name}</Card.Title>
        <Card.Text>
          <p>Organiser: {event.organizer}</p>
          <p>Location: {event.location}</p>
          <p>Event date: {event.event_date}</p>
        </Card.Text>
        
        {
          (location.pathname=="/events/") &&
          <Link to={`/events/${event.id}`} className='btn btn-outline-primary'>See details</Link>
        }
      </Card.Body>
    </Card>
  );
}

export default EventCard;