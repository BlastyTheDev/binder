interface SecurityProps {
    description: string;
    method: string;
    endpoint: string;
    security: [
        {
            type: string;
            description: string;
            in: string;
        }
    ];
    parameters: [
        {
            name: string;
            description: string;
            required: boolean;
            type: string;
            in: string;
        }
    ];
    responses: [
        {
            status: number;
            description: string;
            schema: [
            ];
        }
    ];
}

export default function Security({
    securityMethods,
}: {
    securityMethods: Array<SecurityProps>;
}) {
    return (
        <div className="mt-7">
            <h2 className="text-2xl">Security</h2>
            {Array.isArray(securityMethods) && securityMethods.map((method, index) => {
                const lock = method.security.length < 1 ? "lock_open" : "lock";
                if (method.security.length > 0) {
                    console.log(method.security);
                    return method.security.map((security, index) => {
                        return (
                            <div key={index} className="w-[76vw] mt-1 h-auto border-[3px] border-greyed-text rounded">
                                <span className="material-symbols-outlined align-sub">{lock}</span>
                                <span className="text-xl">{security.type}</span>
                            </div>
                        );
                    });
                } else
                    return (
                        <div key={index} className="w-[76vw] mt-1 h-auto border-[3px] border-greyed-text rounded">
                            <span className="material-symbols-outlined">{lock}</span>
                            <span>None</span>
                        </div>
                    );
            })}
        </div>
    );
}