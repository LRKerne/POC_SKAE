import { FeaturedItem, Wrapper, FeaturedMoneyContainer, FeatureTitle,FeaturedMoney,FeaturedMoneyRate, FeaturedSub } from "./FeaturedInfo.styles"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <Wrapper>
        <FeaturedItem>
          <FeatureTitle>Revenue</FeatureTitle>
            <FeaturedMoneyContainer>
              <FeaturedMoney>-$2,415</FeaturedMoney>
              <FeaturedMoneyRate>
                -11.4 <ArrowDownward className="featuredIcon negative" />
              </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeatureTitle>Sales</FeatureTitle>
            <FeaturedMoneyContainer>
              <FeaturedMoney>-$4,415</FeaturedMoney>
              <FeaturedMoneyRate>
                -15.4 <ArrowDownward className="featuredIcon negative" />
              </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
        <FeaturedItem>
          <FeatureTitle>Cost</FeatureTitle>
            <FeaturedMoneyContainer>
              <FeaturedMoney>$3,415</FeaturedMoney>
              <FeaturedMoneyRate>
                1.4 <ArrowUpward className="featuredIcon positive"/>
              </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>
      </Wrapper>
  );
};

export default FeaturedInfo;
