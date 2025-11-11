// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
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
  FaKey,FaUserCircle,
  FaCaretDown,
} from "react-icons/fa";


import { Card } from "antd";
import axios from "axios";


const userName = localStorage.getItem("userName") || "Employee";
<<<<<<< HEAD
// const employeeEmail = localStorage.getItem("userEmail") || "";
=======
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c

// const [search, setSearch] = useState("");

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick}>
    <div className="sidebar-icon">{icon}</div>
    <span>{label}</span>
  </div>
);

 
<<<<<<< HEAD
// const userEmail = localStorage.getItem("userEmail") || "";
const userEmail = localStorage.getItem("userEmail");


=======
const userEmail = localStorage.getItem("userEmail") || "";
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c




const Edashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [search, setSearch] = useState("");
   const navigate = useNavigate();
<<<<<<< HEAD
   const [showHolidayPopup, setShowHolidayPopup] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [showPayrollModal, setShowPayrollModal] = useState(false);
  const [tasks,setTasks] = useState([])
  // const [refresh, setRefresh] = useState(false);


                                                                  
  const [profile, setProfile] = useState({
  name: userEmail.empty ? "Employee" : userName,
  Eid : "34001",
  email: userEmail,
  mobile: "N/A",
  dateOfBirth: "N/A",
  department: "N/A",
  designation: "N/A",
  dateOfJoining : "N/A",
 });

 

 useEffect(() => {
  const updateClock = () => {
    const now = new Date();

    document.getElementById("clock-day").innerText =now.toLocaleDateString("en-IN", { weekday: "long" });

    document.getElementById("clock-date").innerText =now.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

    document.getElementById("clock-time").innerText =
      now.toLocaleTimeString("en-IN", { hour12: true });
  };

  updateClock(); // immediate call
  const timer = setInterval(updateClock, 1000);
  return () => clearInterval(timer);
}, []);


=======
  const [showEdit, setShowEdit] = useState(false);
  const [profile, setProfile] = useState({
  name: "",
  email: "",
  mobile: "",
  department: "N/A",
  designation: "N/A",
  // DateOfJoining : "23.03.2025"
 });

>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
 const handleLogoutYes = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // Redirects to HomePage
  };

  const handleLogoutNo = () => {
    setActiveTab("Dashboard");
  }
<<<<<<< HEAD

  const handlePasswordChange = async () => {
  const currentPassword = document.querySelector('input[placeholder="Current Password"]').value;
  const newPassword = document.querySelector('input[placeholder="New Password"]').value;

  const email = localStorage.getItem("userEmail"); // stored at login

  const res = await fetch("http://localhost:5000/api/settings/change-password", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, currentPassword, newPassword })
  });

  const data = await res.json();
  alert(data.message);
  setActiveModal(null);
};

const handleEmailUpdate = async () => {
  const newEmail = document.querySelector('input[placeholder="Enter New Email"]').value;
  const oldEmail = localStorage.getItem("email");

  const res = await fetch("http://localhost:5000/api/settings/update-email", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ oldEmail, newEmail })
  });

  const data = await res.json();
  alert(data.message);

  // Update stored email
  localStorage.setItem("userEmail", newEmail);
  setActiveModal(null);
};

const [leaveForm, setLeaveForm] = useState({
    // userEmail: userEmail,
=======
const [leaveForm, setLeaveForm] = useState({
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });
  const handleLeaveSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/leave/apply", {
<<<<<<< HEAD
        // employeeEmail: userEmail,
        // ...leaveForm,
        // userEmail: leaveForm.userEmail , 
        leaveType: leaveForm.leaveType,
        fromDate: leaveForm.fromDate,
        toDate: leaveForm.toDate,
        reason: leaveForm.reason,

      });
      alert("✅ Leave request submitted!");
      setLeaveForm({
        // employeeEmail: "",
=======
        employeeEmail: userEmail,
        ...leaveForm,
      });
      alert("✅ Leave request submitted!");
      setLeaveForm({
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
        leaveType: "",
        fromDate: "",
        toDate: "",
        reason: "",
      });
    } catch (err) {
<<<<<<< HEAD
      console.log("Error",err);
      console.error("Leave Submit error",err.response?.data || err.message);
      

      alert("❌ Failed to submit leave request. Please try again.");
      // alert(" Failed.... Please try again.");
    }
  };

  useEffect(()=>{
  
    fetch(`http://localhost:5000/api/task/my-tasks/${userEmail}`)
    .then(res => res.json())
    .then(data => setTasks(data));
},[]);
=======
      console.error("Leave Submit error",err.response?.data || err.message);
      

      alert("❌ Failed to submit leave");
    }
  };
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c

  // --- SECTION RENDERER ---
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <>
<<<<<<< HEAD
            {/* <h2>Employee Dashboard Overview</h2> */}
            {/* <h3 style={{marginTop: "-10px", color: "#555"}}>Welcome, {userName} 👋</h3> */}
            <nav>
            <div className="welcome">
            {/* <h3 style={{ color: "#0D5EA6" }}>Welcome, {userName}</h3> */}
            <h3 style={{ color: "black"}}>Welcome, {userName}</h3>

                <div className="time-display">
                <span id="clock-day"></span>,
                <span id="clock-date"></span>,
               <br />
                <span id="clock-time"></span>
  </div>
          </div>
            </nav>
=======
            <h2>Employee Dashboard Overview</h2>
            <h3 style={{marginTop: "-10px", color: "#555"}}>Welcome, {userName} 👋</h3>

>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c

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

              {/* <div className="card">
                <div className="card-header">
                  <h4>Current Task</h4>
                  <FaTasks className="card-icon" />
                </div>
                <p className="card-value">UI/UX Design</p>
                <p>Deadline : 04 Nov 2025</p>
              </div> */}

                      <div className="card">
                        <div className="card-header">
                        <h4>Current Task</h4>
                        <FaTasks className="card-icon" />
                        </div>

                     {tasks.length > 0 ? (
                     <>
                     <p className="card-value">{tasks[0].taskTitle}</p>
                     <p>Deadline: {tasks[0].deadline}</p>
                     </>
                     ) : (
                    <p>No task assigned yet</p>
                    )}
               </div>

              {/* <div className="card">
                <div className="card-header">
                  <h4>Holidays</h4>
                  <FaCalendarAlt className="card-icon" />
                </div>
                <p>Diwali - 26 Nov 2025</p>
                <p>Christmas - 25 Dec 2025</p>
                <p>Holi - 21 Mar 2025</p>
              </div> */}

              <div className="card" onClick={() => setShowHolidayPopup(true)}>
  <div className="card-header">
    <h4>Holidays</h4>
    <FaCalendarAlt className="card-icon" />
  </div>
  <p>Diwali - 26 Nov 2025</p>
  <p>Christmas - 25 Dec 2025</p>
  <p>Holi - 21 Mar 2025</p>
</div>

{/* Dialogue Box */}
{showHolidayPopup && (
  <div className="holiday-popup-overlay">
    <div className="holiday-popup">
      <h3>Upcoming Holidays</h3>
      <ul>
        <li>Diwali - 26 Nov 2025</li>
        <li>Christmas - 25 Dec 2025</li>
        <li>Holi - 21 Mar 2025</li>
        <li>Holi - 21 Mar 2025</li>
        <li>Holi - 21 Mar 2025</li>
        <li>Holi - 21 Mar 2025</li>
        <li>Holi - 21 Mar 2025</li>
        <li>Holi - 21 Mar 2025</li>
        <li>Holi - 21 Mar 2025</li>
      </ul>
      <button onClick={() => setShowHolidayPopup(false)}>Close</button>
    </div>
  </div>
)}

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
              {/* <div className="card">
                <h4 className="card-title">
                  <FaSearch className="inline-icon" /> Quick Search
                </h4>
                <div className="search-box">
                  <FaSearch className="search-icon" />
                  <input type="text" placeholder="Search employee, task, or ID..." />
                </div>
              </div> */}

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
<<<<<<< HEAD
      {/* <h2><FaIdBadge /> Employee Profile</h2> */}
=======
      <h2><FaIdBadge /> Employee Profile</h2>
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c

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
<<<<<<< HEAD
    <h2> Employee Profile</h2>
    <h3 className="profile-name">Employee Name :{userName}</h3>
    
    <p><strong>EID:</strong> 34001</p>
    {/* <p><strong>Email:</strong> {profile.email}</p> */}
    <p><strong>Email:</strong> {profile.email}</p>
    <p><strong>Mobile:</strong> {profile.mobile}</p>
    <p><strong>D.O.B:</strong> {profile.dateOfBirth}</p>
    <p><strong>Department:</strong> {profile.department}</p>
    <p><strong>Designation:</strong> {profile.designation}</p>
    <p><strong>Date of Joining:</strong>{profile.dateOfJoining}</p>
=======
    <h3 className="profile-name">Employee Name :{userName}</h3>
    <p><strong>Role:</strong> {profile.role}</p>
    <p><strong>EID:</strong> 34001</p>
    <p><strong>Email:</strong> {profile.email}</p>
    <p><strong>Mobile:</strong> {profile.mobile}</p>
    <p><strong>Department:</strong> {profile.department}</p>
    <p><strong>Designation:</strong> {profile.designation}</p>
    <p><strong>Date of Joining:</strong> 17.05.2004</p>
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c

    <button className="btn-edit" onClick={() => setShowEdit(true)}>
      Edit Profile
    </button>
  </div>
</div>


      
      {showEdit && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>Edit Employee Profile</h3>

<<<<<<< HEAD
            
=======
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
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
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

<<<<<<< HEAD
  <label>Date of Birth:</label> 
  <input type="date" value={profile.dateOfBirth} onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })} />

=======
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
  <label>Department:</label>
  <input type="text" value={profile.department} onChange={(e) => setProfile({ ...profile, department: e.target.value })} />

  <label>Designation:</label>
  <input type="text" value={profile.designation} onChange={(e) => setProfile({ ...profile, designation: e.target.value })} />
<<<<<<< HEAD
  
  <label>Date of Joining:</label>
  <input type="date" value={profile.dateOfJoining} onChange={(e) => setProfile({ ...profile, dateOfJoining: e.target.value })} />
=======
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c

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
<<<<<<< HEAD

        {/* <div className="form-row">
        <label>
            Employee Email:
            <input type="text" placeholder="Enter Your Email" value={userEmail} />
        </label>
        </div> */}

=======
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
        <div className="form-row">
          <label>
            Leave Type:
            <select
              value={leaveForm.leaveType}
              onChange={(e) => setLeaveForm({ ...leaveForm, leaveType: e.target.value })}
            >
<<<<<<< HEAD
              
              <option>-- Select Leave Type --</option>
              {/* <option>Casual Leave</option> */}
=======
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
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

<<<<<<< HEAD
        <button type="submit" className="btn-request">Submit</button>
=======
        <button type="submit" className="btn-request">Submit Request</button>
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
      </form>
    </div>
  );



      case "Payroll":
        return (
<<<<<<< HEAD
          // <div className="feature-section">
          //   <h2><FaMoneyBill /> Payroll Details</h2>
          //   <ul>
          //     <li>📅 Month : November</li>
          //     <li>🏦 Bank: HDFC Bank — ****1234</li>
          //     <li>💰 Total Salary: ₹60,000 / month</li>
          //     <li>💰 PF : 3500</li>
          //     <li>💰Received : 56500</li>
          //     <li>📅 Last Paid: Oct 25, 2025</li>
          //   </ul>
          //   <button className="Payslip-dwn">Download Payslip</button>
          // </div>
//           <div className="payroll-section">
//   <h2><FaMoneyBill className="icon" /> Payroll Details</h2>
//   <div className="payroll-details">
//     <div className="payroll-row">
//       <span>Basic Salary</span>
//       <span>30,000</span>
//     </div>
//     <div className="payroll-row">
//       <span>HRA</span>
//       <span>7,000</span>
//     </div>
//     <div className="payroll-row">
//       <span>PF Deduction</span>
//       <span>2200</span>
//     </div>
//     <div className="payroll-row total-salary">
//          <strong>Total Salary</strong>
//          <strong>₹34,800</strong>  
//     </div>
//   </div>

//   <button className="payslip-btn">View More</button>
// </div> 
      <div className="payroll-section">
  <h2><FaMoneyBill className="icon" /> Payroll Details</h2>

  <div className="payroll-details">
    <div className="payroll-row">
      <span>Basic Salary</span>
      <span>30,000</span>
    </div>

    <div className="payroll-row">
      <span>HRA</span>
      <span>7,000</span>
    </div>

    <div className="payroll-row">
      <span>PF Deduction</span>
      <span>2200</span>
    </div>

    <div className="payroll-row total-salary">
      <strong>Total Salary</strong>
      <strong>₹34,800</strong>  
    </div>
  </div>

  <button className="payslip-btn" onClick={() => setShowPayrollModal(true)}>View More</button>


  {/* Modal */}
  {showPayrollModal && (
    <div className="payroll-modal-overlay">
      <div className="payroll-modal">
        <h3>Payslip Details</h3>

        <div className="modal-field">
          <label>Month</label>
          <input type="text" placeholder="e.g. November 2025" />
        </div>

        <div className="modal-field">
          <label>Bank Name</label>
          <input type="text" placeholder="Bank Name" />
        </div>

        <div className="modal-field">
          <label>Account Number</label>
          <input type="text" placeholder="XXXX-XXXX-XXXX" />
        </div>

        <div className="modal-field">
          <label>Total Salary</label>
          <input type="text" placeholder="₹34,800" />
        </div>

        <div className="modal-field">
          <label>Deductions</label>
          <input type="text" placeholder="₹2,200" />
        </div>

        <div className="modal-field">
          <label>Credited Amount</label>
          <input type="text" placeholder="₹32,600" />
        </div>

        <div className="modal-field">
          <label>Last Credited Date</label>
          <input type="date" />
        </div>

        <button className="download-btn">Download Payslip</button>
        <button className="close-btn" onClick={() => setShowPayrollModal(false)}>Close</button>
      </div>
    </div>
  )}
</div>
=======
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
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
        );

      case "Task":
        return (
//           <div className="feature-section-task">
//   <h2><FaTasks /> My Tasks</h2>

//   {[
//     {
//       title: "Assigned Task :",
//       icon: <FaTasks />,
//       value: "UI/UX Design",
//       // detail: "Deadline: 30 Nov 2025",
//     },
//     {
//       title: "Task Description:",
//       icon: <FaTasks />,
//       value: "Dashboard UI",
      
//     },
//     {
//       title: "Status :",
//       icon: <FaTasks />,
//       value: "In Progress (50% completed)",
//       // detail: "50% Completed",
//     },
//     {
//       title: "Deadline :",
//       icon: <FaTasks />,
//       value: "Nov 30 2025",
//       // detail: " Nov 30 2025",
//     },
//   ].map((task, index) => (
//     <div key={index} className="card card-task">
//       <div className="card-header">
//         <h4>{task.title}</h4>
//         {task.icon}
//       </div>
//       <p className="card-value">{task.value}</p>
//       <p>{task.detail}</p>
//     </div>
//   ))}
// </div>
<div className="feature-section-task">
  <h2><FaTasks /> My Tasks</h2>

<<<<<<< HEAD
  <div className="task-cards">   {/* ✅ Add this wrapper */}
    {[
      {
        title: "Assigned Task :",
        icon: <FaTasks />,
        value: "UI/UX Design",
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
      },
      {
        title: "Deadline :",
        icon: <FaTasks />,
        value: "Nov 30 2025",
      },
    ].map((task, index) => (
      <div key={index} className="card card-task">
        <div className="card-header">
          <h4>{task.title}</h4>
          {task.icon}
        </div>
        <p className="card-value">{task.value}</p>
        <p><b>Status:</b> {task.status}</p>
        <p><b>Deadline:</b> {task.deadline}</p>

=======
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
>>>>>>> def28a3034d7a883d7d31d794dd27dc8628c6c6c
      </div>
    ))}
  </div>
</div>



);

      case "Settings":
        return (
  <div className="feature-section-Task">
    <h2><FaCog /> Account Settings</h2>

    {[
      {
        id: "password",
        title: "Change Password",
        icon: <FaKey />,
        description: "Update your password regularly to keep your account secure.",
      },
      {
        id: "email",
        title: "Update Email",
        icon: <FaEnvelope />,
        description: "Modify your email address linked to this account.",
      },
      {
        id: "notify",
        title: "Notification Preferences",
        icon: <FaBell />,
        description: "Manage how and when you receive notifications.",
      },
    ].map((setting, index) => (
      <div key={index} className="card card-task" onClick={() => setActiveModal(setting.id)}>
        <div className="card-header">
          <h4>{setting.title}</h4>
          {setting.icon}
        </div>
        <p className="card-value">{setting.description}</p>
      </div>
    ))}

    {/* Change Password Modal */}
    {activeModal === "password" && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>Change Password</h3>
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />

          <div className="modal-buttons">
            <button className="save" onClick={handlePasswordChange}>Save</button>
            <button className="close" onClick={() => setActiveModal(null)}>Close</button>
          </div>
        </div>
      </div>
    )}

    {/* Update Email Modal */}
    {activeModal === "email" && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>Update Email</h3>
          <input type="email" placeholder="Enter New Email" />

          <div className="modal-buttons">
            <button className="save" onClick={handleEmailUpdate}>Update</button>
            <button className="close" onClick={() => setActiveModal(null)}>Close</button>
          </div>
        </div>
      </div>
    )}

    {/* Notification Preferences Modal */}
    {activeModal === "notify" && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>Notification Preferences</h3>
          <label><input type="checkbox" /> Email Notifications</label>
          <label><input type="checkbox" /> SMS Notifications</label>
          <label><input type="checkbox" /> Push Notifications</label>

          <div className="modal-buttons">
            <button className="save">Save</button>
            <button className="close" onClick={() => setActiveModal(null)}>Close</button>
          </div>
        </div>
      </div>
    )}
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
