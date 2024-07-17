import Category from "./category";
import NavbarLinks from "./navbarlinks";
import NavbarSeparator from "./navbarseparator";
import * as fs from 'fs'

export default function Navbar() {
    const path = "./src/resources/docs/";
    const categories = fs.readdirSync(path);
    return (
        <div className=" bg-navbar-color w-1/5 h-screen fixed top-0 overflow-auto ">
            <h1 className="font-semibold text-4xl pt-2.5 pl-2.5">RemoteHost</h1>
            <h3 className="text-greyed-text text-xl pt-0.5 pl-2.5">API Documentation</h3>
            <NavbarSeparator mt={4} />
            <NavbarLinks category="" />
            {categories.map((category, index) => {
                return <NavbarLinks key={index} category={category} />;
            })}
        </div>
      );
}