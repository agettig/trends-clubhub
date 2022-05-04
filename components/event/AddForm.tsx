import { Button, HStack, Input } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"

const AddForm = () => {

    const [description, setDescription] = useState("")

    const addComment: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (description === "") return

        // TODO: Database Stuff

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