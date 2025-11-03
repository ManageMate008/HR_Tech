import React, { useState } from "react";
import "./Edashboard.css";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaClipboardList,
  FaMoneyBill,
  FaTasks,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaBirthdayCake,
  FaBullhorn,
  FaCalendarAlt, FaChartLine,
  FaEnvelope,
  FaIdBadge,
  FaClock,
  FaBell,
  FaKey,
  FaCaretDown,
} from "react-icons/fa";


import { Card } from "antd";
import axios from "axios";


const userName = localStorage.getItem("userName") || "Employee";

// const [search, setSearch] = useState("");

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick}>
    <div className="sidebar-icon">{icon}</div>
    <span>{label}</span>
  </div>
);

 
const userEmail = localStorage.getItem("userEmail") || "";




const Edashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [search, setSearch] = useState("");
   const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [profile, setProfile] = useState({
  name: "",
  email: "",
  mobile: "",
  department: "N/A",
  designation: "N/A",
  // DateOfJoining : "23.03.2025"
 });

 const handleLogoutYes = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // Redirects to HomePage
  };

  const handleLogoutNo = () => {
    setActiveTab("Dashboard");
  }
const [leaveForm, setLeaveForm] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });
  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/leave/apply", {
        employeeEmail: userEmail,
        ...leaveForm,
      });
      alert("✅ Leave request submitted!");
      setLeaveForm({
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
      });
    } catch (err) {
      console.error("Leave Submit error",err.response?.data || err.message);
      

      alert("❌ Failed to submit leave");
    }
  };

  // --- SECTION RENDERER ---
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <>
            <h2>Employee Dashboard Overview</h2>
            <h3 style={{marginTop: "-10px", color: "#555"}}>Welcome, {userName} 👋</h3>


            <div className="stats-grid">
              <div className="card">
                <div className="card-header">
                  <h4>Total Employees</h4>
                  <FaUser className="card-icon" />
                </div>
                <p className="card-value">250</p>
                <small>+10 since last month</small>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>Attendance Rate</h4>
                  <FaCalendarCheck className="card-icon" />
                </div>
                <p className="card-value">95%</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>Tasks Completed</h4>
                  <FaClipboardList className="card-icon" />
                </div>
                <p className="card-value">9 / 10</p>
                <small>90% completion</small>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>Current Task</h4>
                  <FaTasks className="card-icon" />
                </div>
                <p className="card-value">UI/UX Design</p>
                <p>Deadline : 04 Nov 2025</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>Holidays</h4>
                  <FaCalendarAlt className="card-icon" />
                </div>
                <p>Diwali - 26 Nov 2025</p>
                <p>Christmas - 25 Dec 2025</p>
                <p>Holi - 21 Mar 2025</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4>PayRoll Status</h4>
                  <FaMoneyBill className="card-icon" />
                </div>
                <p className="card-value">₹12,50,000</p>
                <small>Paid</small>
              </div>
            </div>

            <div className="sub-grid">
              <div className="card">
                <h4 className="card-title">
                  <FaSearch className="inline-icon" /> Quick Search
                </h4>
                <div className="search-box">
                  <FaSearch className="search-icon" />
                  <input type="text" placeholder="Search employee, task, or ID..." />
                </div>
              </div>

              <div className="card">
                <h4 className="card-title">
                  <FaBirthdayCake className="inline-icon" /> Upcoming Birthdays
                </h4>
                <ul>
                  <li>🎂 Riya Sharma — Oct 28</li>
                  <li>🎂 Arjun Patel — Nov 2</li>
                  <li>🎂 Sneha Verma — Nov 4</li>
                </ul>
              </div>

              <div className="card">
                <h4 className="card-title">
                  <FaBullhorn className="inline-icon" /> Announcements
                </h4>
                <ul>
                  <li>📢 New HR Policy effective Nov 1</li>
                  <li>🏆 Best Performer: Ravi Kumar</li>
                  <li>📅 Office Picnic — Nov 12</li>
                </ul>
              </div>
            </div>
          </>
        );

      // case "Profile":
      //   return (
      //     <div className="feature-section">
      //       <h2><FaIdBadge /> Employee Profile</h2>
      //       <div className="profile-card">
      //         <img
      //           src="https://via.placeholder.com/100"
      //           alt="Profile"
      //           className="profile-pic"
      //         />
      //         <div>
      //           <h3>Rahul Sharma</h3>
      //           <p>Software Developer</p>
      //           <p>EId : 34001</p>
      //           <p>Email: rahul.sharma@gmail.com</p>
      //           <p>Mob No : 8365248912</p>
      //           <p>Department: FrontEnd</p>
      //           <p>Date of Joining : 17.05.2004</p>
      //           <button className="btn-edit">Edit Profile</button>
      //         </div>
      //       </div>
      //     </div>
      //   );
      
      case "Profile":
  return (
    <div className="feature-section">
      <h2><FaIdBadge /> Employee Profile</h2>

      {/* Profile Card */}
      {/* <div className="profile-card">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-pic"
        />
        <div>
          
          <h3>{userName}</h3>
          
          <p>{profile.role}</p>
          <p>EId : 34001</p>
         
          <p>Email: {profile.email}</p>
          
          <p>Mob No : {profile.mobile}</p>
          
          <p>Department: {profile.department}</p>
          <p>Designation: {profile.designation}</p>
          <p>Date of Joining : 17.05.2004</p>

         
          <button className="btn-edit" onClick={() => setShowEdit(true)}>
            Edit Profile
          </button>
        </div>
      </div> */}
      <div className="profile-card">
  <div className="profile-details">
    <h3 className="profile-name">Employee Name :{userName}</h3>
    <p><strong>Role:</strong> {profile.role}</p>
    <p><strong>EID:</strong> 34001</p>
    <p><strong>Email:</strong> {profile.email}</p>
    <p><strong>Mobile:</strong> {profile.mobile}</p>
    <p><strong>Department:</strong> {profile.department}</p>
    <p><strong>Designation:</strong> {profile.designation}</p>
    <p><strong>Date of Joining:</strong> 17.05.2004</p>

    <button className="btn-edit" onClick={() => setShowEdit(true)}>
      Edit Profile
    </button>
  </div>
</div>


      
      {showEdit && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>Edit Employee Profile</h3>

            {/* <form className="edit-form">
              <label>Name:</label>
              <input type="text" defaultValue="Rahul Sharma" />

              <label>Email:</label>
              <input type="email" defaultValue="rahul.sharma@gmail.com" />

              <label>Mobile No:</label>
              <input type="text" defaultValue="8365248912" />

              <label>Department:</label>
              <input type="text" defaultValue="FrontEnd" />

              <label>Designation:</label>
              <input type="text" defaultValue="Software Developer" />

              <div className="modal-buttons">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowEdit(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn-save">
                  Save
                </button>
              </div>
            </form> */}
            <form
  className="edit-form"
  onSubmit={async (e) => {
    e.preventDefault();
    const res=await fetch(`http://localhost:5000/api/auth/update-profile/${profile.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });
    const data=await res.json();
    // const res = await fetch(...);

    console.log("Profile updated:", data);
    setShowEdit(false);
  }}
>
  {/* <label>Name:</label>
  <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} /> */}

  <label>Email:</label>
  <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />

  <label>Mobile No:</label>
  <input type="text" value={profile.mobile} onChange={(e) => setProfile({ ...profile, mobile: e.target.value })} />

  <label>Department:</label>
  <input type="text" value={profile.department} onChange={(e) => setProfile({ ...profile, department: e.target.value })} />

  <label>Designation:</label>
  <input type="text" value={profile.designation} onChange={(e) => setProfile({ ...profile, designation: e.target.value })} />

  <div className="modal-buttons">
    <button type="button" className="btn-cancel" onClick={() => setShowEdit(false)}>Cancel</button>
    <button type="submit" className="btn-save">Save</button>
  </div>
</form>


          </div>
        </div>
      )}
    </div>
  );

      case "Attendance":
        // const [search, setSearch] = useState("");
        return (
          // const [search, setSearch] = useState("");
          // <div className="feature-section">
          //   <h2><FaClock /> Attendance Record</h2>
          //   <p>✔️ Present: 22 | ❌ Absent: 2 | 🕓 Late: 1</p>
          //   <table className="attendance-table">
          //     <thead>
          //       <tr>
          //         <th>Date</th>
          //         <th>Status</th>
          //         <th>Check-In</th>
          //         <th>Check-Out</th>
          //       </tr>
          //     </thead>
          //     <tbody>

          //       <tr><td>Oct 23</td><td>Present</td><td>09:00 AM</td><td>06:00 PM</td></tr>
          //       <tr><td>Oct 22</td><td>Present</td><td>09:00 AM</td><td>06:00 PM</td></tr>
          //       <tr><td>Oct 21</td><td>Absent</td><td>-</td><td>-</td></tr>
          //       <tr><td>Oct 19</td><td>Present</td><td>09:02 AM</td><td>06:10 PM</td></tr>
          //       <tr><td>Oct 18</td><td>Present</td><td>09:02 AM</td><td>06:10 PM</td></tr>
          //       <tr><td>Oct 17</td><td>Absent</td><td>-</td><td>-</td></tr>
          //       <tr><td>Oct 16</td><td>Present</td><td>09:02 AM</td><td>06:10 PM</td></tr>
          //     </tbody>
          //   </table>
          // </div>
          <div className="feature-section">
  <h2>
    <FaClock /> Attendance Record
  </h2>
  <p>✔️ Present: 22 | ❌ Absent: 2 | 🕓 Late: 1</p>

  {/* 🔍 Search bar for filtering by date */}
  <div style={{
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#f7f9fc",
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid #d1d9e6"
  }}>
    <FaSearch style={{ color: "#1a73e8" }} />
    <input
      type="text"
      placeholder="Search by date (e.g., Oct 22)"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        border: "none",
        outline: "none",
        background: "transparent",
        flex: 1,
        fontSize: "1rem"
      }}
    />
  </div>

  <table className="attendance-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Status</th>
        <th>Check-In</th>
        <th>Check-Out</th>
      </tr>
    </thead>
    <tbody>
      {[
        { date: "Oct 23", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM" },
        { date: "Oct 22", status: "Present", checkIn: "09:00 AM", checkOut: "06:00 PM" },
        { date: "Oct 21", status: "Absent", checkIn: "-", checkOut: "-" },
        { date: "Oct 19", status: "Present", checkIn: "09:02 AM", checkOut: "06:10 PM" },
        { date: "Oct 18", status: "Present", checkIn: "09:02 AM", checkOut: "06:10 PM" },
        { date: "Oct 17", status: "Absent", checkIn: "-", checkOut: "-" },
        { date: "Oct 16", status: "Present", checkIn: "09:02 AM", checkOut: "06:10 PM" },
      ]
        .filter((record) =>
          record.date.toLowerCase().includes(search.toLowerCase())
        )
        .map((record, index) => (
          <tr key={index} className={record.status.toLowerCase()}>
            <td>{record.date}</td>
            <td>{record.status}</td>
            <td>{record.checkIn}</td>
            <td>{record.checkOut}</td>
          </tr>
        ))}
    </tbody>
  </table>
</div>

        );

//       case "Leave":
//         return (
//           <div className="feature-section">
//   <h2>
//     <FaCalendarCheck className="inline-icon" /> Apply for Leave
//   </h2>

//   {/* Leave Balance Summary */}
//   <div className="leave-balance">
//     <div className="leave-card cl">
//       <h4>Casual Leave</h4>
//       <p>3 Remaining</p>
//     </div>
//     <div className="leave-card el">
//       <h4>Earned Leave</h4>
//       <p>2 Remaining</p>
//     </div>
//     <div className="leave-card sl">
//       <h4>Sick Leave</h4>
//       <p>4 Remaining</p>
//     </div>
//   </div>

//   {/* Apply for Leave Form */}
//   <form className="feature-form">
//     <div className="form-row">
//       <label>
//         Leave Type:
//         <select>
//           <option>Casual Leave</option>
//           <option>Sick Leave</option>
//           <option>Earned Leave</option>
//           <option>Unpaid Leave</option>
//         </select>
//       </label>
//     </div>

//     <div className="form-row">
//       <label>
//         From Date:
//         <input type="date" />
//       </label>
//       <label>
//         To Date:
//         <input type="date" />
//       </label>
//     </div>

//     <div className="form-row">
//       <label>
//         Reason:
//         <textarea rows="3" placeholder="Enter your reason..." />
//       </label>
//     </div>

//     <button type="submit" className="btn-request">Submit Request</button>
//   </form>
// </div>

//         );

case "Leave":
        // const userEmail = localStorage.getItem("userEmail") || "
   

  


  return (
    <div className="feature-section">
      <h2>
        <FaCalendarCheck className="inline-icon" /> Apply for Leave
      </h2>

      {/* Leave Balance Summary */}
      <div className="leave-balance">
        <div className="leave-card cl">
          <h4>Casual Leave</h4>
          <p>3 Remaining</p>
        </div>
        <div className="leave-card el">
          <h4>Earned Leave</h4>
          <p>2 Remaining</p>
        </div>
        <div className="leave-card sl">
          <h4>Sick Leave</h4>
          <p>4 Remaining</p>
        </div>
      </div>

      {/* Apply for Leave Form */}
      <form className="feature-form" onSubmit={handleLeaveSubmit}>
        <div className="form-row">
          <label>
            Leave Type:
            <select
              value={leaveForm.leaveType}
              onChange={(e) => setLeaveForm({ ...leaveForm, leaveType: e.target.value })}
            >
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Earned Leave</option>
              <option>Unpaid Leave</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            From Date:
            <input
              type="date"
              value={leaveForm.fromDate}
              onChange={(e) => setLeaveForm({ ...leaveForm, fromDate: e.target.value })}
            />
          </label>
          <label>
            To Date:
            <input
              type="date"
              value={leaveForm.toDate}
              onChange={(e) => setLeaveForm({ ...leaveForm, toDate: e.target.value })}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Reason:
            <textarea
              rows="3"
              value={leaveForm.reason}
              placeholder="Enter your reason..."
              onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
            />
          </label>
        </div>

        <button type="submit" className="btn-request">Submit Request</button>
      </form>
    </div>
  );



      case "Payroll":
        return (
          <div className="feature-section">
            <h2><FaMoneyBill /> Payroll Details</h2>
            <ul>
              <li>📅 Month : November</li>
              <li>🏦 Bank: HDFC Bank — ****1234</li>
              <li>💰 Total Salary: ₹60,000 / month</li>
              <li>💰 PF : 3500</li>
              <li>💰Received : 56500</li>
              <li>📅 Last Paid: Oct 25, 2025</li>
            </ul>
            <button className="Payslip-dwn">Download Payslip</button>
          </div>
        );

      case "Task":
        return (
          <div className="feature-section-task">
  <h2><FaTasks /> My Tasks</h2>

  {[
    {
      title: "Assigned Task :",
      icon: <FaTasks />,
      value: "UI/UX Design",
      // detail: "Deadline: 30 Nov 2025",
    },
    {
      title: "Task Description:",
      icon: <FaTasks />,
      value: "Dashboard UI",
      
    },
    {
      title: "Status :",
      icon: <FaTasks />,
      value: "In Progress (50% completed)",
      // detail: "50% Completed",
    },
    {
      title: "Deadline :",
      icon: <FaTasks />,
      value: "Nov 30 2025",
      // detail: " Nov 30 2025",
    },
  ].map((task, index) => (
    <div key={index} className="card card-task">
      <div className="card-header">
        <h4>{task.title}</h4>
        {task.icon}
      </div>
      <p className="card-value">{task.value}</p>
      <p>{task.detail}</p>
    </div>
  ))}
</div>



);

      case "Settings":
        return (
          <div className="feature-section-Task">
  <h2><FaCog /> Account Settings</h2>

  {[
    {
      title: "Change Password",
      icon: <FaKey />,
      description: "Update your password regularly to keep your account secure.",
    },
    {
      title: "Update Email",
      icon: <FaEnvelope />,
      description: "Modify your email address linked to this account.",
    },
    {
      title: "Notification Preferences",
      icon: <FaBell />,
      description: "Manage how and when you receive notifications.",
    },
  ].map((setting, index) => (
    <div key={index} className="card card-task">
      <div className="card-header">
        <h4>{setting.title}</h4>
        {setting.icon}
      </div>
      <p className="card-value">{setting.description}</p>
    </div>
  ))}
</div>

        );

      case "Logout":
        return (
          // <div className="feature-section logout-msg">
          //   <FaSignOutAlt size={40} color="#b00" />
          //   <h2>You have been logged out successfully.</h2>
          // </div>
          
          
//           <div className="feature-section logout-confirmation">
//   <FaSignOutAlt className="logout-icon" size={45} color="#b00" />
//   <h2>Do you want to log out?</h2>
//   <div className="logout-buttons">
//     <button className="logout-btn yes-btn">Yes</button>
//     <button className="logout-btn no-btn">No</button>
//   </div>
// </div>
<div className="feature-section logout-confirmation">
  <FaSignOutAlt className="logout-icon" size={45} color="#b00" />
  <h2>Do you want to log out?</h2>

  <div className="logout-buttons">
    <button className="logout-btn yes-btn" onClick={handleLogoutYes}>
      Yes
    </button>
    <button className="logout-btn no-btn" onClick={handleLogoutNo}>
      No
    </button>
  </div>
</div>


        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">ManageMate</h2>

        {[
          ["Dashboard", <FaTachometerAlt />],
          ["Profile", <FaUser />],
          ["Attendance", <FaCalendarCheck />],
          ["Leave", <FaClipboardList />],
          ["Payroll", <FaMoneyBill />],
          ["Task", <FaTasks />],
          ["Settings", <FaCog />],
        ].map(([label, icon]) => (
          <SidebarItem
            key={label}
            icon={icon}
            label={label}
            active={activeTab === label}
            onClick={() => setActiveTab(label)}
          />
        ))}

        <div className="logout-section">
          <SidebarItem
            icon={<FaSignOutAlt />}
            label="Logout"
            active={activeTab === "Logout"}
            onClick={() => setActiveTab("Logout")}
          />
        </div>
      </aside>

      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default Edashboard;
