import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const ProjectDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview')
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design Homepage', assignee: 'John Doe', priority: 'High' },
      { id: 2, title: 'Setup Database', assignee: 'Jane Smith', priority: 'Medium' }
    ],
    ongoing: [
      { id: 3, title: 'API Integration', assignee: 'Mike Johnson', priority: 'High' },
      { id: 4, title: 'Testing Features', assignee: 'Sarah Wilson', priority: 'Low' }
    ],
    completed: [
      { id: 5, title: 'Project Setup', assignee: 'John Doe', priority: 'High' },
      { id: 6, title: 'Requirements Gathering', assignee: 'Jane Smith', priority: 'Medium' }
    ]
  })
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false)
  const [newTask, setNewTask] = useState({
    title: '',
    assignee: '',
    priority: 'Medium',
    status: 'todo'
  })
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Doe', role: 'Designer' },
    { id: 2, name: 'Jane Smith', role: 'Backend Developer' },
    { id: 3, name: 'Mike Johnson', role: 'Frontend Developer' },
    { id: 4, name: 'Sarah Wilson', role: 'QA Engineer' }
  ])
  const [showAddTeamMemberModal, setShowAddTeamMemberModal] = useState(false)
  const [newTeamMember, setNewTeamMember] = useState({
    name: '',
    role: ''
  })

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('projectTasks');
    const savedTeamMembers = localStorage.getItem('projectTeamMembers');
    
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    
    if (savedTeamMembers) {
      setTeamMembers(JSON.parse(savedTeamMembers));
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('projectTasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('projectTeamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  const handleDragEnd = (result, id, source) => {
    if (!result.destination) return
    
    const sourceList = [...tasks[source]]
    const destinationList = [...tasks[result.destination.droppableId]]
    const [movedItem] = sourceList.filter(item => item.id === id)
    
    const newSourceList = sourceList.filter(item => item.id !== id)
    destinationList.push(movedItem)
    
    setTasks({
      ...tasks,
      [source]: newSourceList,
      [result.destination.droppableId]: destinationList
    })
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      case 'Low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  }

  const handleCreateTask = () => {
    const newTaskId = Math.max(...[
      ...tasks.todo.map(t => t.id),
      ...tasks.ongoing.map(t => t.id),
      ...tasks.completed.map(t => t.id)
    ]) + 1;
    
    const taskToAdd = {
      id: newTaskId,
      title: newTask.title,
      assignee: newTask.assignee,
      priority: newTask.priority
    };
    
    setTasks({
      ...tasks,
      [newTask.status]: [...tasks[newTask.status], taskToAdd]
    });
    
    setNewTask({
      title: '',
      assignee: '',
      priority: 'Medium',
      status: 'todo'
    });
    
    setShowCreateTaskModal(false);
  }

  const handleAddTeamMember = () => {
    const newMemberId = teamMembers.length > 0 
      ? Math.max(...teamMembers.map(m => m.id)) + 1 
      : 1;
    
    const memberToAdd = {
      id: newMemberId,
      name: newTeamMember.name,
      role: newTeamMember.role
    };
    
    setTeamMembers([...teamMembers, memberToAdd]);
    
    setNewTeamMember({
      name: '',
      role: ''
    });
    
    setShowAddTeamMemberModal(false);
  }

  const handleRemoveTeamMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  }

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Overview':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Project Overview</h2>
            <p>This is the overview of your project. Here you can see general information and progress.</p>
          </div>
        )
      case 'Tasks':
        return (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Project Tasks</h1>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
                onClick={() => setShowCreateTaskModal(true)}
              >
                <span className="mr-2">+</span> Create Task
              </button>
            </div>
            
            {/* Task Columns */}
            <div className="grid grid-cols-3 gap-6">
              {/* To Do Tasks */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">To Do</h2>
                <div className="space-y-4">
                  {tasks.todo.map(task => (
                    <motion.div 
                      key={task.id}
                      className="border p-4 rounded cursor-move"
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.1}
                      onDragEnd={(_, info) => {
                        if (info.offset.x > 150) {
                          handleDragEnd({ destination: { droppableId: 'ongoing' } }, task.id, 'todo')
                        }
                      }}
                      whileDrag={{ 
                        scale: 1.05, 
                        boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3, ease: "easeInOut" }
                      }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{task.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ongoing Tasks */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Ongoing</h2>
                <div className="space-y-4">
                  {tasks.ongoing.map(task => (
                    <motion.div 
                      key={task.id}
                      className="border p-4 rounded cursor-move"
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.1}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -150) {
                          handleDragEnd({ destination: { droppableId: 'todo' } }, task.id, 'ongoing')
                        } else if (info.offset.x > 150) {
                          handleDragEnd({ destination: { droppableId: 'completed' } }, task.id, 'ongoing')
                        }
                      }}
                      whileDrag={{ 
                        scale: 1.05, 
                        boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                        backgroundColor: "#FFAB5E",
                        transition: { duration: 0.3, ease: "easeInOut" }
                      }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{task.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Completed Tasks */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Completed</h2>
                <div className="space-y-4">
                  {tasks.completed.map(task => (
                    <motion.div 
                      key={task.id}
                      className="border p-4 rounded cursor-move bg-gray-50"
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.1}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -150) {
                          handleDragEnd({ destination: { droppableId: 'ongoing' } }, task.id, 'completed')
                        }
                      }}
                      whileDrag={{ 
                        scale: 1.05, 
                        boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
                        backgroundColor: "#A3E4D7",
                        transition: { duration: 0.3, ease: "easeInOut" }
                      }}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{task.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )
      case 'Team':
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Team Members</h2>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
                onClick={() => setShowAddTeamMemberModal(true)}
              >
                <span className="mr-2">+</span> Add Team Member
              </button>
            </div>
            <ul className="space-y-2">
              {teamMembers.map(member => (
                <li key={member.id} className="p-3 bg-white rounded shadow flex justify-between items-center">
                  <span>{member.name} - {member.role}</span>
                  <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveTeamMember(member.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      case 'Settings':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Project Settings</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Project Name</label>
                <input type="text" className="w-full p-2 border rounded" defaultValue="Project Name" />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea className="w-full p-2 border rounded" rows="4"></textarea>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
            </form>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Project Name</h2>
        <nav>
          <ul className="space-y-2">
            {['Overview', 'Tasks', 'Team', 'Settings'].map(tab => (
              <li 
                key={tab}
                className={`p-2 hover:bg-gray-700 rounded cursor-pointer ${activeTab === tab ? 'bg-gray-700' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100">
        {renderTabContent()}
      </div>
    </div>

    {/* Create Task Modal */}
    {showCreateTaskModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Create New Task</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Task Title</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={newTask.title}
                onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Assignee</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={newTask.assignee}
                onChange={(e) => setNewTask({...newTask, assignee: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Priority</label>
              <select 
                className="w-full p-2 border rounded"
                value={newTask.priority}
                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Status</label>
              <select 
                className="w-full p-2 border rounded"
                value={newTask.status}
                onChange={(e) => setNewTask({...newTask, status: e.target.value})}
              >
                <option value="todo">To Do</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <button 
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowCreateTaskModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleCreateTask}
                disabled={!newTask.title || !newTask.assignee}
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Add Team Member Modal */}
    {showAddTeamMemberModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Add Team Member</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={newTeamMember.name}
                onChange={(e) => setNewTeamMember({...newTeamMember, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Role</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                value={newTeamMember.role}
                onChange={(e) => setNewTeamMember({...newTeamMember, role: e.target.value})}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <button 
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setShowAddTeamMemberModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleAddTeamMember}
                disabled={!newTeamMember.name || !newTeamMember.role}
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default ProjectDashboard
