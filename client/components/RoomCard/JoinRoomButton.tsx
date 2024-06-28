"use client";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { connect } from "http2";

export default function JoinRoomButton() {
    const [show, setShow] = useState(false);
    const form = useFormContext();

    return (
        <>
            {!show && (
                <Button
                    variant={"secondary"}
                    className="w-full"
                    type="button"
                    disabled={!form.formState.isValid}
                    onClick={() => {
                        setShow(true);
                        form.setValue("room_code", "");
                    }}
                >
                    Join an existing room
                </Button>
            )}
            {show && (
                <div className="w-full flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="room_code"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="room_code">Room code</FormLabel>
                                <FormControl>
                                    <Input
                                        id="room_code"
                                        className="flex-1 min-w-0 mb-2"
                                        placeholder="Room code"
                                        type="text"
                                        maxLength={36}
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>Paste the room code your friend sent you here.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full">Join</Button>
                </div>
            )}
        </>
    );
}
