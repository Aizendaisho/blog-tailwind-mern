import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { PostsType } from "../types";


const useApi =()=>{

    const { data:postsFetched, isLoading, isFetched } = useQuery(
        ["post"],
        async () => {
          return await api.get<PostsType[]>("/posts").then((res) => res.data);
        },
        { initialData: [] }
      );

      return {postsFetched, isLoading, isFetched}

}

export default useApi