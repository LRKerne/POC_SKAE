import {  NotificationsNone } from "@material-ui/icons";
import { Bar, Wrapper, TopRight, TopLeft, Logo, BarIconsContainer, TopIconBadge } from "./TopBar.styles";

const Topbar = () => {
  return (
    <Bar>
      <Wrapper>
        <TopLeft>
          <Logo>SKAE</Logo>
        </TopLeft>
        <TopRight>
          <BarIconsContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </BarIconsContainer>
        </TopRight>
      </Wrapper>
    </Bar>
  );
};

export default Topbar;
