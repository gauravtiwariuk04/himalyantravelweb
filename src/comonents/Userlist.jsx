import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers(prev => [...prev, { 
        id: Date.now(), 
        ...newUser 
      }]);          
      setNewUser({ name: '', email: '' });
    }
  };

  const deleteUser = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      
      
      {/* Add User Form */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter email"
              required
            />
          </div>
        </div>
        <button
          onClick={addUser}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          disabled={!newUser.name || !newUser.email}
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">User List</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">No users found</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <div key={user.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-medium text-lg">{user.name}</h3>
                <p className="text-gray-600 mb-2">{user.email}</p>  
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserList;