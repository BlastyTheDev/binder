import { poppins } from "@/app/layout";
import EndpointInfo from "@/app/ui/endpointinfo";
import EndpointPath from "@/app/ui/endpointpath";
import RequestMethod from "@/app/ui/requestmethod";

export default function DocsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            </head>
            <body className={`${poppins.className} bg-page-background antialiased`}>
                {children}
                <main>
                    <div className="ml-[20vw] p-8">
                        <EndpointPath />
                        <EndpointInfo />
                        <RequestMethod />
                    </div>
                </main>
            </body>
        </html>
    );
}