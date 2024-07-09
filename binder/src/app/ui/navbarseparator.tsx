import clsx from "clsx";

interface NavbarSeparatorProps {
    mt?: number;
}

// no idea what is going on here
// it just works good enough for some reason
// i cant tell if this dynamic tailwind className thing is working
export default function NavbarSeparator({ mt = 4 }: NavbarSeparatorProps) {
    return <div className={clsx("bg-separator m-auto w-11/12 h-px", `mt-${mt}`, `mb-4`)}></div>;
}