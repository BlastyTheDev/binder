import Link from "next/link";

export default function Navbar() {
    return (
          <div className=" bg-navbar-color w-1/5 h-full">
            <h1 className="font-semibold text-4xl pt-2.5 pl-2.5">Project Name Here</h1>
            <h3 className="text-greyed-text text-xl pt-0.5 pl-2.5">API Documentation</h3>

            <div className="bg-separator m-auto mt-4 w-11/12 h-px"></div>

            <Link href={"/"}
              className="block w-11/12 h-[50px] bg-separator rounded m-auto pl-3 mt-2">
                <span className="material-symbols-outlined pt-3">description</span>
                <span className="text-xl pl-[30px] align-super">Overview</span>
            </Link>
          </div>
      );
}