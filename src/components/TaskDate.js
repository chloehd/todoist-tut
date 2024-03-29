import React from 'react';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import moment from 'moment';

export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => showTaskDate && (
  <div 
    className="task-date"
    data-testid="task-date-overlay"
  >
    <ul className="task-date__list">
      <li
        onClick={() => {
          setShowTaskDate(false);
          setTaskDate(moment().format('DD/MM/YYYY'));
        }}
        data-tesid="task-date-overlay"
      >
        <span>
          <FaSpaceShuttle />
        </span>
        <span>Today</span>
      </li>
      <li
        onClick={() => {
          setShowTaskDate(false);
          setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
        }}
        data-tesid="task-date-tomorrow"
      >
        <span>
          <FaSun />
        </span>
        <span>Tomorrow</span>
      </li>
      <li
        onClick={() => {
          setShowTaskDate(false);
          setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
        }}
        data-tesid="task-date-next-week"
      >
        <span>
          <FaRegPaperPlane />
        </span>
        <span>Next week</span>
      </li>
    </ul>
  </div>
)