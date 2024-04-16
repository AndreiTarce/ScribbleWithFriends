import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export default function RoomCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Play now</h2>
                </CardTitle>
                <CardDescription>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                        Enter your nickname and choose an option.
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Label htmlFor="nickname">Nickname</Label>
                <Input id="nickname" className="flex-1 min-w-0 mb-2" placeholder="Enter your nickname" type="text" />
                <Label htmlFor="room_code">Room Code</Label>
                <Input id="room_code" className="flex-1 min-w-0 mb-2" placeholder="Enter your nickname" type="text" />
            </CardContent>
            <CardFooter className="flex flex-col gap-2 relative w-full justify-center items-center">
                <Button className="w-full">Host room</Button>
                <div className="flex flex-row items-center justify-center gap-2 w-full relative overflow-hidden">
                    <Separator className="grow" />
                    <span className="text-muted-foreground">or</span>
                    <Separator className="grow" />
                </div>
                <Button variant={"secondary"} className="w-full">
                    Join an existing room
                </Button>
            </CardFooter>
        </Card>
    );
}
