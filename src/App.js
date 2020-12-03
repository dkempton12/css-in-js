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
  return (
    <Container>
      <Title>Trying out Styled Components!</Title>
    </Container>
  );
};

export default App;
