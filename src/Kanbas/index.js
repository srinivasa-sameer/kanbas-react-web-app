import KanbasNavigation from './KanbasNavigation';
import Dashboard from './Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Account/Profile';
import Calendar from './Calendar';
import Commons from './Commons';
import Help from './Help';
import History from './History';
import Inbox from './Inbox';
import Studio from './Studio';
import CoursesHome from './Courses/CoursesHome';
import CoursesModules from './Courses/CoursesModules';
import CoursesAssignments from './Courses/CoursesAssignments';
import CourseAssignmentEditor from './Courses/CoursesAssignments/CourseAssignmentEditor';

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Profile />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<CoursesHome />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="Commons" element={<Commons />} />
          <Route path="Courses/" element={<CoursesHome />} />
          <Route path="Courses/Modules" element={<CoursesModules />} />
          <Route path="Courses/Assignments" element={<CoursesAssignments />} />
          <Route
            path="Courses/Assignments/AssignmentEditor"
            element={<CourseAssignmentEditor />}
          />
          <Route path="Help" element={<Help />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="History" element={<History />} />
          <Route path="Inbox" element={<Inbox />} />
          <Route path="Studio" element={<Studio />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
