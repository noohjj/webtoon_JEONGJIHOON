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


const Sub04 = () => {
    return(
        // <Header/>
        <Contents>
            <div className="imgwrap">
            <img src="https://image-comic.pstatic.net/webtoon/821192/thumbnail/thumbnail_IMAG21_156483ac-3740-4cbf-8150-0f24595bae52.jpg" alt="웹툰4"></img>
            </div>

            <div className="textwrap">
                <h2>좋아?죽어!</h2>
                <h4>글/그림:김용키/박만사</h4>
                <h5>남자들이면 한번쯤 뒤돌아볼만한 예쁜 외모를 가진 '민주'<br/>
                    그녀의 직업은 인터넷 방송인. 그저 시청자 수를 늘리고 유명해지기만을 꿈꾸며 달려오던 민주에게 서서히 다가오는 두 검은 그림자.<br/>
                    호락호락 당할수는 없다. '서로 물어뜯다 죽여버려.'<br/>
                    세 청춘남녀의 온라인 안과 밖을 넘나드는 서스펜스 로맨틱 스릴러.
                </h5>
            </div>
        </Contents>
    )
}

export default Sub04;