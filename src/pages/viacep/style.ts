import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const ContainerInteracao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const ContainerLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 370px;
  width: 200px;
  margin-right: 50px;
  transition: 0.2s;
  &:hover {
    transform: translateX(15px);
  }
  img {
    width: 100%;
  }
`;

export const ContainerForm = styled.div`
  width: 500px;
  height: 480px;
  margin-top: 20px;
  padding: 10px;
  border: 3px solid #e7442f;
  background: #ecf0f1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.53);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.53);
`;

export const TextTitleForm = styled.h3`
  text-align: center;
`;

export const Form = styled.form`
  flex: 1;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  input {
    color: #000;
    background: #c8d6e5;
    border: 0;
    height: 30px;
    width: 300px;
    padding: 2px 10px;
    border-radius: 5px;

    :active {
      border: 1px solid #000;
    }
  }
  > input {
    margin-bottom: 20px;
  }
`;
