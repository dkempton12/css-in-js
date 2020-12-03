import logo from './logo.svg';
import styled from 'styled-components';

const App = () => {
  const Container = styled.section`
    display: grid;
    place-items: center;
    padding: 3em;
    border-radius: 4px;
    background: #282828;
  `;
  const Heading = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: mediumseagreen;
  `;
  const Button = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    font-size: inherit;
    background: #007fff;
    color: #fff;
    cursor: pointer;
  `;
  return (
    <Container>
      <Heading>Trying out Styled Components!</Heading>
      <Button href="https://www.google.com/">Click Me</Button>
    </Container>
  );
};

export default App;
