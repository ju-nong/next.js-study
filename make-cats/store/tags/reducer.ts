import { createSlice } from "@reduxjs/toolkit";
import { Tags } from "./types";

interface TagsState {
    tags: Tags;
}

const initialState: TagsState = {
    tags: [],
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
