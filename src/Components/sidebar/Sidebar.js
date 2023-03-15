import React from "react";
import "./Sidebar.css";
import LineStyleOutlinedIcon from "@mui/icons-material/LineStyleOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SummarizeIcon from "@mui/icons-material/Summarize";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to='/' className="link">
            <li className="sidebarListItem active">
              <LineStyleOutlinedIcon className="sidebarIcon">
                {" "}
              </LineStyleOutlinedIcon>
              Home
            </li>
            </Link>
           
            <li className="sidebarListItem">
              <PollOutlinedIcon className="sidebarIcon"></PollOutlinedIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpOutlinedIcon className="sidebarIcon"></TrendingUpOutlinedIcon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <AccountCircleOutlinedIcon className="sidebarIcon">
                  {" "}
                </AccountCircleOutlinedIcon>
                Users
              </li>
            </Link>
            <Link to='/products' className="link">
              <li className="sidebarListItem">
                <StoreOutlinedIcon className="sidebarIcon"></StoreOutlinedIcon>
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <PaidOutlinedIcon className="sidebarIcon"></PaidOutlinedIcon>
              Transaction
            </li>
            <li className="sidebarListItem">
              <SummarizeIcon className="sidebarIcon"></SummarizeIcon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <EmailOutlinedIcon className="sidebarIcon"> </EmailOutlinedIcon>
              Mail
            </li>
            <li className="sidebarListItem">
              <RateReviewOutlinedIcon className="sidebarIcon"></RateReviewOutlinedIcon>
              Feedback
            </li>
            <li className="sidebarListItem">
              <QuestionAnswerOutlinedIcon className="sidebarIcon"></QuestionAnswerOutlinedIcon>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutlineOutlinedIcon className="sidebarIcon">
                {" "}
              </WorkOutlineOutlinedIcon>
              Manage
            </li>
            <li className="sidebarListItem">
              <PollOutlinedIcon className="sidebarIcon"></PollOutlinedIcon>
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportProblemOutlinedIcon className="sidebarIcon"></ReportProblemOutlinedIcon>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
