import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Headphones', sales: 10 },
  { name: 'Watch', sales: 8 },
  { name: 'Shoes', sales: 12 },
];

const Admin = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📈 Sales Overview</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#60A5FA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Admin;
