import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;
export const ContainerInteracao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ContainerForm = styled.div`
  width: 70%;
  height: auto;
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
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  label span {
    margin-right: 20px;
    width: 230px;
  }
  > label {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  label textarea {
    width: 300px;
    height: 120px;
    color: #000;
    background: #c8d6e5;
    border: 0;
    padding: 10px;
    border-radius: 5px;
  }
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

export const ParagrafoDetails = styled.p`
  width: 100%;
  margin-bottom: 10px;

  span {
    font-size: 18px;
  }
  > span {
    margin-right: 20px;
  }
`;
