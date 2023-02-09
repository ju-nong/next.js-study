import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@/store";
import { useQuery } from "react-query";
import { tagActions } from "@/store/tags/reducer";

async function fetchData() {
    const { data } = await axios.get("https://cataas.com/api/tags");

    return data;
}

function Tag() {
    const state = useSelector((state: AppState) => state.tagsStore);
    const dispatch = useDispatch();

    useEffect(() => {
        const { data } = useQuery("getTags", fetchData);

        if (data?.length) {
            dispatch(tagActions.getTags(data));
        }

        console.log(state);
    }, []);

    return <div>asdfasdf</div>;
}

export { Tag as default };
