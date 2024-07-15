export interface DocumentObject {
    description: string;
    method: string;
    endpoint: string;
    security: [
        {
            type: string;
            name: string;
            value: string;
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
                {
                    name: string;
                    type: string;
                    description: string;
                }
            ];
        }
    ];
}

export default function Security({
    documentObject,
}: {
    documentObject: DocumentObject
}) {
    return (
        <div className="mt-7">
            <h2 className="text-2xl">Security</h2>
            {Array.isArray(documentObject) && documentObject.map((method, index) => {
                const lock = method.security.length < 1 ? "lock_open" : "lock";
                if (method.security.length < 1) {
                    return (
                        <div key={index} className="w-full mt-1 mb-3 h-auto border-[3px] p-2 pl-3 pt-1.5 border-greyed-text rounded">
                            <span className="material-symbols-outlined align-text-bottom mr-2">{lock}</span>
                            <span className="text-xl">None</span>
                        </div>
                    );
                } else {
                    return documentObject.map((security, index) => {
                        return (
                            <div key={index} className="w-full mt-1 mb-3 h-auto border-[3px] p-2 pl-3 pt-1 border-greyed-text rounded">
                                <span className="material-symbols-outlined align-text-bottom mr-2">{lock}</span>
                                <span className="text-xl">{security.type}</span>
                                <br className="mt-2 mb-2" />
                                <span className="ml-1">{security.name}</span>
                                <span className="ml-5 text-greyed-text">with value</span>
                                <span className="ml-1"> {security.value}</span>
                                <span className="ml-5 text-greyed-text">in {security.in}</span>
                            </div>
                        );
                    });
                }
            })}
        </div>
    );
}