import { Button, HStack, Input } from "@chakra-ui/react"
import { collection, addDoc } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { db } from "../../util/firebase"
import { Comment } from "../../types"

const AddForm = () => {

    const [description, setDescription] = useState("")

    const addComment: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (description === "") return

        const comment: Comment = {
            comment: description,
            event: "asd", // TODO: Current Event
            user: "asd" // TODO: Current User
        }

        const commentRef = collection(db, "comments")
        addDoc(commentRef, comment).then()

        setDescription("")
    }

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
}

export default AddForm