import { SecurityProps } from "@/app/ui/security";

export default function Responses({
    documentJson,
}: {
    documentJson: SecurityProps
}) {
    return (
        <div className="mt-7">
            <h2 className="text-2xl">Responses</h2>
            {documentJson.responses.map((request, index) => {
                return (
                    <div key={index} className="w-[76vw] mt-1 mb-3 h-auto border-[3px] p-3 pl-4 rounded"></div>
                );
            })}
        </div>
    );
}