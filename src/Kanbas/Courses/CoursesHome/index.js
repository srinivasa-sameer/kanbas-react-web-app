import styles from '../../../index.css';
import CourseStatusSection from './CourseStatusSection';
import CourseHomeContent from './CourseHomeContent';

const CoursesHome = () => {
  return (
    <div className="flex-grow-1">
      <div className={styles.wd_flex_row_container}>
        <div className="d-flex">
          <CourseHomeContent />
          <CourseStatusSection />
        </div>
      </div>
    </div>
  );
};

export default CoursesHome;
