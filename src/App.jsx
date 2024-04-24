import react from 'react';
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}
