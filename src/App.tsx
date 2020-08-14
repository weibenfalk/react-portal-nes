import React, { useState } from 'react';
import './App.css';
import 'nes.css/css/nes.min.css';

import Modal from './Modal';
import ModalContent from './ModalContent';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='App'>
      <Modal modalOpen={modalOpen}>
        <ModalContent setModalOpen={setModalOpen} />
      </Modal>
      <i className='nes-mario'></i>
      <button
        type='button'
        className='nes-btn is-primary'
        onClick={() => setModalOpen(true)}
      >
        <span className='nes-text'>Open Modal</span>
      </button>
    </div>
  );
};

export default App;
