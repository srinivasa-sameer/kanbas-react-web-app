import CourseNavigation from '../CourseNavigation';
import styles from '../../../index.css';
import CourseTopNavBar from '../CoursesHome/CourseTopNavBar';
import CourseAssignmentContent from './CourseAssignmentContent';

const CoursesAssignments = () => {
  return (
    <div className="flex-grow-1">
      <CourseTopNavBar />
      <div className={styles.wd_flex_row_container}>
        <div className="d-flex">
          <CourseNavigation />
          <CourseAssignmentContent />
        </div>
      </div>
    </div>
  );
};

export default CoursesAssignments;
