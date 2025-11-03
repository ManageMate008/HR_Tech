// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';               // ✅ keep global styles
// import HomePage from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Edashboard from './components/Edashboard';
// import Hdashboard from './components/Hdashboard';
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />    { /*Default Home*/ }
//         <Route path="/login" element={<Login />} />   {/*Login Page *}  */}
//         <Route path="/signup" element={<SignUp />} />   {/*Signup Page */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/hr-dashboard" element={<HRDashboard />} />
//         <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
//       </Routes>
//       </Router>
      

//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   );


// export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Edashboard from './components/Edashboard';  // ✅ Correct Import
import Hdashboard from './components/Hdashboard';  // ✅ Correct Import

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ✅ Correct Dashboard Routes */}
        <Route path="/employee-dashboard" element={<Edashboard />} />
        <Route path="/hr-dashboard" element={<Hdashboard />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
