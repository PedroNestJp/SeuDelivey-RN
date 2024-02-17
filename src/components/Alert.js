import React from 'react';
import ModalAlert from '@/components/modalAlert';
import { useAlert } from '../context/AlertContext';

function Alert() {
  const { alertMessage, hideAlert } = useAlert(); // Use useAlert para acessar o contexto

  return (
    <div>
      {alertMessage && (
        <ModalAlert
          message={alertMessage}
          onClose={() => {
            hideAlert(); 
          }}
        />
      )}
    </div>
  );
}

export {Alert};