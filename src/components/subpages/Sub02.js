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


const Sub02 = () => {
    return(
        // <Header/>
        <Contents>
            <div className="imgwrap">
                <img src="https://image-comic.pstatic.net/webtoon/780063/thumbnail/thumbnail_IMAG21_3978478587194062641.jpg" alt="웹툰2"></img>
            </div>

            <div className="textwrap">
                <h2>달이 없는 나라</h2>
                <h4>글/그림:엥비</h4>
                <h5>온 나라의 모든 집안이 부계를 따르지만,<br/>
                    단 한 곳 황실만은 어머니로부터 딸에게 황위가 이어진다.<br/>
                    그리고 아들을 내세워 여황제의 눈에 들고자 하는 귀족들.<br/><br/>

                    사랑조차 협잡이 되는 황궁에 홀로 던져진 태자 선요.<br/>
                    그녀는 선택해야 한다. 태자의 정실이 되는 것은 누구일까?
                </h5>
            </div>
        </Contents>
    )
}

export default Sub02;