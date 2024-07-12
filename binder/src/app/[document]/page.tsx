import EndpointInfo from "@/app/ui/endpointinfo";
import * as fs from 'fs';
import EndpointPath from "@/app/ui/endpointpath";
import { links } from "@/app/navbarlinks";
import RequestMethod from "@/app/ui/requestmethod";
import Security from "../ui/security";

export default function Documentation({
    params,
}: {
    params: { document: string };
}) {
    const docCategory = links.find(link => link.href === `/${params.document}`)?.category || "";
    const docName = links.find(link => link.href === `/${params.document}`)?.name || "";

    const documentObject = JSON.parse(fs.readFileSync(`./src/resources/docs/${docCategory}/${params.document}.json`, 'utf-8'));

    return (
        <>
            <EndpointPath params={{ path: "", category: docCategory }} />
            <EndpointInfo params={{ name: docName, description: documentObject.description }} />
            <RequestMethod method={documentObject.method} endpoint={documentObject.endpoint} />
            <Security securityMethods={[documentObject]} />
        </>
    );
}