import { Typography } from '@mui/material';
import React from 'react';
import './DashboardContent.css';
import MyCards from './MyCards';
import Payments from './Payments';
import ProductDetails from './ProductDetails';
import RecentActivity from './RecentActivity';

// Sample data for demonstration
const sampleCards = [
  { type: 'Visa', last4: '1234', expiry: '12/23', name: 'John Doe', address: '123 Main St, Springfield, IL' },
  { type: 'MasterCard', last4: '5678', expiry: '08/24', name: 'Mary Smith', address: '456 Elm St, Springfield, IL' },
];

const samplePayments = [
  { date: '2023-07-20', amount: '$100.00', method: 'Visa ending in 1234', status: 'Completed', invoiceLink: '#' },
  { date: '2023-06-15', amount: '$75.00', method: 'MasterCard ending in 5678', status: 'Pending', invoiceLink: '#' },
];

const sampleActivities = [
  { date: '2023-07-28 12:34:56', description: 'Logged in', ip: '192.168.0.1', device: 'Chrome on Windows' },
  { date: '2023-07-27 10:20:00', description: 'Updated profile', ip: '192.168.0.1', device: 'Chrome on Windows' },
];

const sampleProducts = [
  { name: 'Royal Blue Nawabi Sherwani', category: 'Sherwani', price: '$50.00/day', quantity: 10, description: 'A beautiful royal blue sherwani perfect for weddings and formal occasions.' },
  { name: 'Pastel Green Gown', category: 'Gown', price: '$75.00/day', quantity: 5, description: 'A stunning pastel green gown for evening parties and receptions.' },
];

const DashboardContent = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="content-item">
          <Typography variant="h6" className="content-title">Product History</Typography>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Product Details</th>
                <th>Rental Date</th>
                <th>Return Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>98xxx xxxxx</td>
                <td>123 Main St, Springfield, IL</td>
                <td>Sherwani, Royal blue nawabi sherwani</td>
                <td>2023-04-28</td>
                <td>2023-06-06</td>
                <td>$54.88</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>90xxx xxxxx</td>
                <td>34, Harbour View, Perth</td>
                <td>Pastel Green, Part wear Gown</td>
                <td>2023-05-09</td>
                <td>2023-07-09</td>
                <td>$2325.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content-item">
          <Typography variant="h6" className="content-title">Product Details</Typography>
          <ProductDetails products={sampleProducts} />
        </div>
        <div className="content-item">
          <Typography variant="h6" className="content-title">My Cards</Typography>
          <MyCards cards={sampleCards} />
        </div>
        <div className="content-item">
          <Typography variant="h6" className="content-title">Payments</Typography>
          <Payments payments={samplePayments} />
        </div>
        <div className="content-item">
          <Typography variant="h6" className="content-title">Recent Activity</Typography>
          <RecentActivity activities={sampleActivities} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
