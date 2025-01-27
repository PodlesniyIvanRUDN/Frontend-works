import { fetchPostList } from "../../api/Post"
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../Loader";
import { PostListView } from "./PostListView";
import { queryClient } from "../../api/queryClient";

export const FetchPostListView =() => {


const postListQuery = useQuery ({
        queryFn:()=> fetchPostList(),
        queryKey: ["posts"]
    }, queryClient)

    switch(postListQuery.status){
        case "pending":
            return <Loader/>
        case "success":
            return <PostListView postList={postListQuery.data.list}/>
        case "error":
            return (
            <div>
                <span>Error</span>
                <button onClick={() => postListQuery.refetch()}>Reload</button>
            </div>
            )
    }
}