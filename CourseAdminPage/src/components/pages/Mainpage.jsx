import React from "react";
import { Link } from "react-router-dom";
import Currentstudents from "./Currentstudents";
import { IoSearchOutline } from "react-icons/io5";
import Brain from "../../assets/images/Brain.png"
import Graph from "../../assets/images/Graph.png"
import Search from "../../assets/images/Search.png"
import logo from "../../assets/images/logo.png"

export default function Mainpage() {
  const data = [
    {id:1, title: "On Processing", count: 360 ,course:[ { title: "UI / UX design", count: 23 ,img:Graph},
      { title: "Java developer", count: 25,img:Brain },
      { title: "UI / UX design", count: 26 ,img:Graph},
      { title: "Java developer", count: 24 ,img:Brain},
      { title: "UI / UX design", count: 33 ,img:Search},
      { title: "Java developer", count: 24 ,img:Graph},
      { title: "UI / UX design", count: 29 ,img:Search},
      { title: "Java developer", count: 33 ,img:Graph},
      { title: "UI / UX design", count: 23 ,img:Brain},]},
    {id:2, title: "Course Completed", count: 670,course:[ { title: "UI / UX design", count: 23 ,img:Graph},
      { title: "Java developer", count: 25,img:Brain },
      { title: "UI / UX design", count: 26 ,img:Graph},
      { title: "Java developer", count: 24 ,img:Brain},
      { title: "UI / UX design", count: 33 ,img:Search},
      { title: "Java developer", count: 24 ,img:Graph},
      { title: "UI / UX design", count: 29 ,img:Search},
      { title: "Java developer", count: 33 ,img:Graph},
      { title: "UI / UX design", count: 23 ,img:Brain},] },
    {id:3, title: "Overall Students", count: 1030 ,course:[ { title: "UI / UX design", count: 23 ,img:Graph},
      { title: "Java developer", count: 25,img:Brain },
      { title: "UI / UX design", count: 26 ,img:Graph},
      { title: "Java developer", count: 24 ,img:Brain},
      { title: "UI / UX design", count: 33 ,img:Search},
      { title: "Java developer", count: 24 ,img:Graph},
      { title: "UI / UX design", count: 29 ,img:Search},
      { title: "Java developer", count: 33 ,img:Graph},
      { title: "UI / UX design", count: 23 ,img:Brain},]}
  ];

  return (
    <div>
          <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
              <h1 className="flex items-center">{'<'} Back </h1>
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
      <div className="bg-[#FAF2BE] w-full min-h-full pl-5 pr-5 pt-5">
        <header className="flex justify-between items-center mb-8 bg-dark-blue w-full mx-auto rounded-lg lg:pl-5 lg:pr-5 lg:pt-5 lg:pb-5">
          <div className="flex space-x-4">
            <button className="bg-dark-blue text-white py-2 px-4 rounded">
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

        {/* Data Cards */}
        <div className=" flex justify-center flex-wrap">
          <div className="flex justify-center flex-wrap ">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-dark-blue text-white m-5 my-8 text-center pt-16 rounded-3xl flex-col w-[400px] h-[200px] justify-between items-center"
            >
              <p className="text-2xl justify-center items-center">
                {item.count}
              </p>
              <p className="text-xl text-light-yellow">{item.title}</p>
              <Link to={`/CrntStudents/${item.id}`}>
                <span className="underline text-md justify-center items-center text-white">
                  See details
                </span>
              </Link>
            </div>
          ))}
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
