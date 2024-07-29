import React from 'react';
import './Payments.css';

const Payments = ({ payments }) => {
  return (
    <div className="payments">
      <table className="payments-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>{payment.method}</td>
              <td>{payment.status}</td>
              <td><a href={payment.invoiceLink}>View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
