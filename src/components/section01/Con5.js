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

const Con05 = () => {
    return(
        <Con>
            <div className="imgwrap">
                <img src="https://image-comic.pstatic.net/webtoon/735661/thumbnail/thumbnail_IMAG21_a0a1a80c-04dd-4c96-92f4-e1e413e354c2.jpg" alt="웹툰5"></img>
            </div>
            <h3>재혼왕후</h3>
            <h5>히어리/숨풀/알파타르트</h5>
        </Con>
    )
}

export default Con05;