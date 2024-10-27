import styled from "styled-components";

const Con = styled.div`
  width: 270px;
  height: 450px;
  .imgwrap {
    width: 100%;
    height: 350px;
    overflow: hidden;
  }
  img {
    width: 100%;
    transition-duration: 0.5s;
  }
  img:hover {
    transform: scale(1.1);
  }
  h3 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
  }
  h5 {
    margin-top: 20px;
    font-size: 15px;
  }
`;

const Con02 = () => {
    return(
        <Con>
        <div className="imgwrap">
          <img src="https://image-comic.pstatic.net/webtoon/780063/thumbnail/thumbnail_IMAG21_3978478587194062641.jpg" alt="웹툰2"></img>
        </div>
        <h3>달이 없는 나라</h3>
        <h5>엥비</h5>
      </Con>
    )
}

export default Con02;