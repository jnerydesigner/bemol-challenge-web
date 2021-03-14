import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import { ContainerToast } from './styles';

const toast: React.FC = () => {
  return (
    <ContainerToast>
      <FiXCircle size={30} />
      <h2>Toast</h2>
    </ContainerToast>
  );
};

export default toast;
