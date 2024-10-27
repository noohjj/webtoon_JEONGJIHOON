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

const Con03 = () => {
    return(
        <Con>
              <div className="imgwrap">
                <img src="https://image-comic.pstatic.net/webtoon/773797/thumbnail/thumbnail_IMAG21_4dda13fe-417f-45b9-9696-880f2487d41d.jpg" alt="웹툰3"></img>
              </div>
              <h3>나 혼자 만렙 뉴비</h3>
              <h5>WAN.Z/스윙뱃/메슬로우</h5>
        </Con>
    )
}

export default Con03;