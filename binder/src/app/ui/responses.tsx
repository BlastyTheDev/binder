import { DocumentObject } from "@/app/ui/security";
import clsx from "clsx";

export default function Responses({
    documentJson,
}: {
    documentJson: DocumentObject
}) {
    return (
        <div className="mt-7">
            <h2 className="text-2xl">Responses</h2>
            {documentJson.responses.map((response, index) => {
                let exampleResponseBody = <div className="mt-2">
                    <span className="">Response Contents</span>
                    <div className="mt-1 border-2 p-2 pl-3 pr-3 border-greyed-text bg-navbar-color rounded">
                        {Array.isArray(response.schema) && response.schema.map((field, index) => {
                            return <div key={index}>
                                <span>{field.name}</span>
                                <span className="ml-5 text-greyed-text">{field.type}</span>
                                <span> - {field.description}</span>
                            </div>;
                        })}
                    </div>
                </div>
                if (!(response.status >= 200 && response.status <= 226))
                    exampleResponseBody = <></>
                return (
                    <div key={index} className={clsx("w-full mt-1 mb-3 h-auto border-[3px] p-3 pl-4 pr-4 rounded",
                        {
                            "border-put-method": response.status >= 100 && response.status <= 103,
                            "border-get-method": response.status >= 200 && response.status <= 226,
                            "border-post-method": response.status >= 300 && response.status <= 308,
                            "border-delete-method": response.status >= 400
                        }
                    )}>
                        <span className="text-xl">{response.status}</span>
                        <span className="text-greyed-text ml-4 align-text-bottom">{response.description}</span>
                        {exampleResponseBody}
                    </div>
                );
            })}
        </div>
    );
}