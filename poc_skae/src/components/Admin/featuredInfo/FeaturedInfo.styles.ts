import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const FeaturedItem = styled.div`
  flex: 1;
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  .featuredIcon{
    font-size: 14px;
  }
  .negative{
    color: red;
  }
  .positive{
    color: green;
  }
`;
export const FeatureTitle = styled.span`
  font-size: 20px;
`;
export const FeaturedMoneyContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  
`;
export const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
  `;

export const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
  `;
