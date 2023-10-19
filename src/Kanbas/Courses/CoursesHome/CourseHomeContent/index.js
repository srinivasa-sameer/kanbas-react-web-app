import { Dropdown } from 'react-bootstrap';
import {
  FaCircleCheck,
  FaEllipsisVertical,
  FaGripVertical,
  FaPlus,
} from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import db from '../../../Database';
import { useParams } from 'react-router';
import React, { useState } from 'react';
import {
  faPlus,
  faCheckCircle,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const CourseHomeContent = () => {
  const { courseId } = useParams();
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
        <button class="btn" style={{ background: '#eeeeee' }}>
          Collapse All
        </button>
        <button class="btn" style={{ background: '#eeeeee' }}>
          View Progress
        </button>

        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: '#eeeeee',
              color: 'black',
              borderStyle: 'none',
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

        <button class="btn btn-danger">
          <FaPlus style={{ marginRight: '3px' }}></FaPlus>Module
        </button>
        <button class="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <FaEllipsisVertical></FaEllipsisVertical>
        </button>
      </div>
      <br />
      <hr />
      <ul className="list-group module-list">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index}>
              <li
                className="list-group-item list-group-item-secondary"
                onClick={() => toggleModule(index)}
              >
                <div className="flex-container">
                  {module.name}
                  <div className="float-end">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: 'green', marginRight: '8px' }}
                    />
                    {expandedModules[index] ? '-' : '+'}
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      style={{ color: '#787878', marginLeft: '8px' }}
                    />
                  </div>
                </div>
              </li>

              {expandedModules[index] &&
                module.lessons &&
                module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="list-group-item ms-3">
                    <div className="flex-container">
                      {lesson.name}
                      <div className="float-end">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ color: 'green', marginRight: '8px' }}
                        />
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: '#787878' }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </div>
          ))}
      </ul>
      {/* {modules?.map((module) => (
        <ul className="list-group module-list" key={module._id}>
          <li className="list-group-item list-group-item-secondary">
            <FaGripVertical style={{ marginRight: '5px' }}></FaGripVertical>
            <strong>{module.mainHeading}</strong>
            <div className="float-end">
              <FaCircleCheck></FaCircleCheck>
              <FaEllipsisVertical></FaEllipsisVertical>
            </div>
          </li>
          <ul className="list-group" style={{ borderRadius: '0' }}>
            <li className="list-group-item">
              <FaGripVertical style={{ marginRight: '5px' }}></FaGripVertical>
              <strong>{module.subHeading}</strong>
              <div class="float-end">
                <FaCircleCheck></FaCircleCheck>
                <FaEllipsisVertical></FaEllipsisVertical>
              </div>
            </li>
            <ul className="list-group" style={{ borderRadius: '0' }}>
              <li className="list-group-item">
                <FaGripVertical
                  style={{ marginRight: '40px' }}
                ></FaGripVertical>
                {module.moduleName}
                <div class="float-end">
                  <FaCircleCheck></FaCircleCheck>
                  <FaEllipsisVertical></FaEllipsisVertical>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '40px' }}
                ></i>
                Learn what is Web Development
                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '40px' }}
                ></i>
                Creating a development environment
                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '40px' }}
                ></i>
                Creating a web application
                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '40px' }}
                ></i>
                Getting started with the first assignment
                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
            </ul>
            <li class="list-group-item">
              <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
              <strong>READING</strong>
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <ul class="list-group" style={{ borderRadius: '0' }}>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '40px' }}
                ></i>
                Full Stack Developer - Chapter 1 - Introduction
                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '40px' }}
                ></i>
                Full Stack Developer - Chapter 2 - Creating User Interfaces with
                HTML
                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
            </ul>
            <li class="list-group-item">
              <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
              <strong>SLIDES</strong>
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <ul class="list-group" style={{ borderRadius: '0' }}>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '10px' }}
                ></i>
                <i class="fa fa-link"></i>
                <span style={{ color: '#b52828' }}>
                  <a href="#" style={{ color: '#b52828' }}>
                    Introduction to Web Development
                  </a>
                  <i class="fa-solid fa-file-export"></i>
                </span>

                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '10px' }}
                ></i>
                <i class="fa fa-link"></i>
                <span style={{ color: '#b52828' }}>
                  <a href="#" style={{ color: '#b52828' }}>
                    Creating a HTTP Server with Node.js
                  </a>
                  <i class="fa-solid fa-file-export"></i>
                </span>

                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
              <li class="list-group-item">
                <i
                  class="fa fa-grip-vertical"
                  style={{ marginRight: '10px' }}
                ></i>
                <i class="fa fa-link"></i>
                <span style={{ color: '#b52828' }}>
                  <a href="#" style={{ color: '#b52828' }}>
                    Creating a react application
                  </a>
                  <i class="fa-solid fa-file-export"></i>
                </span>

                <div class="float-end">
                  <i class="fa-solid fa-circle-check"></i>
                  <i class="fa fa-ellipsis-v"></i>
                </div>
              </li>
            </ul>
          </ul>
        </ul>
      ))} */}
      {/* <ul class="list-group module-list">
        <li class="list-group-item list-group-item-secondary">
          <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
          <strong>Week 0 - Intro</strong>
          <div class="float-end">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </li>
        <ul class="list-group" style={{ borderRadius: '0' }}>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>LEARNING OBJECTIVES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Introduction to the Course
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Learn what is Web Development
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Creating a development environment
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Creating a web application
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Getting started with the first assignment
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>READING</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 1 - Introduction
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 2 - Creating User Interfaces with
              HTML
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>SLIDES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Introduction to Web Development
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Creating a HTTP Server with Node.js
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Creating a react application
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
        </ul>
        <li class="list-group-item list-group-item-secondary">
          <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
          <strong>Week 1 - HTML</strong>
          <div class="float-end">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa fa-ellipsis-v"></i>
          </div>
        </li>
        <ul class="list-group" style={{ borderRadius: '0' }}>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>LEARNING OBJECTIVES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Learn how to create user interfaces with HTML
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Keep working on Assignment 1
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Deploy the assignment to Netlify
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>READING</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 1 - Introduction
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '40px' }}
              ></i>
              Full Stack Developer - Chapter 2 - Creating User Interfaces with
              HTML
              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
          <li class="list-group-item">
            <i class="fa fa-grip-vertical" style={{ marginRight: '5px' }}></i>
            <strong>SLIDES</strong>
            <div class="float-end">
              <i class="fa-solid fa-circle-check"></i>
              <i class="fa fa-ellipsis-v"></i>
            </div>
          </li>
          <ul class="list-group" style={{ borderRadius: '0' }}>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Introduction to HTML and the DOM
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Formatting Web content with Headings and Paragraphs
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Formatting content with Lists and Tables
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Creating Web Forms
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
            <li class="list-group-item">
              <i
                class="fa fa-grip-vertical"
                style={{ marginRight: '10px' }}
              ></i>
              <i class="fa fa-link"></i>
              <span style={{ color: '#b52828' }}>
                <a href="#" style={{ color: '#b52828' }}>
                  Navigating with Anchors
                </a>
                <i class="fa-solid fa-file-export"></i>
              </span>

              <div class="float-end">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa fa-ellipsis-v"></i>
              </div>
            </li>
          </ul>
        </ul>
      </ul> */}
    </div>
  );
};

export default CourseHomeContent;
