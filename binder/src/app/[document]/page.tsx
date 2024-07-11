import EndpointInfo from "@/app/ui/endpointinfo";
import * as fs from 'fs';
import EndpointPath from "@/app/ui/endpointpath";
import { links } from "@/app/navbarlinks";
import RequestMethod from "@/app/ui/requestmethod";

export default function Documentation({
    params,
}: {
    params: { document: string };
}) {
    const docPath = links.find(link => link.href === `/${params.document}`)?.path || "";
    const docCategory = links.find(link => link.href === `/${params.document}`)?.category || "";
    const docName = links.find(link => link.href === `/${params.document}`)?.name || "";

    const file = fs.readFileSync(`./src/resources/docs/${docCategory}/${docPath}/${params.document}.txt`, 'utf-8');
    const lines = file.split('\n');
    const descriptionLine = lines.find(line => line.includes('Description:'));
    const description = descriptionLine ? descriptionLine.split('Description:')[1].trim() : '';

    const method = lines.find(line => line.includes('Method:'))?.split('Method:')[1].trim() || '';
    return (
        <>
            <EndpointPath params={{ path: docPath, category: docCategory }} />
            <EndpointInfo params={{ name: docName, description: description }} />
            <RequestMethod method={method} />
        </>
    );
}