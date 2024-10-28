import { HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/Header";
import Section01 from "./components/section01/Section01";
import Sub01 from "./components/subpages/Sub01";
import Sub02 from "./components/subpages/Sub02";
import Sub03 from "./components/subpages/Sub03";
import Sub04 from "./components/subpages/Sub04";
import Sub05 from "./components/subpages/Sub05";
import PageNotFound from "./components/subpages/PageNotFound";

const Wrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
`;
const App = () => {
  return (
    

    <Wrap>
       
      <HashRouter>
        <Header></Header>
        <Section01/>
        <Routes>    
            <Route path="/Sub01" element={<Sub01 />} />
            <Route path="/Sub02" element={<Sub02 />} />
            <Route path="/Sub03" element={<Sub03 />} />
            <Route path="/Sub04" element={<Sub04 />} />
            <Route path="/Sub05" element={<Sub05 />} />
            <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
    </HashRouter>
      
    </Wrap>
  );
};

export default App;

