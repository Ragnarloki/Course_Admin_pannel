import React from "react";
import { useState } from "react";
import img from "../../assets/images/profileimg.jpg";
import { IoSearchOutline } from "react-icons/io5";  
import logo from "../../assets/images/logo.png"
import { Link, useLocation } from "react-router-dom";

export default function Profileattribute() {
  const tasks = [
    {
      id: 1,
      name: "Design pattern",
      date: "14 / 8 / 2024",
      fileLink: "Link",
    },
    {
      id: 2,
      name: "Design pattern",
      date: "14 / 8 / 2024",
      fileLink: "Link",
    },
    {
      id: 3,
      name: "Design pattern",
      date: "14 / 8 / 2024",
      fileLink: "Not yet",
    },
  ];

  const location = useLocation();
  const users = location.state?.additionalData;

  const taskComplete = users.tasks.find(task => task.TaskComplete)?.TaskComplete || [];
  const Assignment = users.tasks.find(task => task.TaskComplete)?.TaskComplete || [];
  const Project = users.tasks.find(task => task.TaskComplete)?.TaskComplete || [];


  const [isToggled, setisToggled] = useState(true);
  const [isClick, setisClick] = useState(false);
  const [isTriggered, setisTriggered] = useState(false);

 
  const handleTask = () => {
    setisToggled(true);
    setisClick(false);
    setisTriggered(false);
  };
  const handleAssignments = () => {
    setisToggled(false);
    setisClick(true);
    setisTriggered(false);
  };
  const handleProjects = () => {
    setisToggled(false);
    setisClick(false);
    setisTriggered(true);
  };

  return (
    <div>
          <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
          <div className="flex items-center">
            <Link to={'/CrntStudents/Current/'}>
            <h1 className="flex items-center">{'<'} Back </h1>
            </Link>
          </div> <h1  className="flex items-center">welcome to admin pannel</h1>
            <img src={logo} alt="logo" className="h-20 w-30 "></img>
          </div>
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-dark-blue mx-auto min-h-full w-[300px] pt-10">
        <nav>
          <div className="flex justify-center items-center text-light-yellow text-2xl pb-8 font-TimesNewRoman">
            Menu
          </div>
          <ul className="flex flex-col space-y-5 text-white justify-center items-center">
            <li className="flex items-center text-lg">Dashboard</li>
            <li className="flex items-center text-lg">Job & Intern</li>
            <li className="flex items-center text-lg">Community</li>
            <li className="flex items-center text-lg">Subscription</li>
            <li className="flex items-center text-lg">Admin Access</li>
            <li className="flex items-center text-lg">Event</li>
            <li className="flex items-center text-lg">Challenges</li>
            <li className="flex items-center text-lg">Offer Include</li>
            <li className="flex items-center text-lg">Log Out</li>
          </ul>
        </nav>
      </div>

      {/**Main content*/}
      <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full h-full p-5">
        <div className="flex flex-row justify-between w-full p-10">
          <div className="flex justify-start w-full space-x-5">
            <img
              src={users.img}
              alt=""
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold text-dark-blue">
              {users.name}
              </h2>
              <span className="text-dark-blue">student</span>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="w-[100px] h-[50px] bg-red-500 text-white rounded-lg">
              Eliminate
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-10 mx-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search here"
              className="py-2 px-4 w-[400px] text-white rounded bg-dark-blue border border-gray-400"
            ></input>
            <span className="mt-1 mx-auto bg-light-yellow p-2 rounded-full">
              <IoSearchOutline size="20" />
            </span>
          </div>
        </div>

        <div className=" flex justify-center items-center w-full h-full mx-auto">
          <button
            className={`${
              isToggled
                ? "bg-light-yellow text-dark-blue px-4 py-2 rounded w-full h-[50px]"
                : "bg-dark-blue text-white px-4 py-2 rounded w-full h-[50px]"
            }`}
            onClick={() => handleTask()}
          >
            Task Completed
          </button>
          <button
            className={`${
              isClick
                ? "bg-light-yellow text-dark-blue px-4 py-2 rounded w-full h-[50px]"
                : "bg-dark-blue text-white px-4 py-2 rounded w-full h-[50px]"
            }`}
            onClick={() => handleAssignments()}
          >
            Assignment
          </button>
          <button
            className={`${
              isTriggered
                ? "bg-light-yellow text-dark-blue px-4 py-2 rounded w-full h-[50px]"
                : "bg-dark-blue text-white px-4 py-2 rounded w-full h-[50px]"
            }`}
            onClick={() => handleProjects()}
          >
            Project
          </button>
        </div>

        {isToggled && (
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center pt-10">
              <h2 className="text-xl text-center font-bold">Completed Tasks</h2>
            </div>

            {/* User Table */}
            <table className="w-full h-full bg-dark-blue rounded-lg mt-10 mx-auto mb-10">
              <thead>
                <tr className="bg-light-yellow text-dark-blue">
                  <th className="py-2 px-4">Tasks ID</th>
                  <th className="py-2 px-4">Task name</th>
                  <th className="py-2 px-4">Completed Date</th>
                  <th className="py-2 px-4">Drive link</th>
                </tr>
              </thead>
              <tbody>
                {taskComplete.map((tasks,index) => (
                  <tr
                    key={index}
                    className="text-center text-white border-b mx-auto"
                  >
                    <td className="py-2 px-16 text-center ">{tasks.id}</td>
                    <td className="py-2 px-16 ">
                      {tasks.name}
                    </td>
                    <td className="py-2 px-16 ">
                      {tasks.date}
                    </td>
                    <td className="py-2 px-16  ">
                      {tasks.fileLink}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isClick && (
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center pt-10">
              <h2 className="text-xl text-center font-bold">Assignments</h2>
            </div>

            {/* User Table */}
            <table className="w-full h-full mb-10 bg-dark-blue rounded-lg mt-10 mx-auto">
              <thead>
                <tr className="bg-light-yellow text-dark-blue">
                  <th className="py-2 px-4">Tasks ID</th>
                  <th className="py-2 px-4">Task name</th>
                  <th className="py-2 px-4">Completed Date</th>
                  <th className="py-2 px-4">Drive link</th>
                </tr>
              </thead>
              <tbody>
              {Assignment.map((tasks,index) => (
                  <tr
                    key={index}
                    className="text-center text-white border-b mx-auto"
                  >
                    <td className="py-2 px-16 text-center ">{tasks.id}</td>
                    <td className="py-2 px-16 ">
                      {tasks.name}
                    </td>
                    <td className="py-2 px-16 ">
                      {tasks.date}
                    </td>
                    <td className="py-2 px-16  ">
                      {tasks.fileLink}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isTriggered && (
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center pt-10">
              <h2 className="text-xl text-center font-bold">Projects</h2>
            </div>

            {/* User Table */}
            <table className="w-full h-full mb-10 bg-dark-blue rounded-lg mt-10 mx-auto">
              <thead>
                <tr className="bg-light-yellow text-dark-blue">
                  <th className="py-2 px-4">Tasks ID</th>
                  <th className="py-2 px-4">Task name</th>
                  <th className="py-2 px-4">Completed Date</th>
                  <th className="py-2 px-4">Drive link</th>
                </tr>
              </thead>
              <tbody>
              {Project.map((tasks,index) => (
                  <tr
                    key={index}
                    className="text-center text-white border-b mx-auto"
                  >
                    <td className="py-2 px-16 text-center ">{tasks.id}</td>
                    <td className="py-2 px-16 ">
                      {tasks.name}
                    </td>
                    <td className="py-2 px-16 ">
                      {tasks.date}
                    </td>
                    <td className="py-2 px-16  ">
                      {tasks.fileLink}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
