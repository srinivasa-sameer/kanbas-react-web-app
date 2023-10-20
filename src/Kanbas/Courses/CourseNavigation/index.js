import { Link, useParams, useLocation } from 'react-router-dom';
import styles from './index.module.css';

const CourseNavigation = () => {
  const links = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom Meetings',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
    'Panopto Video',
    'Discussion',
    'Announcements',
    'Pages',
    'Files',
    'Rubrics',
    'Outcomes',
    'Collaborations',
    'Syllabus',
    'Settings',
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      <ul className={`d-none d-md-block ${styles.wd_course_navigation}`}>
        {links.map((link, index) => (
          <li className={`${pathname.includes(link) && styles.active}`}>
            <Link key={index} to={`/Kanbas/Courses/${courseId}/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseNavigation;
