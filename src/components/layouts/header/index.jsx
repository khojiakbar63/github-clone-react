import { Container } from "../../containers";
import "./style.scss";
import logo from "../../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { headerTopNavigation } from "../../../mocks";
import { Input } from "../../form";
import { Button } from "../../../components/ui";



export const Header = () => {
  return (
    <header className="">
      <Container className="container-fluid">
        <nav>
          <Link>
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="list">
            {headerTopNavigation.length &&
              headerTopNavigation.map((item, i) => (
                <li key={i} className="list-item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                  <i className={`bi ${item.icon} text-[#8B949E]`}></i>
                </li>
              ))}
          </ul>

          <ul className="list">
            <li>
              <Input placeholder='Search'/>
            </li>

            <li>
              <Button text="Login"/>
            </li>
            <li>
              <Button text="Logout"/>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
