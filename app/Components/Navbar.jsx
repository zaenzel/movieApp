import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#0d253f] p-3 px-20 text-white">
      <div className="navbar flex justify-between items-center ">
        <div className="logo bg-gradient-to-r from-[#90cea1] to-[#01b4e4]">
          <Link href={"/"} className="flex gap-2 items-center">
            <h1 className="text-3xl font-bold tracking-widest ">TMDB</h1>
            <div className="bg-white h-4 w-16 rounded-3xl" />
          </Link>
        </div>
        <ul className="hidden sm:flex gap-20 font-semibold ">
          <li>
            <Link href={"film"}>Film</Link>
          </li>
          <li>
            <Link href={"serialtv"}>Serial TV</Link>
          </li>
          <li>
            <Link href={"person"}>Orang</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
