import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface CategoryProps {
    name: string;
}

export default function Category({ name }: CategoryProps) {
    return (
        <div className="pl-4">
            <div className={`${work_sans.className} text-base tracking-widest text-greyed-text`}
            >{name.toUpperCase()}</div>
        </div>
    );
}