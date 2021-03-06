import styled, {css, keyframes} from "styled-components";

const appearance = keyframes`
  from {
    visibility: hidden;
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }
`;

const Main = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 30px;
  margin: 50px 0;
  min-height: 270px;
  min-width: 300px;
  max-width: 500px;
  background: #ffffff30;
  border-radius: 20px;
`;
const City = styled.div`
  text-align: center;
  font-size: 48px;
`;
const Time = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const Icon = styled.span`
  text-align: center;
  font-size: 90px;
`;

const Info = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
`;

const SearchCityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;



const Form = styled.form`
  position: relative;
`;

const FormSubmitButton = styled.input`
  height: 30px;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #ffffff90;
  transition: 0.05s ease;

  &:active {
    background: #aaaaaa90;
  }
`;

const FormInput = styled.input`
  background: #ffffff50;
  border: none;
  width: 200px;
  height: 30px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 0;
  padding-left: 10px;

  &:focus {
    background: #ffffff80;
  }

  &::placeholder {
    color: #cdd5c1;
  }

  &:focus {
    outline: none;
  }
`;

const CityList = styled.ul`
  padding: 0;
  padding-top: 5px;
  margin: 0;
  position: absolute;
  top: 30px;
  left: 0;
  width: 264.37px;
  min-height: 30px;
  background: #ffffff50;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  overflow: hidden;
  animation: ${appearance} 0.1s ease;
`;

const CityItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  min-height: 30px;
  border-bottom: 1px solid #ffffff50;
  cursor: pointer;

  &:hover {
    background: #ffffff50;
  }
`;

export {
  Main,
  Container,
  Time,
  Info,
  IconContainer,
  Icon,
  City,
  SearchCityContainer,
  Form,
  FormInput,
  FormSubmitButton,
  CityList,
  CityItem,
};
