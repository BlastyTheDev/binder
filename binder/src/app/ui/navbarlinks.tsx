'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Category from "@/app/ui/category";
import { links } from "@/app/navbarlinks";

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
                if (link.category === category)
                    return (
                        <Link key={link.name} href={link.href}
                        className={clsx("block w-11/12 h-[50px] rounded m-auto pl-3 mt-2",
                        { "bg-select-highlight": pathname === link.href })}>
                            <span className="material-symbols-outlined pt-3">{link.icon}</span>
                            <span className="text-xl pl-[30px] align-super">{link.name}</span>
                        </Link>
                    );
            })}
        </>
    );
}