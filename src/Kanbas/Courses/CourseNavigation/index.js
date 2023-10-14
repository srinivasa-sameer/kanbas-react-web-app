import { Link, useParams, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const CourseNavigation = () => {
  const links = ['Home', 'Modules', 'Assignments', 'Grades'];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      <ul className={`d-none d-md-block ${styles.wd_course_navigation}`}>
        <li className="wd_active">
          <Link to="/Kanbas/Courses">Home</Link>
        </li>
        <li>
          <Link to="/Kanbas/Courses/Modules">Modules</Link>
        </li>
        <li>
          <a href="#">Piazza</a>
        </li>
        <li>
          <a href="#">Zoom Meetings</a>
        </li>
        <li>
          <Link to="/Kanbas/Courses/Assignments">Assignments</Link>
        </li>
        <li>
          <a href="#">Quizzes</a>
        </li>
        <li>
          <Link to="/Kanbas/Courses/Grades">Grades</Link>
        </li>
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Panopto Video</a>
        </li>
        <li>
          <a href="#">Discussions</a>
        </li>
        <li>
          <a href="#">Announcements</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Files</a>
        </li>
        <li>
          <a href="#">Rubrics</a>
        </li>
        <li>
          <a href="#">Outcomes</a>
        </li>
        <li>
          <a href="#">Collaborations</a>
        </li>
        <li>
          <a href="#">Syllabus</a>
        </li>
        <li>
          <Link to="/Kanbas/Courses/Settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default CourseNavigation;
