import React, { useState } from 'react';

function Admin() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joined: '2025-04-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joined: '2025-04-05' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', joined: '2025-04-10' },
    { id: 4, name: 'markderrick', email: 'markderrick@gmail.com', joined: '2024-04-10' }
  ];

  const recentPosts = [
    { id: 1, title: 'Getting Started Guide', status: 'Published', date: '2025-04-08' },
    { id: 2, title: 'Advanced Features', status: 'Draft', date: '2025-04-11' }
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button className="new-post-btn">New Post</button>
          <div className="admin-profile">
            
            <span>Admin User</span>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <aside className="admin-sidebar">
          <nav>
            <ul>
              <li className={activeTab === 'overview' ? 'active' : ''}>
                <button onClick={() => setActiveTab('overview')}>Overview</button>
              </li>
              <li className={activeTab === 'users' ? 'active' : ''}>
                <button onClick={() => setActiveTab('users')}>Users</button>
              </li>
              <li className={activeTab === 'content' ? 'active' : ''}>
                <button onClick={() => setActiveTab('content')}>Content</button>
              </li>
              <li className={activeTab === 'analytics' ? 'active' : ''}>
                <button onClick={() => setActiveTab('analytics')}>Analytics</button>
              </li>
              <li className={activeTab === 'settings' ? 'active' : ''}>
                <button onClick={() => setActiveTab('settings')}>Settings</button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="admin-main">
          {activeTab === 'overview' && (
            <div className="dashboard-overview">
              <div className="stats-cards">
                <div className="stat-card">
                  <h3>Total Users</h3>
                  <p className="stat-number">1,243</p>
                  <p className="stat-change positive">+12% from last month</p>
                </div>
                <div className="stat-card">
                  <h3>Published Posts</h3>
                  <p className="stat-number">87</p>
                  <p className="stat-change positive">+5% from last month</p>
                </div>
                <div className="stat-card">
                  <h3>Monthly Visitors</h3>
                  <p className="stat-number">24,853</p>
                  <p className="stat-change positive">+18% from last month</p>
                </div>
                <div className="stat-card">
                  <h3>Comments</h3>
                  <p className="stat-number">342</p>
                  <p className="stat-change negative">-3% from last month</p>
                </div>
              </div>

              <div className="recent-activity">
                <div className="recent-section">
                  <h2>Recent Users</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map(user => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.joined}</td>
                          <td><button className="view-btn">View</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="recent-section">
                  <h2>Recent Posts</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPosts.map(post => (
                        <tr key={post.id}>
                          <td>{post.title}</td>
                          <td>
                            <span className={`status-badge ${post.status.toLowerCase()}`}>
                              {post.status}
                            </span>
                          </td>
                          <td>{post.date}</td>
                          <td><button className="edit-btn">Edit</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="users-section">
              <h2>User Management</h2>
              <p>Manage your application users here.</p>
              {/* User management content would go here */}
            </div>
          )}

          {activeTab === 'content' && (
            <div className="content-section">
              <h2>Content Management</h2>
              <p>Manage your website content here.</p>
              {/* Content management tools would go here */}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="analytics-section">
              <h2>Analytics</h2>
              <p>View detailed analytics about your website.</p>
              {/* Analytics charts and reports would go here */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <h2>Settings</h2>
              <p>Configure your website settings.</p>
              {/* Settings forms would go here */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Admin;