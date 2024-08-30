import { Link } from "react-router-dom";
import { Container } from "../../containers";
import { footerNavigation } from "../../../mocks";
import dark_logo from "../../../assets/images/dark-logo.svg";
import "./style.scss";

export const Footer = () => {
  return (
    <footer>
      <Container type="fluid">
        <div className="line"></div>
        <ul className="list">
          <li className="item">
            <img src={dark_logo} alt="dark-logo" />
            <p>© 2022 GitHub, Inc.</p>
          </li>

          {footerNavigation?.map((item) => (
            <li className="item" key={item.link}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};
