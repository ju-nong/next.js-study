import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setTags(state, { payload }: PayloadAction<Tags>) {
      state.tags = payload;
    },
  },
});

const { actions: tagActions, reducer: tagReducer } = TagSlice;

export { tagActions, tagReducer };
export type { TagsState };

export const { setTags } = TagSlice.actions;
export default TagSlice.reducer;
