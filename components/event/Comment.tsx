import { Center, VStack, Heading, Box, Button, IconButton } from "@chakra-ui/react"
import { collection, deleteDoc, doc, getDoc, onSnapshot, query, where } from "firebase/firestore"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { db } from "../../util/firebase"
import { CommentWithId } from "../../types"
import { DeleteIcon } from "@chakra-ui/icons"

const CommentBox = ( {comment, eventId, userId, id}: CommentWithId ) => {

    const deleteComment = () => {
        const taskRef = collection(db, "comments")
        const docRef = doc(taskRef, id)
        deleteDoc(docRef).then()
      }

    return (
        <Center>
            <Box w="300px" borderWidth="1px" borderRadius="lg" p="2" textAlign="center">
                {comment}
            </Box>
            <IconButton
            aria-label="delete comment"
            size="xs"
            variant="ghost"
            colorScheme="red"
            icon={<DeleteIcon />}
            onClick={deleteComment}
            />
        </Center>
        
    )
}

const Comment = () => {
    const [param, setParam] = useState("")
    const [comments, setComments] = useState<CommentWithId[] | null>(null)
    const router = useRouter()

    const commentsRef = query(collection(db, "comments"))

    useEffect(() => {
        if(!router.isReady) return
        const query = router.query
        const eventId = query.eventId as string
        setParam(eventId)
    }, [router.isReady])

    useEffect(() => {
        if(!param) return
        const commentQuery = query(commentsRef, where("eventId", "==", param))

        const unsubscribe = onSnapshot(commentQuery, (querySnapshot) => {
            const commentArr = querySnapshot.docs.map(
              (comment) => ({ ...comment.data(), id: comment.id} as CommentWithId)
            );
            setComments(commentArr);
          });
          return unsubscribe;
      }, [param]);

      if (comments) {
        return (
            <div>
                {
                    <Center >
                        <VStack mt="25" spacing={8}>
                            {
                                comments.map((data) => 
                                <CommentBox key={data.id} {...data} />)
                            }
                        </VStack>
                    </Center>
                }
            </div>
        );
      } else {
          return (
              <div></div>
          )
      }
}

export default Comment