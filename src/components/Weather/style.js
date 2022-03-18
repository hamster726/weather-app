import styled, { css } from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
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
  &::placeholder {
    color: #CDD5C1;
  }
`;
const FormSubmitButton = styled.input`
  height: 30px;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  
`;

export {
  Header,
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
};
