import React from "react";
import "./WidgetSmall.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import userImg from '../../asset/img/profile_photo.jpg'

export const WidgetSmall = () => {
  return (
    <div className="widgetSmall">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={userImg} alt="userImg" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Amardeep</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton"> <VisibilityIcon className="widgetSmIcon"></VisibilityIcon> Display </button>
        </li>
        <li className="widgetSmListItem">
          <img src={userImg} alt="userImg" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Amardeep</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton"> <VisibilityIcon className="widgetSmIcon"></VisibilityIcon> Display </button>
        </li>
        <li className="widgetSmListItem">
          <img src={userImg} alt="userImg" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Amardeep</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton"> <VisibilityIcon className="widgetSmIcon"></VisibilityIcon> Display </button>
        </li>
        <li className="widgetSmListItem">
          <img src={userImg} alt="userImg" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Amardeep</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton"> <VisibilityIcon className="widgetSmIcon"></VisibilityIcon> Display </button>
        </li>
        <li className="widgetSmListItem">
          <img src={userImg} alt="userImg" className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Amardeep</span>
            <span className="widgetSmUserTitle">Student</span>
          </div>
          <button className="widgetSmButton"> <VisibilityIcon className="widgetSmIcon"></VisibilityIcon> Display </button>
        </li>
      </ul>
    </div>
  );
};
