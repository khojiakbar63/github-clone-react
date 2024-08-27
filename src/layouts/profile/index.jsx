import { Aside, Header, Footer } from "../../components/layouts";
import { Section } from "../../components/containers";
import "./style.scss";
import { Outlet } from "react-router";

export const Profile = () => {
  return (
    <>
      <Header />
      <Section>
        <Aside />
        <div>
            <Outlet/>
        </div>
      </Section>
      <Footer />
    </>
  );
};
