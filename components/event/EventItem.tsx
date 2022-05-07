import { Event } from "../../types"
import { Heading, Box } from '@chakra-ui/react'

type Props = {
    event: Event
}

const EventItem = ({ event }: Props) => {
    return (
        <>
            <Box border="thin" borderColor="black">
            <strong>{event.name}</strong> 
            {/* <Button colorScheme="facebook" size='xs' onClick={like}>Like</Button> */}
            <br></br>
            {event.club}
            <br></br>
            {event.description}
            <br></br>
            {event.date.toDate().toDateString()}
            <br></br>
            {event.date.toDate().toTimeString()}
            </Box>
            <div> </div>
        </>
    )
}

export default EventItem
