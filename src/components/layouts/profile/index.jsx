import { useContext, useState } from "react";
import { userContext } from "../../../context/user.context";
import { Link } from "react-router-dom";
import achieve1 from "../../../assets/images/achieve1.svg";
import achieve2 from "../../../assets/images/achieve2.svg";
import "./style.scss";

export const Profile = () => {

  const {data, loading} = useContext(userContext)
  const {avatar_url, bio, company, followers, following, location, login, name} = data
  const my_img = 'https://avatars.githubusercontent.com/u/158772048?v=4'
  let [oclock, setOclock] = useState('00:00:00')

  // Oclock

  setInterval(() => {
    let date = new Date()
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()
    let seconds = date.getSeconds().toString()
    let time = `${hours.length === 1 ? '0' + hours : hours}:${minutes.length === 1 ? '0' + minutes : minutes}:${seconds.length === 1 ? '0' + seconds : seconds}`
    oclock = time
    setOclock(time)
  }, 1000)

  return (
    <div className="profile">
      <div>
        <img className="avatar" src={avatar_url && my_img} alt="avatar" />
        <div className="home-status-wrapper">
          <p className="home-status">🏠</p>
        </div>
      </div>

      <div className="name-wrapper">
        <h2 className="full-name">{loading ? 'User name' : name}</h2>
        <p className="nickname">khojiakbar63 · he/him</p>
      </div>

      <p className="job">{bio}</p>

      <button className="edit-btn">Edit profile</button>

      <div className="follow-wrapper flex">
        <Link to="/followers">
          <div className="flex items-center gap-[3px] font-[600] text-[14px]">
            <i className="bi bi-people text-[#8b949e] text-[16px]"></i>
            <p className="text-[#c2cad1]">{followers}</p>
            <p className="text-[#6e7681] ">followers</p>
          </div>
        </Link>
        ·
        <Link to="/followings">
          <div className="flex items-center gap-[3px] font-[600] text-[14px]">
            <p className=" text-[#c2cad1]">{following}</p>
            <p className="text-[#6e7681] ">followings</p>
          </div>
        </Link>
      </div>

      <ul className="list">
        <li className="item">
          <i className="icon bi bi-building-fill"></i>
          <p className="title">{company}</p>
        </li>
        <li className="item">
          <i className="icon bi bi-geo-alt"></i>
          <p className="title">{location}</p>
        </li>
        <li className="item">
          <i className="icon bi bi-clock"></i>
          <p className="title">{oclock}</p>
          <p className="icon"> (UTC +05:00)</p>
        </li>
      </ul>

      <div className="line"></div>

      <h2 className="achieve-title">Achievements</h2>

      <div className="flex gap-[2px] mb-[18px]">
        <img className="cursor-pointer" src={achieve1} alt="achieve1" />
        <img className="cursor-pointer" src={achieve2} alt="achieve2" />
      </div>

      <div className="flex gap-[5px] items-center mb-[18px]">
        <p className="beta cursor-pointer">Beta</p>
        <a className="feedback" href="#">
          Send feedback
        </a>
      </div>

      <p className="report cursor-pointer">Block or Report</p>
    </div>
  );
};
