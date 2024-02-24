import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export const OutletContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-6 flex flex-col items-center gap-8 mx-2">
      <div className="max-w-full w-[1900px] h-[85vh]  bg-white shadow-lg rounded-3xl overflow-hidden">
        {children}
      </div>

      <Navbar />
    </div>
  );
};

const Navbar = () => {
  const cn =
    "px-4 py-2 rounded-md  font-semibold shadow-lg border border-slate-200";

  return (
    <div className="p-4 bg-white shadow-md rounded-xl flex items-center fixed bottom-5 sm:bottom-20 gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return `${
            isActive ? "!bg-indigo-500 text-white" : "text-slate-500"
          } ${cn}`;
        }}
      >
        flow
      </NavLink>

      <NavLink
        className={({ isActive }) => {
          return `${
            isActive ? "!bg-indigo-500 text-white" : "text-slate-500"
          } ${cn}`;
        }}
        to="/theremin-mousemove"
      >
        mousemove
      </NavLink>
    </div>
  );
};
