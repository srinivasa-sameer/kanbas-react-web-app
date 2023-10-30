import { Link, useLocation } from 'react-router-dom';
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
    'Account',
    'Dashboard',
    'Courses',
    'Calendar',
    'Inbox',
    'History',
    'Studio',
    'Commons',
    'Help',
  ];
  const iconMap = {
    Account: <FaUser className={styles.icon} style={{ color: 'grey' }} />,
    Dashboard: <FaGauge className={styles.icon} />,
    Courses: <FaBook className={styles.icon} />,
    Calendar: <FaCalendarDays className={styles.icon} />,
    Inbox: <FaInbox className={styles.icon} />,
    History: <FaClock className={styles.icon} />,
    Studio: <FaYoutube className={styles.icon} />,
    Commons: <FaArrowRightFromBracket className={styles.icon} />,
    Help: <FaCircleQuestion className={styles.icon} />,
  };

  const { pathname } = useLocation();

  return (
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
      {links.map((link, index) => (
        <li className={` ${pathname.includes(link) && styles.active}`}>
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`${styles.kanbas__navLink}`}
          >
            {iconMap[link]}
            <span
              className={` ${pathname.includes(link) && styles.activeLink}`}
            >
              {link}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default KanbasNavigation;
