import { useEffect, useState, memo } from "react";
import { Outlet } from "react-router";
import { Aside, Header, Footer, Navigation } from "../../components/layouts";
import { Section } from "../../components/containers";
import { userAPI } from "../../service/user";
import { userContext } from "../../context/user.context";

import "./style.scss";

export const Profile = memo(() => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const useFetch = async () => {
    setLoading(true);
    const res = await userAPI.searchUser(import.meta.env.VITE_MY_PROFILE);
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    useFetch();
  }, []);

  return (
    <>
      <userContext.Provider value={{ data, loading }}>
        <Header />
        <Navigation />
        <Section className="flex">
          <Aside />
          <div className="outlet">
            <Outlet />
          </div>
        </Section>
        <Footer />
      </userContext.Provider>
    </>
  );
});
