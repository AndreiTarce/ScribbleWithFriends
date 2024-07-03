"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import JoinRoomButton from "./JoinRoomButton";
import { socket } from "@/lib/socket";
import { useEffect } from "react";
import { Socket } from "socket.io-client";

const formSchema = z.object({
    nickname: z.string().min(4, { message: "Nickname must be at least 4 characters long." }).max(20),
    room_code: z.string().length(36, { message: "Room code must be a valid code." }),
});

export default function RoomCard() {
    const connect = (roomId: string) => {
        // socket.emit("test", new Date());
        console.log(roomId);
        socket.emit("room:create", roomId);
    };

    useEffect(() => {
        socket.on("room:create", (socket: Socket) => {
            console.log(socket);
        });

        socket.on("client:joined", (socket: Socket) => {
            console.log(socket);
        });

        socket.on("error", (error: Error) => console.log(error.message));
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nickname: "",
            room_code: crypto.randomUUID(),
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // console.log(values);
        connect(values.room_code);
    };

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

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="nickname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="nickname">Nickname</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="nickname"
                                            className="flex-1 min-w-0 mb-2"
                                            placeholder="Enter your nickname"
                                            type="text"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2 relative w-full justify-center items-center">
                        <Button className="w-full" disabled={!form.formState.isValid} type="submit">
                            Host room
                        </Button>

                        <div className="flex flex-row items-center justify-center gap-2 w-full relative overflow-hidden">
                            <Separator className="grow" />
                            <span className="text-muted-foreground">or</span>
                            <Separator className="grow" />
                        </div>

                        <JoinRoomButton />
                    </CardFooter>
                </form>
            </FormProvider>
        </Card>
    );
}
