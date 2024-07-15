import clsx from "clsx";
import { DocumentObject } from "@/app/ui/security";

export default function Parameters({
    documentObject
}: {
    documentObject: DocumentObject
}) {
    return (
        <div className="mt-7">
            <span className="text-2xl">Parameters</span>
            <div className="w-full mt-1 mb-3 h-auto border-[3px] p-3 pl-4 border-greyed-text rounded">
                {documentObject.parameters.map((parameter, index) => {
                    return (
                        <div key={index} className="mt-0.5 mb-0.5">
                            <span>{parameter.name}</span>
                            <span className="text-greyed-text ml-5">{parameter.type}</span>
                            <span className={clsx("ml-5",
                                { "text-delete-method": parameter.required },
                            )}>{parameter.required ? "Required" : "Optional"}</span>
                            <span className="text-greyed-text"> in</span> {parameter.in}
                            <span className="text-greyed-text"> - {parameter.description}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}