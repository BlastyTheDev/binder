'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Category from "@/app/ui/category";
import { links } from "@/app/navbarlinks";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function NavbarLinks({
    category,
}: {
    category: string;
}) {
    const pathname = usePathname();
    const addCategory = category ? <Category name={category} /> : null;
    return (
        <>
            {addCategory}
            {links.map((link) => {
                const method = link.name === "Overview" ? "" : 
                    <div className={clsx(`float-right m-3 ml-0 pl-2 pr-2 rounded w-auto h-auto
                        ${roboto.className} font-medium relative`,
                    {
                        "bg-get-method": link.method === "GET",
                        "bg-post-method": link.method === "POST",
                        "bg-put-method": link.method === "PUT",
                        "bg-delete-method": link.method === "DELETE",
                    })}>{link.method}</div>;
                if (link.category === category)
                    return (
                        <Link key={link.name} href={link.href}
                        className={clsx("inline-block w-11/12 h-[50px] rounded m-auto pl-3 ml-3.5 mt-2",
                        { "bg-select-highlight": pathname === link.href })}>
                            <span className="material-symbols-outlined pt-3 flex">{link.icon}</span>
                            <p className="text-xl align-sub pl-[30px] truncate whitespace text-ellipsis inline-block w-[65%]">{link.name}</p>
                            {method}
                        </Link>
                    );
            })}
        </> 
    );
}