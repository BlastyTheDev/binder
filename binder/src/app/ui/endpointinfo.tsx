export default function EndpointInfo({
    params,
}: {
    params: { name: string, description: string };
}) {
    return (
        <>
            <h1 className="text-4xl mt-5">{params.name}</h1>
            <h3 className="text-base text-greyed-text mt-1">{params.description}</h3>
        </>
    );
}