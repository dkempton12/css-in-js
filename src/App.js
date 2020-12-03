import logo from './logo.svg';
import styled from 'styled-components';

const App = () => {
  const Container = styled.section`
    padding: 3em;
    border-radius: 4px;
    background: #282828;
  `;
  const Title = styled.h1`
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
      <Title>Trying out Styled Components!</Title>
      <Button href="https://www.google.com/">Click Me</Button>
    </Container>
  );
};

export default App;
