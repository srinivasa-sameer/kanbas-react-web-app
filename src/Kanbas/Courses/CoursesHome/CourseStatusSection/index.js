import {
  FaBan,
  FaBell,
  FaBullhorn,
  FaCalendar,
  FaCircleCheck,
  FaCircleMinus,
  FaCloudArrowUp,
  FaCrosshairs,
  FaFileImport,
  FaSquarePollVertical,
  FaXmark,
} from 'react-icons/fa6';

import styles from './index.module.css';

const CourseStatusSection = () => {
  return (
    <div
      class="status-content d-none d-lg-block"
      style={{ marginLeft: '20px', marginRight: '20px' }}
    >
      <h5>Course Status</h5>

      <button class="btn" style={{ background: '#eeeeee' }}>
        <FaBan style={{ marginRight: '3px' }}></FaBan>Unpublish
      </button>
      <button class="btn" style={{ background: '#82be5d' }}>
        <FaCircleCheck
          style={{
            background: 'white',
            color: 'green',
            borderRadius: '50%',
            marginRight: '3px',
          }}
        ></FaCircleCheck>
        Published
      </button>
      <ul class="list-group status-list" style={{ marginTop: '10px' }}>
        <li class="list-group-item">
          <FaFileImport></FaFileImport>Import Existing Content
        </li>
        <li class="list-group-item">
          <FaCloudArrowUp></FaCloudArrowUp>Import from Commons
        </li>
        <li class="list-group-item">
          <FaCrosshairs></FaCrosshairs>Choose Home Page
        </li>
        <li class="list-group-item">
          <FaSquarePollVertical></FaSquarePollVertical>View Course Stream
        </li>
        <li class="list-group-item">
          <FaBullhorn></FaBullhorn>New Announcement
        </li>
        <li class="list-group-item">
          <FaSquarePollVertical></FaSquarePollVertical>New Analytics
        </li>
        <li class="list-group-item">
          <FaBell></FaBell>View Course Notifications
        </li>
      </ul>
      <br />
      <h5>To Do</h5>
      <hr />
      <div class="d-flex">
        <FaCircleMinus
          style={{
            transform: 'rotate(90deg)',
            color: '#b52828',
            marginRight: '15px',
            marginBottom: '30px',
          }}
        ></FaCircleMinus>
        <div class="text">
          <h6 style={{ color: '#b52828', marginLeft: '10px' }}>
            Grade A1 - ENV + HTML
          </h6>
          <p style={{ marginLeft: '10px', marginTop: '-10px', color: 'grey' }}>
            100 points Sep 18 at 11:59
          </p>
        </div>
        <FaXmark style={{ marginLeft: '100px' }}></FaXmark>
      </div>
      <br />
      <div>
        <h5>
          Coming Up
          <div class="float-end">
            <FaCalendar></FaCalendar>
            <a href="#" style={{ color: '#b52828', fontSize: '15px' }}>
              View Calendar
            </a>
          </div>
        </h5>
      </div>

      <hr />

      <ul style={{ listStyle: 'none' }}>
        <li>
          <FaCalendar></FaCalendar>
          <a href="#" style={{ color: '#b52828' }}>
            Lecture
          </a>
          <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
            CS 4550.12631.202410
          </p>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '15px',
              color: 'grey',
              marginTop: '-18px',
            }}
          >
            Sep 19 at 11:45AM
          </p>
        </li>
        <li>
          <FaCalendar></FaCalendar>
          <a href="#" style={{ color: '#b52828' }}>
            CS 5610 06 SP23 Lecture
          </a>
          <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
            CS 5610.12631.202410
          </p>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '15px',
              color: 'grey',
              marginTop: '-18px',
            }}
          >
            Sep 21 at 11:45AM
          </p>
        </li>
        <li>
          <FaCalendar style={{ marginRight: '5px' }}></FaCalendar>
          <a href="#" style={{ color: '#b52828' }}>
            CS 5610 Web Development Lecture
          </a>
          <p style={{ marginLeft: '20px', fontSize: '15px', color: 'grey' }}>
            CS 5610.12631.202410
          </p>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '15px',
              color: 'grey',
              marginTop: '-18px',
            }}
          >
            Sep 21 at 11:45AM
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CourseStatusSection;
