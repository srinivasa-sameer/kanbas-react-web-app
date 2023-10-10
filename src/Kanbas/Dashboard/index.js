import { Link } from 'react-router-dom';
import styles from './index.module.css';
import db from '../Database';
import KanbasNavigation from '../KanbasNavigation';
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

        <div class="container" style={{ marginLeft: '30px' }}>
          <h2>Published Courses (8)</h2>
          <hr />
          <div class="d-flex flex-row flex-wrap justify-content-around card-container">
            <div class="card">
              <img src="../../images/grey.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>CS4550 12631 Web Development...</h6>
                <p class="card-text">CS4550.12631.202410</p>
                <p class="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <a href="#">
                  <i class="fa-solid fa-file-pen"></i>
                </a>
              </div>
            </div>
            <div class="card">
              <img
                src="../../images/blue.jpeg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6>CS4550 12631 Web Development...</h6>
                <p class="card-text">CS4550.12631.202410</p>
                <p class="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <a href="#">
                  <i class="fa-solid fa-file-pen"></i>
                </a>
              </div>
            </div>
            <div class="card">
              <img src="../../images/grey.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h6>CS4550 12631 Web Development...</h6>
                <p class="card-text">CS4550.12631.202410</p>
                <p class="card-text">202410_1 Fall 2023 Semester Full Term</p>
                <a href="#">
                  <i class="fa-solid fa-file-pen"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
