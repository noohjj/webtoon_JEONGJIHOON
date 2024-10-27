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


const Sub05 = () => {
    return(
        // <Header/>
        <Contents>
            <div className="imgwrap">
                <img src="https://image-comic.pstatic.net/webtoon/735661/thumbnail/thumbnail_IMAG21_a0a1a80c-04dd-4c96-92f4-e1e413e354c2.jpg" alt="웹툰5"></img>
            </div>

            <div className="textwrap">
                <h2>재혼황후</h2>
                <h4>글/그림:히어리/숨풀/알파타르트</h4>
                <h5>동대제국의 완벽한 황후였던 나비에.<br/>
                    ​황제인 남편이 정부를 황후로 만들려는 것을 알고 이혼을 택한다. 그리고 결심한다.<br/>
                    이곳에서 황후가 될 수 없다면 다른 곳에서 황후가 되겠다고.<br/>
                    인기 웹소설 '재혼 황후'가 웹툰화되다!
                </h5>
            </div>
        </Contents>
    )
}

export default Sub05;