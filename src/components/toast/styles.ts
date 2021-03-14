import styled from 'styled-components';

export const ContainerToast = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 100px;
  background: rgba(255, 118, 117, 0.6);
  border: 3px solid #e7442f;
  border-radius: 5px;
  z-index: 100;
  svg {
    color: #e7442f;
  }
`;
