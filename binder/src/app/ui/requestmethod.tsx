import { roboto } from "@/app/ui/fonts";
import clsx from "clsx";

export default function RequestMethod({
    method,
    endpoint,
}: {
    method: string;
    endpoint: string;
}) {
    return (
        <div className={clsx(`w-full h-12 mt-7 border-[3px] rounded ${roboto.className}`,
            method === "GET" ? "border-get-method" : "",
            method === "POST" ? "border-post-method" : "",
            method === "PUT" ? "border-put-method" : "",
            method === "DELETE" ? "border-delete-method" : "",
        )}>
          <div className={clsx(`absolute w-20 h-8`,
            method === "GET" ? "bg-get-method" : "",
            method === "POST" ? "bg-post-method" : "",
            method === "PUT" ? "bg-put-method" : "",
            method === "DELETE" ? "bg-delete-method" : "",
            `rounded-sm m-[0.3rem] font-medium text-lg text-center pt-0.5`)}>{method}
          </div>
          <div className="text-xl ml-[6rem] mt-[0.4rem]">
            {endpoint}
          </div>
        </div>
    );
}