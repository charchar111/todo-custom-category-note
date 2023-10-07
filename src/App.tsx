import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { useRecoilValue } from "recoil";

import { themeAtom } from "./atom";
import Footer from "./components/footer";
import Header from "./components/Header";
import Main from "./components/Main";
const GlobalStyle = createGlobalStyle` 
${reset}

body {
  
  background-color: ${(props) => props.theme.bgcolors.main};
color: ${(props) => props.theme.colors.main};
transition: all 0.3s ease-in-out;

}

body *{ 
  box-sizing:border-box;
  transition: all 0.2s ease-in-out;
}

button {
  all: unset;
  cursor: pointer;
transition: all 0.2s ease-in-out;
  &:hover {
    color:${(props) => props.theme.accentcolor.main}
  }
}

input {
  all: unset
}

.App {
  margin: 0 auto;
  padding: 20px 0;
  max-width: 800px;

 
  main{
    margin: 30px 0;
    padding: 10px;



  }
}

`;

function App() {
  const themeState = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={themeState}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
