import { createSlice } from "@reduxjs/toolkit";
import { Tags } from "./types";

interface TagsState {
    tags: Tags;
}

const initialState: TagsState = {
    tags: ["d하이요"],
};

const TagSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        getTags(state, { payload }) {
            state.tags = payload;
        },
    },
});

const { actions: tagActions, reducer: tagReducer } = TagSlice;

export { tagActions, tagReducer };
export type { TagsState };
