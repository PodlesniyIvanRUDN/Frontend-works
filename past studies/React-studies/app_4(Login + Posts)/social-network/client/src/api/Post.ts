import { useEffect, useState } from "react";
import { z } from "zod";
import { validateResponse } from "./ValidateResponse";


export const PostScheme = z.object({
    id: z.string(),
    text: z.string(),
    authorId: z.string(),
    createdAt: z.number(),
})

export type Post = z.infer<typeof PostScheme>

export const PostList = z.array(PostScheme)

export type PostList = z.infer<typeof PostList>

export const fetchPostListScheme = z.object({
    list: PostList
})

type fetchPostListResponse = z.infer <typeof fetchPostListScheme>

export function fetchPostList(): Promise<fetchPostListResponse>{
    return fetch("/api/posts")
    .then((response) => response.json())
    .then((data)=>fetchPostListScheme.parse(data))
}

interface IdleRequestState {
    status: "idle"
}

interface LoadingRequestState {
    status: "pending"
}

interface SuccessRequestState {
    status:"success";
    data: PostList
}

interface ErrorRequestState {
    status:"error";
    error: unknown;
}

type RequestState = IdleRequestState | LoadingRequestState | SuccessRequestState | ErrorRequestState;


export function UsePostList () {
    const [state, setState] = useState<RequestState>({status:"idle"})

    useEffect(()=>{
        if(state.status === "pending") {
        fetchPostList().then((data)=>{
            setState({status:"success", data: data.list})
        })
        .catch((error) =>{
            setState({status:'error', error})
        })
    }
    },[state])

    useEffect(() =>{
        setState({status:"pending"})
    }, [])

    const refetch = () => {
        setState({status:"pending"})
    }

    return {
        state,
        refetch
    }
    
}

export function createPost(text:string): Promise<void>{
    return fetch("/api/posts", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({text})
    }).then(validateResponse).then(() => undefined)
}