import React from 'react';
import './RecentActivity.css';

const RecentActivity = ({ activities }) => {
  return (
    <div className="recent-activity">
      {activities.map((activity, index) => (
        <div className="activity-item" key={index}>
          <p><strong>Date:</strong> {activity.date}</p>
          <p><strong>Description:</strong> {activity.description}</p>
          <p><strong>IP Address:</strong> {activity.ip}</p>
          <p><strong>Device:</strong> {activity.device}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
