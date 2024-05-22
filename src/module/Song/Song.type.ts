export interface ISong {
  id: number;
  name: string;
  description: string;
}

export enum ApiStatus {
  "loading",
  "ideal",
  "success",
  "error",
}

export interface ISongState {
  list: ISong[];
  listStatus: ApiStatus;
  createSongFormStatus: ApiStatus;
  updateSongFormStatus: ApiStatus;
}

export interface ISongForm {
  name: string;
  description: string;
}

export interface IUpdateSongActionProps {
  id: number;
  data: ISongForm;
}
