import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  button {
    margin-bottom: 20px;
  }
`;

type Props = {
  setModalOpen: any;
};

const ModalContent: React.FC<Props> = ({ setModalOpen }) => (
  <div className='nes-container is-dark with-title is-centered'>
    <p className='title'>Modal magic</p>
    <Wrapper>
      <i className='nes-kirby'></i>
      <button
        type='button'
        className='nes-btn is-success'
        onClick={() => setModalOpen(false)}
      >
        <span>Close Modal</span>
      </button>
      <p>This is a cool modal!</p>
    </Wrapper>
  </div>
);

export default ModalContent;
