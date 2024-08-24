import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import img from "../assets/images/profileimg.jpg";
import logo from "../assets/images/logo.png";

export default function StudentDetails() {
  const [selectedGraph, setSelectedGraph] = useState(graphType[0]);

  const users = [
    // ... (your existing user data)
  ];

  const graphType = [
    {
      id: 1,
      graphName: "Task analysis",
      graphValue: [
        { id: 1, name: "Task", value: "60%" },
        { id: 2, name: "No.of.Task", value: "30" },
        { id: 3, name: "Completed", value: "156" },
      ],
      data: [
        { name: "Group A", value: 500 },
        { name: "Group B", value: 500 },
      ],
      color: ["lightgreen", "lightgray"],
      link: "/task-analysis"
    },
    {
      id: 2,
      graphName: "Project analysis",
      graphValue: [
        { id: 1, name: "Project", value: "30%" },
        { id: 2, name: "No.of.Project", value: "3" },
        { id: 3, name: "Completed", value: "1" },
      ],
      data: [
        { name: "Group A", value: 100 },
        { name: "Group B", value: 900 },
      ],
      color: ["#ff0000", "lightgray"],
      link: "/project-analysis"
    },
    // Add more graphType items as needed
  ];

  const handleLinkClick = (graph) => {
    setSelectedGraph(graph);
  };

  return (
    <div>
      <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
        <div className="flex items-center">
          <Link to={'/CrntStudents/Current'}>
            <h1 className="flex items-center">{'<'} Back </h1>
          </Link>
        </div>
        <h1 className="flex items-center">Welcome to Admin Panel</h1>
        <img src={logo} alt="logo" className="h-20 w-30 " />
      </div>
      <div className="flex flex-row w-full h-full mx-auto">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-dark-blue min-h-full w-[300px] pt-12">
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

        {/* Main content */}
        <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full h-full overflow-hidden p-5">
          <div className="flex flex-row justify-between w-full p-10">
            <div className="flex justify-start w-full space-x-5">
              <img
                src={img}
                alt=""
                className="w-[70px] h-[70px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-extrabold text-dark-blue">
                  Robert Charlos Fury
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

          {/* User Table */}
          <table className="w-[400px] h-full bg-dark-blue rounded-lg mx-auto">
            <thead>
              <tr className="bg-light-yellow text-dark-blue">
                <th className="py-2 px-8">Title</th>
                <th className="py-2 px-8" colSpan="2">
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="text-center text-white border-b mx-auto"
                >
                  <td className="py-2 px-16 text-justify pl-[150px] pr-[100px]">
                    {user.Title}
                  </td>
                  <td className="py-2 px-16 text-justify pl-[160px]">
                    {user.Data}
                  </td>
                  {user.Button && user.link && (
                    <Link to={user.link}>
                      <td className="mr-10">
                        <button className="bg-light-yellow text-dark-blue w-10 my-2 mr-6 mx-auto rounded-lg">
                          {user.Button}
                        </button>
                      </td>
                    </Link>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Data Cards */}
          <div className="grid grid-cols-2 gap-8 justify-center items-center mt-16">
            {graphType.map((g, index) => (
              <div
                key={index}
                className="flex flex-col bg-dark-blue text-light-yellow text-center rounded-lg w-[470px] h-[250px] justify-between items-center"
              >
                <h1 className="text-xl p-5 font-TimesNewRoman font-bold">{g.graphName}</h1>
                <div className="flex justify-center items-center mx-auto pr-5">
                  <div className="flex justify-start w-full">
                    <PieChart width={300} height={400}>
                      <Pie
                        data={selectedGraph.data}
                        cx={100}
                        cy={80}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                      >
                        {selectedGraph.data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={selectedGraph.color[index % selectedGraph.color.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                  <div className="flex justify-start text-justify w-full h-full">
                    <ul className={`text-[${selectedGraph.color[0]}]`} style={{ listStyleType: "disc" }}>
                      {selectedGraph.graphValue.map((gv, index) => (
                        <li id="" key={index} className="text-md text-white font-TimesNewRoman pt-7">
                          {gv.name} - {gv.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
