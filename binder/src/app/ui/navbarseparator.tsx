import clsx from "clsx";

interface NavbarSeparatorProps {
    mt?: number;
    mb?: number;
}

export default function NavbarSeparator({ mt = 4, mb = 4 }: NavbarSeparatorProps) {
    return <div className={`bg-separator m-auto w-11/12 h-px`}
    ></div>;
}