import {  Box, Button, ButtonSpinner, Center, ChakraProvider, Heading, VStack, Text, Stack } from "@chakra-ui/react"
import { query, collection, doc, getDoc, onSnapshot, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../util/firebase";
import { Event } from "../../types";
import AddForm from "./AddForm";
import Comment from "./Comment";

const Event = () => {
    const [param, setParam] = useState("")
    const [event, setEvent] = useState<Event | null>(null)
    const router = useRouter()

    const eventsRef = collection(db, "events")

    useEffect(() => {
        if(!router.isReady) return
        const query = router.query
        const eventId = query.eventId as string
        setParam(eventId)
    }, [router.isReady])

    useEffect(() => {
        if(!param) return
        const fetchData = async () => {
            const docRef = doc(eventsRef, param)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data())
                setEvent(docSnap.data() as Event)
            } else {
                console.log("No such document!")
            }
        }

        fetchData()
      }, [param]);

    if (event) {
        const timeStamp = event.date.seconds
        const date = new Date (timeStamp * 1000)
        const month = date.getMonth() + 1
        const day = date.getDate()
        const year = date.getFullYear()
        const hours = date.getHours()
        const minutes = "0" + date.getMinutes()

        return (
            <div>
                {
                    <Center>
                        <VStack spacing="3">
                            <Heading fontSize="50px">{event.name}</Heading>
                            <Text>{event.description}</Text>
                            <Text>Club: {event.club}</Text>
                            <Text>Date: {`${month}/${day}/${year}  ${hours}:${minutes}`}</Text>
                            <Text>Likes: {event.likes}</Text>
                            <AddForm />
                            <Comment />
                        </VStack>
                    </Center>
                }
            </div>
        );
    }
    return (
        <div></div>
    )
}

export default Event