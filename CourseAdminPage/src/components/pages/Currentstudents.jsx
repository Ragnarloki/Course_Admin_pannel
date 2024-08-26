import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import Brain from "../../assets/images/Brain.png"
import Graph from "../../assets/images/Graph.png"
import Search from "../../assets/images/Search.png"
import logo from "../../assets/images/logo.png"

export default function Currentstudents() {

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

  // const Coursedata = [
  //   { title: "UI / UX design", count: 23 ,img:Graph},
  //   { title: "Java developer", count: 25,img:Brain },
  //   { title: "UI / UX design", count: 26 ,img:Graph},
  //   { title: "Java developer", count: 24 ,img:Brain},
  //   { title: "UI / UX design", count: 33 ,img:Search},
  //   { title: "Java developer", count: 24 ,img:Graph},
  //   { title: "UI / UX design", count: 29 ,img:Search},
  //   { title: "Java developer", count: 33 ,img:Graph},
  //   { title: "UI / UX design", count: 23 ,img:Brain},
  // ];

  const { id } = useParams();

  // Sample data
  const data = [
    { id: 1, title: "On Processing", count: 360 ,course:[ { title: "UI / UX design", count: 23 ,img:Graph},
      { title: "Java developer", count: 25,img:Brain },
      { title: "UI / UX design", count: 26 ,img:Graph},
      { title: "Java developer", count: 24 ,img:Brain},
      { title: "UI / UX design", count: 33 ,img:Search},
      { title: "Java developer", count: 24 ,img:Graph},
      { title: "UI / UX design", count: 29 ,img:Search},
      { title: "Java developer", count: 33 ,img:Graph},
      { title: "UI / UX design", count: 23 ,img:Brain},]},
    { id: 2, title: "Course Completed", count: 670 ,course:[ { title: "UI / UX design", count: 23 ,img:Graph},
      { title: "Java developer", count: 25,img:Brain },
      { title: "UI / UX design", count: 26 ,img:Graph},
      { title: "Java developer", count: 24 ,img:Brain},
      { title: "UI / UX design", count: 33 ,img:Search},
      { title: "Java developer", count: 24 ,img:Graph},
      { title: "UI / UX design", count: 29 ,img:Search},
      { title: "Java developer", count: 33 ,img:Graph},
      { title: "UI / UX design", count: 23 ,img:Brain},]},
    { id: 3, title: "Overall Students", count: 1030 ,course:[ { title: "UI / UX design", count: 23 ,img:Graph},
      { title: "Java developer", count: 25,img:Brain },
      { title: "UI / UX design", count: 26 ,img:Graph},
      { title: "Java developer", count: 24 ,img:Brain},
      { title: "UI / UX design", count: 33 ,img:Search},
      { title: "Java developer", count: 24 ,img:Graph},
      { title: "UI / UX design", count: 29 ,img:Search},
      { title: "Java developer", count: 33 ,img:Graph},
      { title: "UI / UX design", count: 23 ,img:Brain},]}
  ];

  // Find the data item with the matching ID
  const item = data.find(item => item.id === parseInt(id, 10));
  
  if (!item) {
    return <div>No data found for this ID.</div>;
  }

  return (
    <div>
          <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
     <div className="flex items-center">
     <Link to={'/Mainpage'}> 
        <h1 >{'<'} Back </h1>
     </Link>
      </div>
     <h1  className="flex items-center">welcome to admin pannel</h1>
      <img src={logo} alt="logo" className="h-20 w-30 "></img>
    </div>
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col items-center min-h-full bg-dark-blue w-[300px] pt-16">
        <nav>
          <div className="flex justify-center items-center text-light-yellow text-2xl lg:pb-8 font-TimesNewRoman">
            Menu
          </div>
          <ul className="flex flex-col space-y-5 mb-[50px] text-white justify-center items-center">
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

      {/* Main Content */}
      <div className="bg-[#FAF2BE] w-full h-full pl-5 pr-5 pt-5 pb-5">
        <header className="flex justify-between items-center mb-8 bg-dark-blue w-full mx-auto rounded-lg lg:pl-5 lg:pr-5 lg:pt-5 lg:pb-5">
          <div className="flex space-x-4">
            <button className=" text-white bg-dark-blue py-2 px-4 rounded">
              Internship
            </button>
            <button className="bg-light-yellow text-black py-2 px-4 rounded">
              Courses
            </button>
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
              Training
            </button>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search here"
              className="py-2 px-4 rounded border border-gray-400"
            ></input>
            <span className="mt-1 mx-auto bg-light-yellow p-2 rounded-full">
              <IoSearchOutline size="20" />
            </span>
          </div>
        </header>
        
        <div className=" flex justify-center items-center w-[95%] h-full my-8 mx-auto">
          <button
            className={`${
              isToggled
                ? "bg-dark-blue text-light-yellow px-4 py-2 rounded-xl w-full h-[100px]"
                : "bg-white text-dark-blue px-4 py-2 rounded-xl w-full h-[100px]"
            }`}
            onClick={() => handleTask()}
          >
            Task Completed
          </button>
          <button
            className={`${
              isClick
                ? "bg-dark-blue text-light-yellow px-4 py-2 rounded-xl w-full h-[100px]"
                : "bg-white text-dark-blue px-4 py-2 rounded-xl w-full h-[100px]"
            }`}
            onClick={() => handleAssignments()}
          >
            Assignment
          </button>
          <button
            className={`${
              isTriggered
                ? "bg-dark-blue text-light-yellow px-4 py-2 rounded-xl w-full h-[100px]"
                : "bg-white text-dark-blue px-4 py-2 rounded-xl w-full h-[100px]"
            }`}
            onClick={() => handleProjects()}
          >
            Project
          </button>
        </div>
      
             <div>
               <div className="flex justify-center">
        <div className="bg-light-yellow rounded-xl  font-semibold w-80 h-full mb-8">

          <div>
          <h2 className="text-3xl font-bold text-white text-center p-3">{item.count}</h2>
          <p className="text-dark-blue text-2xl text-center pb-3">{item.title}</p>
          </div>
        </div>
        </div>
        {/* Data Cards */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-16">
        {item.course.map((item,index)=>(
       
           <Link to={`/CrntStudents/Current`} key={index}>
           <div 
              className="bg-dark-blue text-white  rounded-xl grid grid-cols-2"
            >
              <div className="text-center p-5">
                
              <p className="text-3xl">{item.count}</p>
              <p className="text-xl text-light-yellow">{item.title}</p>
              </div>
              {/* Replace with actual image */}
              <div className=" flex justify-center p-3">
              
              <img className=" w-[100px] h-[100px] rounded" src={item.img} alt="" />
              </div>
            </div></Link> 
        ))}
           </div>
         </div>
        </div>
        </div>
        
      </div>
  );
}
