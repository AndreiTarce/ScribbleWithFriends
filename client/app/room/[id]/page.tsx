export default function Room({ params }: { params: { id: string } }) {
    return (
        <>
            <h1>Welcome to room {params.id}</h1>
        </>
    );
}
