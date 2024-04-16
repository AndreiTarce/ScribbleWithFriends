import RoomCard from "@/components/RoomCard";

export default function Home() {
    return (
        <main className="flex flex-col px-4">
            <div className="flex-1">
                <div className="container flex flex-col items-center justify-center space-y-6 text-center md:space-y-10">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Scribble with Friends
                        </h1>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Guess what your friends are drawing in real-time!
                        </p>
                    </div>
                </div>
                <section className="flex flex-col items-center justify-center py-10 space-y-6 md:py-16 md:space-y-10">
                    <RoomCard />
                </section>
            </div>
        </main>
    );
}
