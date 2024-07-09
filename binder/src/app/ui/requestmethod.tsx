import { roboto } from "@/app/layout";

export default function RequestMethod() {
    return (
        <div className={`w-[76vw] h-12 mt-7 border-get-method border-[3px] rounded
        ${roboto.className}`}>
          <div className={`absolute w-20 h-8 bg-get-method rounded-sm m-[0.3rem]
            font-medium text-lg text-center pt-0.5`}>GET
          </div>
          <div className="text-xl ml-[6rem] mt-[0.4rem]">
            /example/endpoint/folder
          </div>
        </div>
    );
}