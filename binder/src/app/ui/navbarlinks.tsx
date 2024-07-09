'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface LinkProps {
    category: string;
}

const links = [
    { category: "General", name: "Overview", href: "/", icon: "description" },
];

export default function NavbarLinks({ category }: LinkProps) {
    const pathname = usePathname();
    return (
        <>
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