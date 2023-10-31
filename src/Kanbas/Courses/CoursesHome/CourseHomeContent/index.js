import { Dropdown } from 'react-bootstrap';
import { FaCircleCheck, FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import db from '../../../Database';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import {
  faCheckCircle,
  faEllipsisV,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons';

const CourseHomeContent = () => {
  const modules = db.modules;
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (index) => {
    setExpandedModules((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <div class="flex-grow-1" style={{ margin: '20px 30px' }}>
      <div class="d-flex float-end main-content-control">
        <button
          class="btn"
          style={{ background: '#eeeeee', marginRight: '5px' }}
        >
          Collapse All
        </button>
        <button
          class="btn"
          style={{ background: '#eeeeee', marginRight: '5px' }}
        >
          View Progress
        </button>

        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: '#eeeeee',
              color: 'black',
              borderStyle: 'none',
              marginRight: '5px',
            }}
            id="dropdown-basic"
          >
            <FaCircleCheck
              style={{
                marginRight: '5px',
                color: 'green',
              }}
            ></FaCircleCheck>
            Publish All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Publish All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Publish all items and modules
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">UnPublish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button class="btn btn-danger" style={{ marginRight: '5px' }}>
          <FaPlus style={{ marginRight: '3px' }}></FaPlus>Module
        </button>
        <button class="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <FaEllipsisVertical></FaEllipsisVertical>
        </button>
      </div>
      <br />
      <hr />
      <ul className="list-group module-list">
        {modules.map((module, index) => (
          <div key={index}>
            <li className="list-group-item" onClick={() => toggleModule(index)}>
              <div className="flex-container">
                {module.name}
                <br />
                {module.description}
                <div className="float-end">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: 'green', marginRight: '8px' }}
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    style={{ color: '#787878', marginLeft: '8px' }}
                  />
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CourseHomeContent;
