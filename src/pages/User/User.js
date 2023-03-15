import React from "react";
import "./User.css";
import profile_img from "../../asset/img/profile_photo.jpg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationSearchingOutlinedIcon from "@mui/icons-material/LocationSearchingOutlined";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={profile_img} alt="profile_img" className="userShowImg" />
            <div className="userShowTopTiltle">
              <span className="userShowUsername">Amardeep</span>
              <span className="userShowUserTitle">Student</span>
            </div>
          </div>
          <div className="userShowButton">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityOutlinedIcon className="userShowIcon"></PermIdentityOutlinedIcon>
              <span className="userShowInfoTitle">amardeep12</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayOutlinedIcon className="userShowIcon"></CalendarTodayOutlinedIcon>
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidOutlinedIcon className="userShowIcon"></PhoneAndroidOutlinedIcon>
              <span className="userShowInfoTitle">+91 1212121212</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineOutlinedIcon className="userShowIcon"></MailOutlineOutlinedIcon>
              <span className="userShowInfoTitle">amardeep12@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingOutlinedIcon className="userShowIcon"></LocationSearchingOutlinedIcon>
              <span className="userShowInfoTitle">
                Kharagpur, West Bengal, India
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="amardeep12"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Amardeep"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="amardeep12@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 1212121212"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Kharagpur, West Bengal, India"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={profile_img}
                  alt="userUpdateImg"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishRoundedIcon className="userUpdateIcon"></PublishRoundedIcon>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
