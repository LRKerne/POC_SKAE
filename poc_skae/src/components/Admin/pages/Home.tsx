import Chart from "../chart/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import { Wrapper} from "./Home.styles";

const HomePage = () => {
  return (
    <Wrapper>
        <FeaturedInfo />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
        <Chart />
      </Wrapper>
  );
};

export default HomePage;
