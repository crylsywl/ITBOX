const Navbar = () => {
  return (
    <nav className="flex flex-row bg-blue-500 px-[240px] py-[20px] text-white justify-between items-center">
      <ul>
        <li className="text-[28px] font-bold">
          <a href="/">Income Expense</a>
        </li>
      </ul>
      <ul className="flex flex-row gap-8 font-semibold text-lg">
        <li className="">
          <a href="" className=" hover:underline">
            home
          </a>
        </li>
        <li>
          <a href="" className=" hover:underline">
            about
          </a>
        </li>
        <li>
          <a href="" className=" hover:underline">
            contact
          </a>
        </li>
      </ul>
      <ul>
        <li className="flex flex-row">
          <a
            href=""
            className="text-md font-semibold bg-blue-600 py-2 px-[20px] rounded-md"
          >
            login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
