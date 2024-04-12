import { Pen } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Navbar() {
    return (
        <header className="mb-8">
            <div className="flex items-center justify-between w-full px-4 py-4 md:py-4">
                <div className="flex items-center space-x-4">
                    <Link className="flex items-center space-x-2" href="#">
                        <Pen className="w-8 h-8" />
                        <span className="text-xl font-bold tracking-tighter">Scribble with Friends</span>
                    </Link>
                </div>
            </div>
            <Separator />
        </header>
    );
}
