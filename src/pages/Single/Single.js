import React from 'react';
import Chart from '../../components/Chart/Chart';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/Table/Table';
import './Single.scss';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemKey">Elton St. 234 Garden Yd. Dhaka</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className='title'>Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single