import styled from "styled-components";

const Logo = styled.div`
  width: 180px;
  height: 33px;
  background: url("https://mblogthumb-phinf.pstatic.net/MjAyMTAzMDNfMzgg/MDAxNjE0NzU3NjQzODIx.r_gXu0KR-YZoy5WoVYbTpSxerzQjSYzpJR4s2PxQeLIg.1fq6vdeWRAY0KC082z0LK8ccZ3Gp1-TcyyVkpIuJh8sg.PNG.olym_ej/02_NAVER_Logo_Black.png?type=w800")
    no-repeat center/cover;
`;
const Header = () => {
  return (
    <>
      <Logo></Logo>
    </>
  );
};

export default Header;
