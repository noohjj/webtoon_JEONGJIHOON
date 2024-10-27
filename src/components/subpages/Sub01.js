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
    }
;`


const Sub01 = () => {
    return(
        // <Header/>
        <Contents>
            <div className="imgwrap">
                <img src="https://image-comic.pstatic.net/webtoon/644112/thumbnail/thumbnail_IMAG21_3618981192359294768.jpg" alt="웹툰1"></img>
            </div>

            <div className="textwrap">
                <h2>몽홀</h2>
                <h4>글/그림:장태산</h4>
                <h5>차갑고 척박한 땅 몽홀
                그 곳에서 펼쳐지는 감동의 대서사시</h5>
            </div>
        </Contents>
    )
}

export default Sub01;