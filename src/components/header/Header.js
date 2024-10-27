import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import styled from "styled-components";

const Wrap = styled.div`
  padding-bottom: 20px;
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid lightgray;
`;

const FirstWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 110px;
  height: 20px;
  background: url("https://mblogthumb-phinf.pstatic.net/MjAyMTAzMDNfMzgg/MDAxNjE0NzU3NjQzODIx.r_gXu0KR-YZoy5WoVYbTpSxerzQjSYzpJR4s2PxQeLIg.1fq6vdeWRAY0KC082z0LK8ccZ3Gp1-TcyyVkpIuJh8sg.PNG.olym_ej/02_NAVER_Logo_Black.png?type=w800")
    no-repeat center/cover;
  margin-top: 5px;
`;

const Text = styled.div`
  font-size: 30px;
  margin-left: 20px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 2px;
  height: 30px;
  background-color: lightgray;
  margin-left: 15px;
`;

const Line2 = styled.div`
  width: 2px;
  height: 30px;
  background-color: lightgray;
`;

const Sec = styled.div`
  display: flex;
  font-size: 25px;
  margin-top: 2px;
  h2 {
    margin: 3px 15px;
    color: lightgray;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 350px;
    height: 35px;
    padding: 10px;
  }
  button {
    margin: 0 10px;
  }
`;

const Header = () => {
  return (
    <Wrap>
      <FirstWrap>
        <Logo />
        <Text>
          <h2>웹툰</h2>
        </Text>

        <Sec>
          <Line />
          <h2>웹소설</h2>
          <Line2 />
          <h2>시리즈</h2>
        </Sec>
      </FirstWrap>

      <Search>
        <form>
          <input
            type="search"
            placeholder="제목/작가로 검색할 수 있습니다."
          ></input>
        </form>
        <button>로그인</button>
        <FontAwesomeIcon icon={faBars} fontSize={35} />
      </Search>
    </Wrap>
  );
};

export default Header;
