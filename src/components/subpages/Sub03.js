import styled from "styled-components";

const Contents = styled.div`
width: 100%;
display:flex;
  .imgwrap {
    width: 540px;
    height: 700px;
    overflow: hidden;
  }
  img {
    width: 100%;
    transition-duration: 0.5s;
  }
  img:hover {
    transform: scale(1.1);
  }
    .textwrap{
        margin-left:40px;
    }
    h2{
        font-size: 40px;
        font-weight:800;
    }
    h4{
        font-size:25px;
        margin-top:30px;
    }
    h5{
        font-size:20px;
        margin-top: 25px;   
        line-height:30px; 
    }
;`


const Sub03 = () => {
    return(
        // <Header/>
        <Contents>
            <div className="imgwrap">
            <img src="https://image-comic.pstatic.net/webtoon/773797/thumbnail/thumbnail_IMAG21_4dda13fe-417f-45b9-9696-880f2487d41d.jpg" alt="웹툰3"></img>
            </div>

            <div className="textwrap">
                <h2>나 혼자 만렙 뉴비</h2>
                <h4>글/그림:WAN.Z/스윙뱃/메슬로우</h4>
                <h5>게임 너튜버로 활동 중인 주인공 진혁은 유일하게<br/>
                    [시련의 탑]의 엔딩을 봤지만, 게임의 인기가 하락하며<br/>
                    더 이상 게임 너튜버로서의 삶도 유지하기 힘들어진다.<br/><br/>

                    엔딩을 보았기에 이대로 게임을 마무리하려는 진혁.<br/>
                    바로 그날, [시련의 탑]은 현실이 되었다.
                </h5>
            </div>
        </Contents>
    )
}

export default Sub03;