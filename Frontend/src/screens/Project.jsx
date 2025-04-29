import React, { useEffect, useState, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Markdown from 'markdown-to-jsx'
import axios from "../config/axios.js";
import {
  initializeSocket,
  sendMessage,
  recieveMessage,
} from "../config/socket.js";
import { UserContext } from "../context/user.context.jsx";


const Project = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(new Set());
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState('');
  const [currentFile, setCurrentFile] = useState([]);
  const [openFiles, setOpenFiles] = useState([]);
  
  const [fileTree, setFileTree] = useState({});

 
  
  const handleUserClick = (id) => {
    setSelectedUserId((prevSelectedUserId) => {
      const newSelectedUserId = new Set(prevSelectedUserId);
      if (newSelectedUserId.has(id)) {
        newSelectedUserId.delete(id);
      } else {
        newSelectedUserId.add(id);
      }
      console.log(newSelectedUserId);
      return newSelectedUserId;
    });
  };

  const addCOllaborators = () => {
    axios
      .put("/project/add-user", {
        users: Array.from(selectedUserId),
        projectId: location.state.project._id,
        userId: Array.from(selectedUserId),
      })
      .then((res) => {
        console.log(res);
      });
    setSelectedUserId(new Set());
    setIsModalOpen(false);
  };

  function send() {
    const newMessage = {
      message,
      sender: user,
    };
    sendMessage('project-message', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  }

  useEffect(() => {
    initializeSocket(projects._id);

    recieveMessage('project-message', (data) => {
      console.log(data)
    let message = JSON.parse(data.message);
    
    // console.log(message);
    let isfileTree = message.fileTree
    
    if(isfileTree){
      setFileTree(isfileTree)
    }
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    {console.log(fileTree)}

    axios
      .get(`/project/get-project/${location.state.project._id}`)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => console.log("Error occurred", err));

    axios
      .get("/api/all")
      .then((res) => setUsers(res.data.allUsers))
      .catch((err) => console.log("Error occurred", err));
  }, []);

  function WriteAiMessage(message) {
    const messageObject = JSON.parse(message);
  
    return (
      <div className="overflow-auto m-1 bg-slate-950 text-white rounded p-2">
        <Markdown
          options={{
            overrides: {
              code: {
                component: ({ className, children }) => {
                  const language = className ? className.replace('lang-', '') : 'javascript'; // Default to JS
                  return (
                    <SyntaxHighlighter style={dracula} language={language} PreTag="div">
                      {String(children).trim()}
                    </SyntaxHighlighter>
                  );
                },
              },
            },
          }}
        >
          {messageObject.text}
        </Markdown>
      </div>
    );
  }
  

  return (
    <main className="h-screen w-screen flex">
      <section className="left relative flex flex-col h-screen min-w-96 bg-slate-300">
        <header className="flex justify-between items-center p-2 px-4 w-full bg-slate-100 absolute z-10 top-0">
          <button
            className="flex gap-2"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            <i className="ri-add-fill mr-1"></i>
            <p>Add collaborators</p>
          </button>
          <button
            onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
            className="p-2"
          >
            <i className="ri-group-line"></i>
          </button>
        </header>
        <div className="conversation-area pt-14 pb-10 flex-grow flex flex-col h-full relative">
          <div className="message-box p-1 flex-grow flex flex-col gap-1 overflow-auto max-h-full scrollbar-hide ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message flex flex-col bg-slate-50 w-fit rounded ${
                  msg.sender._id === user._id ? 'ml-auto outgoing' : 'incoming'
                }`}
              >
                <small className="opacity-65 text-xs">{msg.sender.email}</small>
                <p className="text-sm max-w-64">
                  {msg.sender._id === 'ai' ? (
                     
                    WriteAiMessage(msg.message)
                  ) : (
                    msg.message
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="inputField w-full flex absolute bottom-0">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 px-4 border-none outline-none flex-grow"
              type="text"
              placeholder="Enter the text Messages"
            />
            <button
              onClick={send}
              className="px-4 bg-slate-900 text-white hover:bg-slate-800"
            >
              <i className="ri-send-plane-fill"></i>
            </button>
          </div>
        </div>

        <div
          className={`sidePanel w-full h-full bg-slate-100 absolute transition-all duration-300 ${
            isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
          } top-0`}
        >
          <header className="flex justify-between px-4 p-2 bg-slate-200">
            <h1 className="text-lg font-semibold p-2">Users</h1>
            <button onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}>
              <i className="cursor-pointer ri-close-line"></i>
            </button>
          </header>
          <div className="users flex flex-col gap-2">
            <div
              className={`user flex flex-col gap-2 items-center justify-center m-2  transition duration-150 p-2 rounded-md`}
            >
              {projects.users &&
                projects.users.map((user) => {
                  return (
                    <div
                      key={user._id}
                      className="flex bg-slate-100 flex-col gap-2 relative w-52 h-fit hover:bg-slate-200 rounded-lg p-2 cursor-pointer"
                    >
                      <div className="aspect-square relative rounded-full w-fit h-fit p-5  bg-slate-300 flex justify-center items-center">
                        <i className="ri-user-fill absolute"></i>
                      </div>
                      <h1 className="font-semibold text-lg w-fit">
                        {user.email}
                      </h1>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section className="right bg-red-50 flex flex-grow h-full">
        <div className="explorer h-full max-w-64 min-w-52 bg-slate-200">
          <div className="file-tree">
            {Object.keys(fileTree).map((file) => {
              return (
                <div  
                  onClick={() => {
                    setOpenFiles([...new Set([...openFiles,file])])
                    setCurrentFile(file)
                  }}
                  className="file-tree bg-slate-400 hover:bg-slate-500 cursor-pointer p-2 rounded-md m-2"
                >
                  <p>{file}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {currentFile && (
          <div className="code-editor flex flex-col flex-grow h-full">
            <div className="top">
              <div className="files flex">
                {Object.values(openFiles).map((file, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFile(file)}
                    className={`open-file cursor-pointer p-2 px-4 flex items-center w-fit gap-2 bg-slate-300 ${currentFile === file ? 'bg-slate-400' : ''}`}
                  >
                    <p className="font-semibold text-lg">{file}</p>
                  </button>
                ))}
              </div>
              <div className="code-editor-header flex justify-between items-center bg-slate-200 rounded-lg m-1 p-2">
                <h1 className="font-semibold text-lg p-2">{currentFile}</h1>
                <button className="p-2" onClick={() => setCurrentFile(null)}>
                  <i className="ri-close-fill"></i>
                </button>
              </div>
            </div>
            <div className="bottom flex flex-grow max-w-full shrink overflow-auto">
              {fileTree[currentFile] && (
                <textarea
                  className="w-full flex-grow p-2"
                  value={fileTree[currentFile]?.file?.contents || ""}
                  onChange={(e) =>
                    setFileTree({
                      ...fileTree,
                      [currentFile]: {
                        ...fileTree[currentFile],
                        content: e.target.value,
                      },
                    })
                  }
                ></textarea>
              )}
            </div>
            {console.log(fileTree[currentFile])}
          </div>
        )}
      </section>

      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-4 rounded max-h-72 overflow-y-auto">
            <header className="flex justify-end">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedUserId(new Set());
                }}
              >
                <i className="ri-close-line"></i>
              </button>
            </header>
            <div className="users flex flex-col gap-2">
              {users.map((user) => (
                <div
                  key={user._id}
                  className={`user flex gap-2 items-center justify-center m-2 hover:bg-slate-200 transition duration-150 p-2 rounded-md cursor-pointer ${
                    Array.from(selectedUserId).indexOf(user._id) !== -1
                      ? "bg-slate-200"
                      : ""
                  }`}
                  onClick={() => handleUserClick(user._id)}
                >
                  <div className="aspect-square relative rounded-full w-fit h-fit p-5 bg-slate-400 flex justify-center items-center">
                    <i className="ri-user-fill absolute"></i>
                  </div>
                  <h1 className="font-semibold text-lg">{user.email}</h1>
                </div>
              ))}
            </div>
            <button
              onClick={addCOllaborators}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Collaborators
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Project;
