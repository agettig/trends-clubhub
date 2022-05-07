import { Button, HStack, Input } from "@chakra-ui/react"
import { collection, addDoc } from "firebase/firestore"
import { FormEventHandler, useEffect, useState } from "react"
import { db } from "../../util/firebase"
import { Comment } from "../../types"
import { useRouter } from "next/router"

const AddForm = () => {
    const [param, setParam] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()

    useEffect(() => {
        if(!router.isReady) return
        const query = router.query
        const eventId = query.eventId as string
        setParam(eventId)
    }, [router.isReady])

    const addComment: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (description === "") return

        const comment: Comment = {
            comment: description,
            eventId: param, 
            userId: "Temp" // TODO: Current User
        }

        const commentRef = collection(db, "comments")
        addDoc(commentRef, comment).then()

        setDescription("")
    }

    if (param) {
        return (
            <form onSubmit={addComment}>
                <HStack>
                    <Input value={description}
                    type="text"
                    placeholder="I loved ..."
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button type="submit">Add Comment</Button>
                </HStack>
            </form>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default AddForm