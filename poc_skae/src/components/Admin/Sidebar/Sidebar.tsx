import { Bar, Wrapper, OtherPages} from "./SideBar.styles";
import {Assessment, Chat, Forum, LineStyle, Mail, Person, Receipt, Storefront, Timeline, TrendingUp} from "@material-ui/icons"
import HomePage from "../pages/Home";

const Sidebar = () => {
  return (
    <Wrapper>
    <Bar>
      
        <h3 className="sidebarTitle"> Dashboard</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <LineStyle  />
            Home
          </li>
          <li className="sidebarListItem">
            <Timeline />
            Analytics
          </li>
          <li className="sidebarListItem">
            <TrendingUp />
            Sales
          </li>
        </ul>

        <h3 className="sidebarTitle"> Quick Menu</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Person  />
            Users
          </li>
          <li className="sidebarListItem">
            <Storefront />
            Products
          </li>
          <li className="sidebarListItem">
            <Receipt />
            Transactions
          </li>
          <li className="sidebarListItem">
            <Assessment />
            Reports
          </li>
          </ul>

          <h3 className="sidebarTitle"> Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Mail  />
            Mail
          </li>
          <li className="sidebarListItem">
            <Forum />
            Feedback
          </li>
          <li className="sidebarListItem">
            <Chat />
            Messages
          </li>
        </ul>
    </Bar>
    <OtherPages>
        <HomePage />
      </OtherPages>
    </Wrapper>
  );
};

export default Sidebar;
