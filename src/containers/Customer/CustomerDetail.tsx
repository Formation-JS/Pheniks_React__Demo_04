import { Suspense, use, useEffect, useState } from 'react';
import type { Customer } from '../../@types/customer';
import customerService from '../../services/customer.service';
import { ErrorBoundary } from 'react-error-boundary';

type CustomerDetailProps = {
  id: number;
};
export default function CustomerDetail({ id }: CustomerDetailProps) {

  // Mise en cache de la promise
  // → Non necessaire avec des "server component"
  const [customerPromise, setCustomerPromise] = useState<Promise<Customer> | null>(null);
  useEffect(() => {
    setCustomerPromise(customerService.getById(id));
  }, [id]);

  return (
    <ErrorBoundary fallback={<p>Une erreur s'est produite</p>}>
      <Suspense fallback={<p>Chargement des informations...</p>}>
        {customerPromise && (<CustomerRequest loader={customerPromise} />)}
      </Suspense>
    </ErrorBoundary>
  );
}

type CustomerRequestProps = {
  loader: Promise<Customer>;
};
function CustomerRequest({ loader }: CustomerRequestProps) {
  const customer = use(loader);
  return (
    <div>
      <p>Email : {customer.email}</p>
      {customer.birthdate ? (
        <p>Date de naissance : {customer.birthdate.toLocaleDateString('fr-be')}</p>
      ) : (
        <p>Date de naissance non renseigné 😭</p>
      )}
    </div>
  );
}