import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
                {/* <Tabs defaultValue="join">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="join">Join</TabsTrigger>
                        <TabsTrigger value="host">Host</TabsTrigger>
                    </TabsList>
                    <TabsContent value="join"></TabsContent>
                    <TabsContent value="host">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you&apos;ll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs> */}
            </CardContent>
            <CardFooter className="flex gap-4">
                <Button>Host room</Button>
                <Button variant={"secondary"}>Join a room</Button>
            </CardFooter>
        </Card>
    );
}
