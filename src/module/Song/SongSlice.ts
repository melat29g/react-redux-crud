import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastError, toastSuccess } from "../../components/ToastifyConfig";
import {
  ApiStatus,
  IUpdateSongActionProps,
  ISongForm,
  ISongState,
} from "./Song.type";
import {
  createSongApi,
  deleteSongApi,
  getSongListApi,
  updateSongApi,
} from "./SongService";

const initialState: ISongState = {
  list: [],
  listStatus: ApiStatus.ideal,
  createSongFormStatus: ApiStatus.ideal,
  updateSongFormStatus: ApiStatus.ideal,
};

export const getSongListAction = createAsyncThunk(
  "Song/getSongListAction",
  async () => {
    const response = await getSongListApi();
    return response.data;
  }
);

export const createSongAction = createAsyncThunk(
  "Song/createSongAction",
  async (data: ISongForm) => {
    const response = await createSongApi(data);
    return response.data;
  }
);

export const deleteSongAction = createAsyncThunk(
  "Song/deleteSongAction",
  async (id: number) => {
    await deleteSongApi(id);
    return id;
  }
);

export const updateSongAction = createAsyncThunk(
  "Song/updateSongAction",
  async ({ id, data }: IUpdateSongActionProps) => {
    const response = await updateSongApi(id, data);
    return response.data;
  }
);

const SongSlice = createSlice({
  name: "Song",
  initialState,
  reducers: {
    resetCreateListStatus: (state) => {
      state.createSongFormStatus = ApiStatus.ideal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSongListAction.pending, (state) => {
      state.listStatus = ApiStatus.loading;
    });
    builder.addCase(getSongListAction.fulfilled, (state, action) => {
      state.listStatus = ApiStatus.ideal;
      state.list = action.payload;
    });
    builder.addCase(getSongListAction.rejected, (state) => {
      state.listStatus = ApiStatus.error;
    });
    builder.addCase(createSongAction.pending, (state) => {
      state.createSongFormStatus = ApiStatus.loading;
    });
    builder.addCase(createSongAction.fulfilled, (state) => {
      state.createSongFormStatus = ApiStatus.success;
      toastSuccess("Song created");
    });
    builder.addCase(createSongAction.rejected, (state) => {
      state.createSongFormStatus = ApiStatus.error;
      toastSuccess("Error while creating Song");
    });
    builder.addCase(deleteSongAction.fulfilled, (state, action) => {
      const newList = state.list.filter((x) => x.id !== action.payload);
      state.list = newList;
    });
    builder.addCase(updateSongAction.pending, (state) => {
      state.updateSongFormStatus = ApiStatus.loading;
    });
    builder.addCase(updateSongAction.fulfilled, (state) => {
      state.updateSongFormStatus = ApiStatus.ideal;
      toastSuccess("Song updated");
    });
    builder.addCase(updateSongAction.rejected, (state) => {
      state.updateSongFormStatus = ApiStatus.error;
      toastError("Error while updating Song");
    });
  },
});

export default SongSlice.reducer;
export const { resetCreateListStatus } = SongSlice.actions;
