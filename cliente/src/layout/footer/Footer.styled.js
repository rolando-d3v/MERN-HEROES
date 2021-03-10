import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #10131a;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterSuscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  text-align: center;
  padding: 24px;
  color: #fff;
`;
export const FooterSubHeading = styled.p`
  font-size: 24px;
  margin-bottom: 24px;
`;
export const FooterSubText = styled.p`
  font-size: 1em;
  margin: 0.8rem 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  outline: none;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
`;
export const Button = styled.button`
  outline: none;
  font-weight: 700;
  color: #fff;
  padding: 10px 20px;
  background-color: #1457e6;
  border-radius: 8px;
  margin-left: 10px;
  font-size: 1rem;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin-top: 15px;
    margin-left: 0px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
  color: #fff;
  display: flex;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  margin: 0 2.5rem;
  padding: 0px;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media (max-width: 640px) {
    margin: 1rem 0;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const FooterLink = styled.div`
  font-size: 0.9rem;
`;
