import { NavLink } from "react-router-dom";
import { userNavigation } from "../../../mocks";
import { Container } from "../../containers";
import "./style.scss";

export const Navigation = () => {
  return (
    <div className="navigation">
      <Container type="center" className='w-[900px]'>
        <ul className="list">
          {userNavigation?.map((item) => (
            <li className="item" key={item.icon}>
              <NavLink to={item.path} className='link'>
                <i className={`icons ${item.icon}`}></i>
                <p className="title">{item.title}</p>
               { item.quantity ? <p className="quantity">{item.quantity}</p> : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
