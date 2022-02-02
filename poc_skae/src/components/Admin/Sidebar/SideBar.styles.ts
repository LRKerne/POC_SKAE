import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Bar = styled.div`
  flex: 1;
  height: calc(100vh - 60px);
  width:200px;
  background-color:#ccf2ff;
  position: sticky;
  top: 50px;
  /* z-index: 999; */
  padding: 20px;
  margin-bottom: -1px;

  .sidebarTitle{
    font-size: 13px;
    color:#0086b3 ;
  }

  .sidebarList{
    list-style: none;
    padding: 5px;
  }

  .sidebarListItem{
    padding:5px;
    display:flex;
    align-items: center;
    justify-content: left;
  }
  
  .sidebarListItem:hover{
    background-color: #0086b3;
    border-radius: 5px;
    padding:5px;
    cursor: pointer;
  }
`;

export const OtherPages=styled.div`
  flex:4;
  background-color: #e6f9ff
`;
