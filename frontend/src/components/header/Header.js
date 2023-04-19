import Link from "next/link";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  // const [isAuth, setIsAuth] = useState(false);

  // useLayoutEffect(() => {
  //   if (typeof window !== "undefined" && localStorage.getItem("jwtToken") !== null) {
  //     setIsAuth(true);
  //   }
  // }, []);

  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return !!localStorage.getItem("jwtToken");
  //   } else {
  //     return false;
  //   }
  // });

  // const handleLogout = () => {
  //   if (typeof window !== "undefined") {
  //     localStorage.removeItem("jwtToken");
  //   }
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      <div className="bg-blueGrey">
        <div className="container mx-auto px-10">
          <nav className="flex items-center justify-center flex-wrap bg-blueGrey p-4 mx-auto">
            <div className="flex items-center flex-shrink-0 text-white mr-10">
              <span className="font-semibold text-xl tracking-tight">My Movie Library</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-md lg:flex-grow">
                <Link href="/" legacyBehavior>
                  <a className="font-medium block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Home</a>
                </Link>
                <Link href="/movies" legacyBehavior>
                  <a className="font-medium block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Movies</a>
                </Link>
                <Link href="/tvshows" legacyBehavior>
                  <a className="font-medium block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> TV Shows</a>
                </Link>
                <Link href="/login" legacyBehavior>
                  <a className="font-medium block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Login</a>
                </Link>
                <Link href="/dashboard" legacyBehavior>
                  <a className="font-medium block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Dashboard</a>
                </Link>
              </div>
            </div>
            {/* {
              <div className="mt-5 lg:mt-0">
                {isLoggedIn ? (
                  <a className="font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" onClick={handleLogout}>
                    Logout
                  </a>
                ) : (
                  <Link href="/login" legacyBehavior>
                    <a className="font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Login</a>
                  </Link>
                )}
              </div>
            } */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
