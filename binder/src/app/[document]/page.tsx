import EndpointInfo from "@/app/ui/endpointinfo";
import * as fs from 'fs';
import EndpointPath from "../ui/endpointpath";

export default function Documentation({
    params,
}: {
    params: { document: string };
}) {
    return (
        <>
            <EndpointPath params={{ path: "folder", category: "category" }} />
            <EndpointInfo params={{ name: "Documentation", description: "API documentation" }} />
        </>
    );
}