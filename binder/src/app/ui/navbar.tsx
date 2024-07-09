import Link from "next/link";
import NavbarLinks from "./navbarlinks";
import Category from "./category";
import NavbarSeparator from "./navbarseparator";

export default function Navbar() {
    return (
        <div className=" bg-navbar-color w-1/5 h-screen fixed top-0">
            <h1 className="font-semibold text-4xl pt-2.5 pl-2.5">Project Name Here</h1>
            <h3 className="text-greyed-text text-xl pt-0.5 pl-2.5">API Documentation</h3>

            <NavbarSeparator mt={4} mb={4} />

            <Category name="General" />
            <NavbarLinks category="General" />
        </div>
      );
}