import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { FaUser, FaBook, FaInbox, FaClock } from 'react-icons/fa';
import {
  FaArrowRightFromBracket,
  FaCalendarDays,
  FaCircleQuestion,
  FaGauge,
  FaYoutube,
} from 'react-icons/fa6';

const KanbasNavigation = () => {
  const links = [
    { name: 'Account', url: '/Kanbas/Account/Profile/' },
    { name: 'Dashboard', url: '/Kanbas/Dashboard/' },
  ];
  return (
    <div>
      <ul className={styles.wd_kanbas_navigation}>
        <div className={styles.wd_logo_container}>
          <a href="/Kanbas/Dashboard">
            <img
              src="../../images/NULogo.png"
              className={styles.wd_logo}
              alt="Logo"
            />
          </a>
        </div>
        {/* {links.length > 0 &&
          links.map((ele) => (
            <li>
              <Link to={ele?.url} className={styles.kanbas__navLink}>
                <FaUser className={styles.icon} style={{ color: 'white' }} />
                {ele?.name}
              </Link>
            </li>
          ))} */}
        <li>
          <Link
            to="/Kanbas/Account/Profile/"
            className={styles.kanbas__navLink}
          >
            <FaUser className={styles.icon} style={{ color: 'white' }} />
            Account
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Dashboard" className={styles.kanbas__navLink}>
            <FaGauge className={styles.icon} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Courses/Home" className={styles.kanbas__navLink}>
            <FaBook className={styles.icon} />
            Courses
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Calendar" className={styles.kanbas__navLink}>
            <FaCalendarDays className={styles.icon} />
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Inbox" className={styles.kanbas__navLink}>
            <FaInbox className={styles.icon} />
            Inbox
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/History" className={styles.kanbas__navLink}>
            <FaClock className={styles.icon} />
            History
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Studio" className={styles.kanbas__navLink}>
            <FaYoutube className={styles.icon} />
            Studio
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Commons" className={styles.kanbas__navLink}>
            <FaArrowRightFromBracket className={styles.icon} />
            Commons
          </Link>
        </li>
        <li>
          <Link to="/Kanbas/Help" className={styles.kanbas__navLink}>
            <FaCircleQuestion className={styles.icon} />
            Help
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default KanbasNavigation;
