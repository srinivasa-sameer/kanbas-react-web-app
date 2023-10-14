import KanbasNavigation from '../../KanbasNavigation';
import CourseNavigation from './CourseNavigation';
import styles from '../../../index.css';
import CourseTopNavBar from './CourseTopNavBar';
import CourseStatusSection from './CourseStatusSection';
import CourseHomeContent from './CourseHomeContent';

const CoursesHome = () => {
  return (
    <div className="d-flex flex-row">
      <KanbasNavigation />
      <div className={styles.wd_flex_grow_1}>
        <CourseTopNavBar />
        <div className={styles.wd_flex_row_container}>
          <div className="d-flex">
            <CourseNavigation />
            <CourseHomeContent className="flex-grow-1" />
            <CourseStatusSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHome;
