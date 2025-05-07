import { useParams } from 'react-router';

export default function CustomerDetailPage() {

  const { id } = useParams();

  return (
    <>
    <h2>Detail du client {id}</h2>
    </>
  );
}