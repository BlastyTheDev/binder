import clsx from "clsx";

export default function EndpointPath({
    params,
}: {
    params: { path: string, category: string };
}) {
    const pathParts = params.path.split("/");
    const pathElements = pathParts.map((part, index) => {
        return (
            <span key={index} className={clsx("text-2xl align-super pr-3",
                index === pathParts.length - 1 ? "font-bold" : "font-normal text-greyed-text"
            )}>{part}</span>
        );
    });
    const category = <span className="text-2xl text-greyed-text align-super pr-3">{params.category}</span>;
    return (
        <>
            {category}
            {pathElements.map((element, index) => {
                return (
                    <span key={index}>
                        <span className="material-symbols-outlined pr-3">chevron_right</span>
                        {element}
                    </span>
                );
            })}
        </>
    );
}