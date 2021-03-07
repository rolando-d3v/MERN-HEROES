import styled from "styled-components";

const Title = styled.h1`
  font-weight: 700;
  color: red;
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #0b34e7;
  font-weight: 400;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.5rem;
  border-radius: 15px;
  :focus {
    outline: none
  }
  :hover {
    background-color: #41d141
  }
`;

function App() {
  return (
    <div className="App">
      <Title>hola</Title>
      <Button>Ver mas</Button>
    </div>
  );
}

export default App;
