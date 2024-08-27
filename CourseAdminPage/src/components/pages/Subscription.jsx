import React from 'react'
import img from "../../assets/images/profileimg.jpg"
import logo from "../../assets/images/logo.png"
import { Link, useLocation } from 'react-router-dom';
export default function Subscription() {

  const location = useLocation();
  const users = location.state?.additionalData;

  if (!users) {
    return <div>No data available</div>;
  }


  return (
    <div>
          <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
          <div className="flex items-center">
            <Link to={'/CrntStudents/Current/'}>
            <h1 className="flex items-center">{'<'} Back </h1>
            </Link>
          </div>
             <h1  className="flex items-center">welcome to admin pannel</h1>
            <img src={logo} alt="logo" className="h-20 w-30 "></img>
          </div>
    <div className="flex flex-row w-full h-full mx-auto">
      {/* Sidebar */}
      <div className="flex flex-col items-center bg-dark-blue mx-auto min-h-full w-[300px] pt-16">
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
      <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full min-h-full p-5">
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

        {/* User Table */}
        <table className="w-[500px] h-full mx-auto bg-dark-blue rounded-lg mt-10">
          <thead>
            <tr className="bg-light-yellow text-dark-blue">
              <th className="py-4   text-justify pl-[120px] pr-[100px]">Title</th>
              <th className="py-4  text-justify pl-[120px] pr-[100px]">Data</th>
            </tr>
          </thead>
          <tbody>
            {users.Subscription.map((user,index) => (
              <tr key={index} className="text-center text-white border-b mx-auto">
                <td className="py-4 px-7 text-justify pl-[100px] pr-[50px]">{user.Title}</td>
                <td className="py-4 px-7 text-justify pl-[100px] pr-[60px]">{user.Data}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className='font-semibold  mt-10 mb-5 flex justify-center bg-light-yellow text-black  h-20 w-48 rounded-lg'><div className='flex justify-center items-center mt-2'>Extended Subscription</div></button>

      </div>
    </div>
    </div>

  )
}
