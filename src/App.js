import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import KanbasNavigation from './Kanbas/KanbasNavigation';
import Profile from './Kanbas/Account/Profile';
import Calendar from './Kanbas/Calendar';
import Commons from './Kanbas/Commons';
import Help from './Kanbas/Help';
import Dashboard from './Kanbas/Dashboard';
import History from './Kanbas/History';
import Inbox from './Kanbas/Inbox';
import Studio from './Kanbas/Studio';
import CoursesHome from './Kanbas/Courses/CoursesHome';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/KanbasNavigation/*" element={<KanbasNavigation />} />
          <Route path="Kanbas/Account/*" element={<Profile />} />
          <Route path="Kanbas/Calendar" element={<Calendar />} />
          <Route path="Kanbas/Commons" element={<Commons />} />
          <Route path="Kanbas/Courses/" element={<CoursesHome />} />
          <Route path="Kanbas/Help" element={<Help />} />
          <Route path="Kanbas/Dashboard" element={<Dashboard />} />
          <Route path="Kanbas/History" element={<History />} />
          <Route path="Kanbas/Inbox" element={<Inbox />} />
          <Route path="Kanbas/Studio" element={<Studio />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
