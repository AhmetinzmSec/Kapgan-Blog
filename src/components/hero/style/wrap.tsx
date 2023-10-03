import styled from "styled-components";

const HeroWrap = styled.section`
  height: 550px;
  color: #ffffff;
  text-align: center;
  background:  linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url("https://i.hizliresim.com/sb8pthr.gif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  h1 {
    color: #ffffff;
    font-size: 52px;
  }
  
  img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`

export default HeroWrap
