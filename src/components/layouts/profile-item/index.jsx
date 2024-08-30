import { useState, useEffect } from "react";
import { userAPI } from "../../../service/user";
import { Button } from "../../ui";
import "./style.scss";

export const ProfileItem = ({user_name}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    userAPI.searchUser(user_name).then((res) => {
      setData(res);
    });
  });

  return (
    <div className="profile-item flex">
      <div className="flex justify-between align-center gap-[25px]">
        <img
          src={data?.avatar_url}
          className="avatar"
          alt="img"
        />
        <div className="">
          <div className="info">
            <a href={data?.html_url} target="_blank">
              <div className="title flex align-center gap-[10px]">
                <p className="name cursor-pointer">{data?.name}</p>
                <p className="login cursor-pointer">{data?.login}</p>
              </div>
            </a>

            <p className="bio">{data?.bio}</p>
          </div>

          <div className="flex location">
            <p className="company">
              <i className="bi bi-building"></i>
              <span>{data?.company}</span>
            </p>
            <p className="location">
              <i className="bi bi-geo-alt"></i>
              <span>{data?.location}</span>
            </p>
          </div>
        </div>
      </div>

      <Button text="Follow" className="follow-btn" />
    </div>
  );
};
