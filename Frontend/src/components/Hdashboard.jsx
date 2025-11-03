import React, { useState } from "react";
// import "./HRDashboard.css";
import "./Hdashboard.css"
import { Modal } from "antd";
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaUser,
  FaClipboardList,
  FaMoneyBill,
  FaTasks,
  FaFileAlt,
  FaBolt,
  FaSignOutAlt,
  FaSearch,
  FaUsers,
  FaRegCalendarAlt,
  FaClock,
  FaEnvelope,
  FaCalendar,
  FaBirthdayCake,
} from "react-icons/fa";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick}>
    <div className="sidebar-icon">{icon}</div>
    <span>{label}</span>
  </div>
);

const Hdashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [holidayOpen, setHolidayOpen] = useState(false);

  // ==================== CONTENT RENDERING ====================
  const renderContent = () => {
    switch (activeTab) {
      // ==================== DASHBOARD ====================
      case "Dashboard":
        return (
          <div className="feature-section">
            <h2><FaTachometerAlt /> HR Dashboard Overview</h2>
            <div className="stats-grid">
              <div className="card">
                <h4><FaUsers /> Total Employees</h4>
                <p className="card-value">250</p>
                <small>+5 joined this month</small>
              </div>

              <div className="card">
                <h4><FaUsers /> Attendance</h4>
                <p className="card-value">Present : 228</p>
                {/* <p>Present : 228</p> */}
                <p><small>Leave : 22</small></p>
              </div>

              <div className="card">
                <h4><FaRegCalendarAlt /> Departments</h4>
                <p className="card-value">8</p>
                <small>New Dept: Design</small>
              </div>

              <div className="card">
                <h4><FaCalendarCheck /> Attendance Rate</h4>
                <p className="card-value">91.2%</p>
              </div>

              <div className="card">
                <h4><FaCalendarCheck /> Task Pending</h4>
                <p className="card-value"> 3/7 </p>
                <p><small>Department : Frontend</small></p>
                <p><small>Department : Ui/Ux Design</small></p>
                <p><small>Department : Frontend</small></p>
              </div>

              <div className="card">
                <h4><FaMoneyBill /> Payroll Processed</h4>
                <p className="card-value">₹15,00,000</p>
              </div>

              <div className="card">
                <h4><FaBirthdayCake /> Upcoming Birthdays</h4>
                <p className="card-value"><small>Amiya Nayak - Oct 30</small></p>
                <p className="card-value"><small>Anurag Sahu - Nov  4</small></p>
                <p className="card-value"><small>Anita Pradhan - Nov 8</small> </p>
                <p className="card-value"><small>Arpit Routray - Nov 18</small></p>
              </div>

              {/* <div className="card">
                <h4><FaCalendar /> Holiday</h4>
                <p className="card-value"><small>Diwali-Oct 21,2025</small></p>
                <p className="card-value"><small>Christmas- Dec 25,2025</small></p>
                <p className="card-value"><small>New Year Eve- Dec 31,2025</small> </p>
                <p className="card-value"><small>New Year - Jan 1,2026</small></p>
              </div> */}
              <div
                className="card"
                onClick={() => setHolidayOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <h4><FaCalendar /> Holiday</h4>
                <p className="card-value"><small>Diwali - Oct 21, 2025</small></p>
                <p className="card-value"><small>Christmas - Dec 25, 2025</small></p>
                <p className="card-value"><small>New Year Eve - Dec 31, 2025</small></p>
                <p className="card-value"><small>New Year - Jan 1, 2026</small></p>
              </div>

              {/* ✅ Holiday Modal */}
              <Modal
                title="Holiday List"
                open={holidayOpen}
                onCancel={() => setHolidayOpen(false)}
                footer={null}
              >
                <ul style={{ lineHeight: "1.9", fontSize: "15px" }}>
                  <li><b>Diwali</b> - Oct 21, 2025</li>
                  <li><b>Christmas</b> - Dec 25, 2025</li>
                  <li><b>New Year Eve</b> - Dec 31, 2025</li>
                  <li><b>New Year</b> - Jan 1, 2026</li>
                  <li><b>Republic Day</b> - Jan 26, 2026</li>
                  <li><b>Holi</b> - March 21, 2026</li>
                  <li><b>Good Friday</b> - April 3, 2026</li>
                  <li><b>Eid-ul-Fitr</b> - April 10, 2026</li>
                  <li><b>Raksha Bandhan</b> - Aug 28, 2026</li>
                  <li><b>Independence Day</b> - Aug 15, 2026</li>
                  {/* <li><b>Ganesh Chaturthi</b> - Sept 18, 2026</li> */}
                  <li><b>Gandhi Jayanti</b> - Oct 2, 2026</li>
                  <li><b>Dussehra</b> - Oct 20, 2026</li>


                </ul>
              </Modal>

            </div>
          </div>
        );

      // ==================== LEAVE MANAGEMENT ====================
      case "Leave Management":
        return (
          <div className="feature-section">
            <h2><FaCalendarCheck /> Leave Management</h2>
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Type</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Anita Pradhan", type: "Casual", from: "Oct 25", to: "Oct 26", status: "Pending" },
                  { name: "Amiya Nayak", type: "Sick", from: "Oct 22", to: "Oct 23", status: "Approved" },
                  { name: "Naveen Swain", type: "Earned", from: "Oct 28", to: "Oct 29", status: "Pending" },
                  { name: "Puja Sahoo", type: "Unpaid", from: "Oct 28", to: "Oct 31", status: "Pending" },
                  { name: "Pikul Mohanty", type: "Earned", from: "Oct 28", to: "Oct 29", status: "Pending" },
                  { name: "Ankita Nayak", type: "Sick", from: "Oct 28", to: "Oct 29", status: "Approved" },
                  { name: "Anurag Sahoo", type: "Earned", from: "Oct 28", to: "Oct 29", status: "Pending" },
                ].map((req, i) => (
                  <tr key={i}>
                    <td>{req.name}</td>
                    <td>{req.type}</td>
                    <td>{req.from}</td>
                    <td>{req.to}</td>
                    <td>{req.status}</td>
                    <td>
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Reject</button>
                      <button className="pending-btn">Pending</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      // ==================== ATTENDANCE ====================
      case "Attendance":
        return (
          <div className="feature-section">
            <h2><FaClock /> Attendance Summary</h2>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by employee name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Check-In</th>
                  <th>Check-Out</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Rahul Das", date: "Oct 25", status: "Present", in: "09:02 AM", out: "06:05 PM" },
                  { name: "Swati Verma", date: "Oct 25", status: "Absent", in: "-", out: "-" },
                  { name: "Anita Pradhan", date: "Oct 25", status: "Present", in: "09:00 AM", out: "06:00 PM" },
                  { name: "Puja Sahu", date: "Oct 25", status: "Present", in: "10:00 AM", out: "06:30 PM" },
                  { name: "Anurag Sahu", date: "Oct 25", status: "Absent", in: "-", out: "-" },
                  { name: "Ankita Nayak", date: "Oct 25", status: "Absent", in: "-", out: "-" },
                  { name: "Amiya Nayak", date: "Oct 25", status: "Present", in: "09:30 AM", out: "07:30 PM" },
                ]
                  .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
                  .map((r, i) => (
                    <tr key={i}>
                      <td>{r.name}</td>
                      <td>{r.date}</td>
                      <td>{r.status}</td>
                      <td>{r.in}</td>
                      <td>{r.out}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        );

      // ==================== PAYROLL ====================
      case "Payroll Status":
        return (
          <div className="feature-section">
            <h2><FaMoneyBill /> Payroll Overview</h2>
            <ul>
              <li>💰 Total Salary Disbursed: ₹15,00,000</li>
              <li>👥 Employees Paid: 248 / 250</li>
              <li>📅 Last Disbursal: Oct 25, 2025</li>
            </ul>
            <button className="btn-request">Download Payroll Report</button>
          </div>
        );

      // ==================== TASK ASSIGN ====================
      case "Task Assign":
        return (
          <div className="feature-section">
            <h2><FaTasks /> Assign Tasks</h2>
            <form className="feature-form">
              <div className="form-row">
                <label>
                  Employee Name:
                  <input type="text" placeholder="Enter employee name" />
                </label>
              </div>
              
              <div className="form-row">
                <label>
                  Department:
                  <input type="text" placeholder="Enter department" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Task Title:
                  <input type="text" placeholder="Enter task title" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Deadline:
                  <input type="date" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Description:
                  <textarea rows="3" placeholder="Task details..." />
                </label>
              </div>
              <button className="btn-request">Assign Task</button>
            </form>
          </div>
        );

      // ==================== REPORTS ====================
      case "Report":
        return (
          <div className="feature-section">
            <h2><FaFileAlt /> HR Reports</h2>
            <ul>
              <li>📊 Attendance Report — October 2025</li>
              <li>💰 Payroll Report — October 2025</li>
              <li>📈 Performance Report — Q3 2025</li>
            </ul>
            <button className="btn-request">Generate New Report</button>
          </div>
        );

      // ==================== QUICK ACTIONS ====================
      case "Quick Action":
        return (
          <div className="feature-section">
            <h2><FaBolt /> Quick Actions</h2>
            <div className="quick-actions">
              <button className="quick-btn">➕ Add Employee</button>
              <button className="quick-btn">📧 Send Notice</button>
              <button className="quick-btn">📅 Schedule Meeting</button>
            </div>
          </div>
        );

      // ==================== LOGOUT ====================
      case "Logout":
        return (
          <div className="feature-section logout-confirmation">
            <FaSignOutAlt className="logout-icon" size={45} color="#b00" />
            <h2>Do you want to log out?</h2>
            <div className="logout-buttons">
              <button className="logout-btn yes-btn">Yes</button>
              <button className="logout-btn no-btn">No</button>
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
        <h2 className="logo">ManageMate </h2>

        {[
          ["Dashboard", <FaTachometerAlt />],
          ["Leave Management", <FaCalendarCheck />],
          ["Attendance", <FaClipboardList />],
          ["Payroll Status", <FaMoneyBill />],
          ["Task Assign", <FaTasks />],
          ["Report", <FaFileAlt />],
          ["Quick Action", <FaBolt />],
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

export default Hdashboard;
