import React from 'react'
import img from "../../assets/images/profileimg.jpg"

export default function Subscription() {

    const users = [
        { Title: "Plan Name", Data: "Advance plan" },
        { Title: "Plan Starts", Data: "16.07.2024" },
        { Title: "Plan ends", Data: "16.12.2024" },
        { Title: "Payment", Data: "xxxxx" },
        { Title: "Completion", Data: "1 Course" },

      ];

  return (
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
        <table className="w-[500px] h-full mx-auto bg-dark-blue rounded-lg mt-10">
          <thead>
            <tr className="bg-light-yellow text-dark-blue">
              <th className="py-4   text-justify pl-[120px] pr-[100px]">Title</th>
              <th className="py-4  text-justify pl-[120px] pr-[100px]">Data</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center text-white border-b mx-auto">
                <td className="py-4 px-8 text-justify pl-[100px] pr-[100px]">{user.Title}</td>
                <td className="py-4 px-8 text-justify pl-[100px] pr-[60px]">{user.Data}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className='font-semibold  mt-10 mb-5 flex justify-center bg-light-yellow text-black  h-20 w-48 rounded-lg'><div className='flex justify-center items-center mt-2'>Extended Subscription</div></button>

      </div>
    </div>
  )
}
