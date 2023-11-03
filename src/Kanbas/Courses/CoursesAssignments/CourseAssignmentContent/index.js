import { Link, Navigate, useParams } from 'react-router-dom';
import '../../../../index.css';
import './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBook, FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment } from '../assignmentsReducer';

const CourseAssignmentContent = () => {
  const { courseId } = useParams();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const temp_id = Math.random();
  const dispatch = useDispatch();

  return (
    <div className="flex-grow-1" style={{ margin: '30px' }}>
      <div className="d-flex flex-row">
        <div className="search flex-grow-1">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search for an Assignment"
          />
        </div>
        <div className="d-flex float-end main-content-control">
          <div className="flex-grow-1"></div>
          <button className="btn" style={{ background: '#eeeeee' }}>
            <FaPlus style={{ marginRight: '3px' }} />
            Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${temp_id}`}>
            <button className="btn btn-danger">
              <FaPlus style={{ marginRight: '3px' }} />
              Assignment
            </button>
          </Link>
          <button
            className="btn"
            style={{ background: '#eeeeee', height: '38px' }}
          >
            <FaEllipsisVertical />
          </button>
        </div>
      </div>

      <hr />
      <ul className="wd-flex-grow-1 list-group module-list">
        <li className="list-group-item list-group-item-secondary">
          <FontAwesomeIcon
            icon={faGripVertical}
            style={{ marginRight: '5px' }}
          />
          <span>
            <strong>Assignments</strong>
          </span>
          <div className="float-end">
            <button
              className="btn rounded-pill"
              style={{ background: '#eeeeee', marginRight: '20px' }}
            >
              40% of Total
            </button>
            <FaPlus style={{ marginRight: '20px' }} />
            <FaEllipsisVertical />
          </div>
        </li>
        <ul
          className="list-group"
          style={{ borderRadius: '0', borderLeft: '5px solid green' }}
        >
          {assignments.map((assignment) => (
            <li className="list-group-item" key={assignment._id}>
              <div className="flex-container">
                <div className="float-end">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteAssignment(assignment._id))}
                  >
                    Delete
                  </button>
                </div>
                <FontAwesomeIcon
                  icon={faGripVertical}
                  style={{ marginRight: '20px' }}
                />
                <FaBook style={{ color: 'green', marginRight: '10px' }} />
                <span style={{ display: 'inline' }}>
                  <strong>
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      style={{ color: 'black' }}
                    >
                      <strong>{assignment.title}</strong>
                    </Link>
                  </strong>
                </span>
                <div
                  style={{
                    marginLeft: '70px',
                    color: '#686464',
                    width: '600px',
                  }}
                >
                  <span style={{ fontSize: '15px', marginBottom: '1px' }}>
                    {assignment?.description}
                  </span>
                  <p>{assignment.due}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default CourseAssignmentContent;
