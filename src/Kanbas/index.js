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
import Courses from './Courses';
import { useEffect, useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import axios from 'axios';

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = 'http://localhost:4000/api/courses';
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({
      name: '',
      number: '',
      description: '',
      startDate: '',
      endDate: '',
      image: '',
    });
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: '',
    number: '',
    description: '',
    startDate: '',
    endDate: '',
    image: '',
  });

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Profile />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="Commons" element={<Commons />} />
            <Route path="Help" element={<Help />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="History" element={<History />} />
            <Route path="Inbox" element={<Inbox />} />
            <Route path="Studio" element={<Studio />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
