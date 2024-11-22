import React, { useState } from 'react';
import Card from '../components/ui/card';
import './AdminDashboard.css';
import {
  Activity, Users, DollarSign, ShoppingCart
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProductForm from '../components/ProductForm';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

const mockData = {
  stats: [
    { id: 1, title: 'Total Users', value: '2,345', change: '+12.5%', icon: Users },
    { id: 2, title: 'Revenue', value: '$12,345', change: '+8.2%', icon: DollarSign },
    { id: 3, title: 'Orders', value: '345', change: '+5.4%', icon: ShoppingCart },
    { id: 4, title: 'Active Sessions', value: '789', change: '+15.3%', icon: Activity }
  ],
  chartData: [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 }
  ],
  recentUsers: [
    { id: 1, name: 'Youssef Amrani', email: 'youssef@example.com', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Fatima Zahra', email: 'fatima@example.com', status: 'Pending', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Karim Idrissi', email: 'karim@example.com', status: 'Active', avatar: '/api/placeholder/32/32' },
    { id: 4, name: 'Salma Bennani', email: 'salma@example.com', status: 'Inactive', avatar: '/api/placeholder/32/32' }
  ]
};

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <ProductForm onAddProduct={addProduct} />
      <div className="dashboard-cards">
        {mockData.stats.map(stat => (
          <Card key={stat.id}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <h2 className="text-xl font-bold mt-8">Revenue Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3B82F6" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Users Section */}
      <div className="recent-users mt-8">
        <h2 className="text-xl font-bold">Recent Users</h2>
        <div className="space-y-4">
          {mockData.recentUsers.map(user => (
            <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                user.status === 'Active' ? 'bg-green-100 text-green-800' :
                user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Products Section */}
      <div className="recent-products mt-8">
        <h2 className="text-xl font-bold">Recent Products</h2>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors">
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-sm text-gray-500">{product.price}</p>
                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Home products={products} />
      <Shop products={products} />
    </div>
  );
};

export default AdminDashboard;
