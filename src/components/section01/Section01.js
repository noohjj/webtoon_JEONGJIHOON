import styled from "styled-components";
import Con01 from "./Con1";
import Con02 from "./Con2";
import Con03 from "./Con3";
import Con04 from "./Con4";
import Con05 from "./Con5";
import { Link } from "react-router-dom";

const TextWrap = styled.div`
  display: flex;
  margin-top: 10px;
  h2 {
    font-size: 25px;
  }
  h4 {
    font-size: 18px;
    margin-left: 10px;
  }
`;

const TextSec = styled.div`
  margin: 5px 10px;
  display: flex;
  color: gray;
`;

const Line = styled.div`
  width: 1px;
  height: 20px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;




const Section01 = () => {
  return (
    <>
      <TextWrap>
        <h2>금요웹툰</h2>
        <TextSec>
          <h4>인기순</h4>
          <Line />
          <h4>업데이트순</h4>
          <Line />
          <h4>조회순</h4>
          <Line />
          <h4>별점순</h4>
        </TextSec>
      </TextWrap>

      
        <ConWrap>
            <Link to ="/Sub01">
              <Con01/>
            </Link>
            <Link to ="/Sub02">
              <Con02/>
            </Link>
            <Link to ="/Sub03">
              <Con03/>
            </Link>
            <Link to ="/Sub04"> 
              <Con04/>
            </Link>
            <Link to ="/Sub05">
              <Con05/>
            </Link>
        </ConWrap>
    </>
  );
};

export default Section01;
