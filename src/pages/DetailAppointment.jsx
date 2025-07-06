import { useParams } from 'react-router-dom';

function DetailAppointment() {
  const { id } = useParams();
  return (
    <div>
      <h2>Meeting details</h2>
      <p>Appointment ID: {id}</p>
    </div>
  );
}

export default DetailAppointment;