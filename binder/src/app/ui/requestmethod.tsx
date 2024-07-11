import { roboto } from "@/app/layout";
import clsx from "clsx";

export default function RequestMethod({
    method,
}: {
    method: string;
}) {
    return (
        <div className={clsx(`w-[76vw] h-12 mt-7 border-[3px] rounded ${roboto.className}`,
            method === "GET" ? "border-get-method" : "",
            method === "POST" ? "border-post-method" : "",
            method === "PUT" ? "border-put-method" : "",
            method === "PATCH" ? "border-patch-method" : "",
            method === "DELETE" ? "border-delete-method" : "",
        )}>
          <div className={`absolute w-20 h-8 bg-get-method rounded-sm m-[0.3rem]
            font-medium text-lg text-center pt-0.5`}>GET
          </div>
          <div className="text-xl ml-[6rem] mt-[0.4rem]">
            /example/endpoint/folder
          </div>
        </div>
    );
}