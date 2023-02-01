import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { PostsType,Categories } from "../types";


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

export const useApiCat =()=>{

  const { data:catsFetched, isLoading, isFetched } = useQuery(
      ["cat"],
      async () => {
        return await api.get<Categories[]>("/categories").then((res) => res.data);
      },
      { initialData: [] }
    );

    return {catsFetched, isLoading, isFetched}

}


export default useApi