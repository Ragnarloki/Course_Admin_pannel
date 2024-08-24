import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="w-full text-dark-blue text-2xl pl-2 md:pl-4 flex justify-between h-fit bg-white h-[100px]">
      <h1 className="flex items-center">{'<'} Back </h1>
      <h1  className="flex items-center">welcome to admin pannel</h1>
      <img src={logo} alt="logo" className="h-20 w-30 "></img>
    </div>
  )
}

export default Navbar