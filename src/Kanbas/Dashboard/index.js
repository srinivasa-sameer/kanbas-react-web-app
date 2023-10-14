import styles from './index.module.css';
import db from '../Database';
import KanbasNavigation from '../KanbasNavigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="d-flex flex-row">
      <div>
        <KanbasNavigation />
      </div>
      <div className={styles.main_content}>
        <h1>Dashboard</h1>
        <hr />

        <div className="container" style={{ marginLeft: '30px' }}>
          <h2>Published Courses (3)</h2>
          <hr />

          <div
            className={`d-flex flex-row flex-wrap justify-content-around ${styles.cardContainer}`}
          >
            {courses.map((course) => (
              <Card style={{ width: '270px' }} key={course._id}>
                <Card.Img variant="top" src={`${course.image}`} />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.number}</Card.Text>
                  <Button variant="primary">{course.number}</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
