import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';

import Loader from '../components/Loader';
import NewPetModal from '../components/NewPetModal';
import PetsList from '../components/PetsList';

export default function Pets() {
  const [modal, setModal] = useState(false);

  const onSubmit = (input) => {
    setModal(false);
  };

  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />;
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList />
      </section>
    </div>
  );
}
