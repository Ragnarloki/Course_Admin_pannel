import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import img from "../../assets/images/profileimg.jpg";
import logo from "../../assets/images/logo.png";


export default function StudentDetails() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const users = location.state?.user;

  const handleSendData = () => {
    navigate(`/subscription/${users.id}`, { state: { additionalData: users } });
  };

  const { id } = useParams();

  const item = users;

  if (!item) {
    return <div>No data found for this ID.</div>;
  }

  const getGraphData = (details) => {
    const percentage = parseFloat(details.find((item) => item.id === 1).value) / 100;
    return [
      { name: "Completed", value: percentage },
      { name: "Remaining", value: 1 - percentage },
    ];
  };

  return (
    <div>
      <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
        <div className="flex items-center">
          <Link to={'/CrntStudents/Current/'}>
            <h1 className="flex items-center">{'<'} Back</h1>
          </Link>
        </div>
        <h1 className="flex items-center">Welcome to admin panel</h1>
        <img src={logo} alt="logo" className="h-20 w-30"></img>
      </div>
      <div className="flex flex-row w-full h-full mx-auto">
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

        <div className="bg-[#FAF2BE] flex flex-col justify-center items-center mx-auto w-full h-full overflow-hidden p-5">
          <div className="flex flex-row justify-between w-full p-10">
            <div className="flex justify-start w-full space-x-5">
              <img
                src={item.img}
                alt=""
                className="w-[70px] h-[70px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-extrabold text-dark-blue">
                  {item.name}
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

          <table className="w-[400px] h-full bg-dark-blue rounded-lg mx-auto">
            <thead>
              <tr className="bg-light-yellow text-dark-blue">
                <th className="py-2 px-8">Title</th>
                <th className="py-2 px-8" colSpan="2">Data</th>
              </tr>
            </thead>
            <tbody>
              {item.Details.map((user, index) => (
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
                  {/* <Link to={user.link}  > */}
                    <td className="mr-10">
                    <button  onClick={() => navigate(`${user.link}/${users.id}`, { state: { additionalData: users } })} className="bg-light-yellow text-dark-blue w-10 my-2 mr-6 mx-auto rounded-lg">
                           {user.Button}
                    </button>
                    </td>
                  {/* </Link> */}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid grid-cols-2 gap-8 justify-center items-center mt-16">
            {item.graphData.map((g, index) => (
              <div
                key={index}
                className="flex flex-col bg-dark-blue text-light-yellow text-center rounded-lg w-[470px] h-[250px] justify-between items-center"
              >
                <h1 className="text-xl p-5 font-TimesNewRoman font-bold">
                  {g.name}
                </h1>
                <div className="flex justify-center items-center mx-auto pr-5">
                  <div className="flex justify-start w-full">
                    <PieChart width={300} height={400}>
                      <Pie
                        data={getGraphData(g.details)}
                        cx={100}
                        cy={80}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                      >
                        {getGraphData(g.details).map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={g.color[index % g.color.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                  <div className="flex justify-start text-justify w-full -ml-3 h-full">
                    <ul
                      className={`text-[${g.color[0]}]`}
                      style={{ listStyleType: "disc" }}
                    >
                      {g.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-md text-white font-TimesNewRoman pt-7"
                        >
                          {detail.label} - {detail.value}
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
