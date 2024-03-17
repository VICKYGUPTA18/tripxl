import React, { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-brand h-10 flex justify-center items-center">
      <div className="w-4/5 h-full flex justify-between gap-8">
        <div className="w-1/5 flex justify-center items-center">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
            alt=""
            className="h-[23px]"
          />
        </div>
        <div className="w-2/5 flex justify-between h-full ">
          <NavItemDropdown
            title="Home"
            className="left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col gap-2">
              {/* Dropdown items */}
              <div className="min-w-28">
                <a href="#" className="block py-1 hover:bg-white">
                  All
                </a>

                <a href="#" className="block py-1 hover:bg-white">
                  Movie
                </a>

                <a href="#" className="block py-1 hover:bg-white">
                  Tv show
                </a>
                {/* Add more dropdown items as needed */}
              </div>
            </div>
          </NavItemDropdown>
          {/* <NavItem title="Store" /> */}
          <NavItemDropdown
            title="Store"
            className="left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col gap-2">
              {/* Dropdown items */}
              <div className="min-w-28">
                <a href="#" className="block py-1 hover:bg-white">
                  All
                </a>

                <a href="#" className="block py-1 hover:bg-white">
                  Rent
                </a>

                <a href="#" className="block py-1 hover:bg-white">
                  Channels
                </a>
              </div>

              {/* Add more dropdown items as needed */}
            </div>
          </NavItemDropdown>
          <NavItem title="Live Tv" />
          <NavItemDropdown
            title="Category"
            className="left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col gap-2">
              {/* Dropdown items */}
              <div className="flex justify-between gap-32 px-10">
                <div className="w-[60%] flex flex-col gap-4">
                  <h1 className="flex items-start text-white font-semibold">
                    Genres
                  </h1>
                  <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md w-52">
                        Action and adventures
                      </button>
                      <button className=" flex items-start p-2 hover:bg-white rounded-md">
                        Animation
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Children
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Comedy
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Documentary
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Drama
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Fantacy
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Horror
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        International
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Music
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Mystery
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Romance
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] flex flex-col gap-4">
                  <h1 className="flex items-start text-white font-semibold">
                    Featured Collections
                  </h1>
                  <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Hindi
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        English
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Telgu
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Tamil
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Malayalam
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Kanada
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Marathi
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Punjabi
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Gujrati
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Bengali
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavItemDropdown>
        </div>
        <div className="w-3/12 flex justify-between h-full">
          {/* <NavItem title="Search" /> */}
          <div className="group flex justify-between h-full">
            <div className="font-medium px-2 text-[#AAAAAA] flex items-center text-[18px] cursor-pointer group-hover:bg-brand2 relative">
              {open ? (
                <svg
                  onClick={() => setOpen(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // class="h-6 w-6"
                  className={`h-8 w-8 ml-1 mt-1 transition-transform`}
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  onClick={() => setOpen(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-1 mt-1 transition-transform relative`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              )}

              {open && (
                <div
                  className={`w-auto absolute top-10  px-2 py-2 bg-brand2 rounded-b-lg left-1/2 transform -translate-x-1/2`}
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-brand2 border border-white pl-10 p-2 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <NavItem title="Try For Free" />
          <NavItemDropdown title="EN" className="right-0 ">
            <div className="flex flex-col gap-2">
              {/* Dropdown items */}
              <div className="flex justify-between gap-32 px-10">
                <div className="w-[50%] flex flex-col gap-4">
                  <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md w-52">
                        Bahasa Indonesia
                      </button>
                      <button className=" flex items-start p-2 hover:bg-white rounded-md">
                        Dansk
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Deutsch
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        English
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Español
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Français
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Italiano
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Magyar
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Nederlands
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Norsk
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Polski
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Português
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Suomi
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Svenska
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-4">
                  <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Türkçe
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Čeština
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Ελληνικά
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Русский
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        עברית
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        العربية
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        हिन्दी
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        ไทย
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        中文
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        日本語
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        한국어
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        Русский
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        עברית
                      </button>
                      <button className="flex items-start p-2 hover:bg-white rounded-md">
                        العربية
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavItemDropdown>

          <div className="group flex w-10 justify-between h-full">
            <div className="flex items-center font-medium text-[#AAAAAA] text-[18px] cursor-pointer group-hover:bg-brand2 relative">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgMTAwYzI3LjYxNCAwIDUwLTIyLjM4NiA1MC01MFM3Ny42MTQgMCA1MCAwIDAgMjIuMzg2IDAgNTBzMjIuMzg2IDUwIDUwIDUwWiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik04Ni43MTggODMuOTM5Qzc3LjU4MyA5My44MTYgNjQuNTE0IDEwMCA1MCAxMDBjLTE0LjczIDAtMjcuOTc0LTYuMzctMzcuMTI0LTE2LjUwNiAxLjIxMi0zLjA5IDIuOTIyLTUuOTAyIDUuMzA0LTguMjI4QzI1LjQ2IDY4LjE1NyAzOC40MjUgNjUuMjM1IDUwIDY1LjIzNWMxMS41NTQgMCAyMy42NTUgMi45MDYgMzAuOTMzIDkuOTkzIDIuNTEyIDIuNDQ2IDQuNDA1IDUuNDMgNS43ODUgOC43MVoiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNjkuNTIgMzcuMTFjLjc5NC0xMi4yMTMtNS44OS0yMi4yNjYtMTkuNDY4LTIyLjI2Ni0xMy41NzkgMC0yMC4yNjMgMTAuMDUzLTE5LjQ2OCAyMi4yNjUuNzk1IDEyLjIxMyA4Ljc5NCAyMC43MDMgMTkuNDY4IDIwLjcwMyAxMC42NzMgMCAxOC42NzMtOC40OSAxOS40NjgtMjAuNzAzWiIgZmlsbD0idXJsKCNjKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzRDNzE4RSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJCNDA1MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iNDEuNTU0IiB5MT0iMzAuMzQ3IiB4Mj0iODIuNzEyIiB5Mj0iNzEuNTM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIuODUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
                alt="User Icon"
                height={18}
                width={32}
              />
              <div
                className={`w-auto absolute hidden group-hover:flex flex-col top-10  py-2 bg-brand2 rounded-b-lg right-0 `}
              >
                <div className="flex flex-col gap-2">
                  {/* Dropdown items */}
                  <div className="min-w-48">
                    <a href="#" className="block py-1 hover:bg-white">
                      Sign In
                    </a>

                    <a href="#" className="block py-1 hover:bg-white">
                      Help
                    </a>

                    <a href="#" className="block py-1 hover:bg-white">
                      Watch Anywhere
                    </a>
                  </div>

                  {/* Add more dropdown items as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ title }) {
  return (
    <div className="group flex justify-between h-full">
      <div className="flex items-center font-medium text-[#AAAAAA] text-[18px] cursor-pointer group-hover:bg-brand2">
        {title}
      </div>
    </div>
  );
}

function NavItemDropdown({ title, children, className }) {
  return (
    <div className="group flex justify-between h-full">
      <div className="font-medium cursor-pointer group-hover:bg-brand2  flex items-center text-[#AAAAAA] text-[18px] relative">
        {title}
        {/* Dropdown Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-1 mt-1 transition-transform group-hover:rotate-180 `}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 16.418l6.223-6.223a1 1 0 0 0-1.414-1.414L10 13.586 4.191 7.777a1 1 0 0 0-1.414 1.414l6.223 6.223z"
            clipRule="evenodd"
          />
        </svg>
        {/* Dropdown Content */}
        <div
          className={`w-auto absolute hidden group-hover:flex flex-col top-10  py-2 bg-brand2 rounded-b-lg ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
