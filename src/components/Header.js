import pinterest from "./../images/pinterestLogo.png";
const Header = () => {
  return (
    <header className="p-6 flex gap-4 items-center">
      <div className="flex gap-1 items-center">
        <img className="w-8 h-8" src={pinterest} alt="pinterest" />
        <span className="text-red-600 font-bold text-lg">Pinterest</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-bold p-3 rounded-full cursor-pointer hover:bg-gray-100">
          Explore
        </span>
        <span className="font-bold p-3 rounded-full cursor-pointer hover:bg-gray-100">
          Get App
        </span>
        <span className="font-bold p-3 rounded-full cursor-pointer hover:bg-gray-100">
          Login
        </span>
        <span className="font-bold bg-gray-100 p-4 cursor-pointer rounded-full">
          Sign Up
        </span>
      </div>
    </header>
  );
};

export default Header;
