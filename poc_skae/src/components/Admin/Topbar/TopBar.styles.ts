import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #b3ecff;
  position: sticky;
  top:0;
  z-index: 999;
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

export const BarIconsContainer = styled.div`
  position: relative;
`;

export const TopIconBadge = styled.span`
    position: relative;
    top:-15px;
    left: -15px;
    background-color: red;
    color: #fff;
    padding: 2px 5px;
    border-radius: 50%;
    font-size: 10px;
    /* display: flex;
    align-items: center;
    justify-content: center; */

`;

export const TopLeft = styled.div``;

export const TopRight = styled.div``;
