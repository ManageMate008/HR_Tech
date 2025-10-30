import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';               // ✅ keep global styles
import HomePage from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Edashboard from './components/Edashboard';
import Hdashboard from './components/Hdashboard';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />    { /*Default Home*/ }
        <Route path="/login" element={<Login />} />   {/*Login Page *}  */}
        <Route path="/signup" element={<SignUp />} />   {/*Signup Page */}
        {/* <Route path="/login" element={<Edashboard />} />   
        <Route path="/login" element={<Hdashboard />} />    */}
        {/* <div><Edashboard /></div>
        <div><Hdashboard /></div> */}
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
