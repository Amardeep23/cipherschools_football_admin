import React from "react";
import "./WidgetLarge.css";
import userImg from "../../asset/img/profile_photo.jpg";

export const WidgetLarge = () => {
  // const Button = ({ type }) => {
  //   return <Button className={"widgetLgButton" + type}>{type}</Button>;
  // };
  const buttonType = [
    'Approved', 'Declined', 'Pending'
  ]
  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle">Latest Transactions</h3>

      <table class="table widgetLgTable">
        <thead>
          <tr className="widgetLgTr" style={{ backgroundColor: "lavender" }}>
            <th className="widgetLgTh" scope="col">Customer</th>
            <th className="widgetLgTh" scope="col">Date</th>
            <th className="widgetLgTh" scope="col">Amount</th>
            <th className="widgetLgTh" scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={userImg} alt="userImg" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jan 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <button className="widgetLgButton Approved" >{buttonType[0]}</button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={userImg} alt="userImg" className="widgetLgImg" />
              <span className="widgetLgName">Raheem</span>
            </td>
            <td className="widgetLgDate">3 Jan 2023</td>
            <td className="widgetLgAmount">$126.00</td>
            <td className="widgetLgStatus">
              <button className="widgetLgButton Pending">{buttonType[2]}</button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={userImg} alt="userImg" className="widgetLgImg" />
              <span className="widgetLgName">Amit</span>
            </td>
            <td className="widgetLgDate">4 Jan 2023</td>
            <td className="widgetLgAmount">$132.00</td>
            <td className="widgetLgStatus">
              <button className="widgetLgButton Approved">{buttonType[0]}</button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={userImg} alt="userImg" className="widgetLgImg" />
              <span className="widgetLgName">Sumit</span>
            </td>
            <td className="widgetLgDate">5 Jan 2023</td>
            <td className="widgetLgAmount">$162.00</td>
            <td className="widgetLgStatus">
              <button className="widgetLgButton Pending">{buttonType[2]}</button>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={userImg} alt="userImg" className="widgetLgImg" />
              <span className="widgetLgName">Mohit</span>
            </td>
            <td className="widgetLgDate">8 Jan 2023</td>
            <td className="widgetLgAmount">$102.00</td>
            <td className="widgetLgStatus">
              <button className="widgetLgButton Declined">{buttonType[1]}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
