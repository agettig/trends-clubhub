import { Center, VStack, Heading, Box, Button } from "@chakra-ui/react"
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { db } from "../../util/firebase"
import { Comment } from "../../types"


const CommentBox = ( {comment, eventId, userId}: Comment ) => {
    return (
        <Box w="300px" borderWidth="1px" borderRadius="lg" p="2" textAlign="center">
            {comment}
        </Box>
    )
}

const Comment = () => {
    const [param, setParam] = useState("")
    const [comments, setComments] = useState<Comment[] | null>(null)
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
              (comment) => ({ ...comment.data()} as Comment)
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
                                <CommentBox {...data} />)
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