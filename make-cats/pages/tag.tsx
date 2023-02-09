import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@/store";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { setTags, tagActions } from "@/store/tags/reducer";
import { Tags } from "@/store/tags/types";

async function fetchData(): Promise<AxiosResponse<Tags>> {
  return axios.get("https://cataas.com/api/tags");
}

const queryKey = {
  getTags: "tagList",
};

const useGetTags = () => {
  return useQuery([queryKey.getTags, "asdf", "zxcv"], fetchData);
};

function Tag() {
  const { tags } = useSelector((state: AppState) => state.tagsStore);
  const dispatch = useDispatch();

  const queryClient = useQueryClient();
  const { data: tagsResponse } = useGetTags();

  const tagsData = tagsResponse?.data;
  console.log(tagsData);

  useEffect(() => {
    if (tagsData) {
      dispatch(setTags(tagsData));
    }
  }, [dispatch, tagsData]);

  console.log(tags);
  return <div>asdfasdf</div>;
}

export { Tag as default };
