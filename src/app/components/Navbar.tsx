'use client'
import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { useRouter, } from 'next/navigation';
import { getAuthUser, logout } from '../../../actions/user';
import Router from 'next/navigation';
import { UserContext } from '../../../utils/userContext';
import { usePathname } from 'next/navigation';
import { count } from 'console';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState(false)
  const [navNow, setNavNow] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const { user, setUser } = useContext(UserContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoutHandler = async () => {
    const res = await logout()
    if (res.success) {
      router.push("/")
      setAuthUser(false)
      setUser(false)
    }
  }



  useEffect(() => {
    console.log("user", user)
    setNavNow(pathname)
  })





  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className=' text-3xl ' >
              {/* <img className="h-8 w-auto" src="path/to/logo.png" alt="Logo" /> */}
              🍰
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M3 5h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
                />
              </svg>
            </button>
          </div>
          {/* Desktop menu */}

          {user ?
            <div className="hidden md:flex md:items-center">
              <Link
                href="/my-meme"
                className={` ${navNow === "/my-meme" ? "border-b-2" : ""}   ml-4 px-3 py-2  text-sm font-medium text-white hover:text-gray-200`}
              >
                My Memes
              </Link>

              <Link
                href="/"
                className={` ${navNow === "/" ? "border-b-2" : ""}   ml-4 px-3 py-2  text-sm font-medium text-white hover:text-gray-200`}
              >
                For You
              </Link>
            </div> : ""
          }

          {/* Login button */}

          <div className="hidden md:flex md:items-center">
            {user ?
              <span onClick={logoutHandler}
                className=" cursor-pointer ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
              >
                Logout
              </span> :
              <Link
                href={`/login`}
                type="button"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
              >
                Login
              </Link>
            }

          </div>


        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200"
          >
            Link 1
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200"
          >
            Link 2
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200"
          >
            Link 3
          </a>
          {/* Mobile login button */}
          <button
            type="button"
            className="block w-full px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
