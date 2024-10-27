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

const Con01 = () => {
    return(
        <Con>
              <div className="imgwrap">
                <img src="https://image-comic.pstatic.net/webtoon/644112/thumbnail/thumbnail_IMAG21_3618981192359294768.jpg" alt="웹툰1"></img>
              </div>
              <h3>몽홀</h3>
              <h5>장태산</h5>
        </Con>
    )
}

export default Con01;