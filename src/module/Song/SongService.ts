import httpService from "../../service/HttpService";
import ApiConfig from "../../service/ApiConfig";
import { ISong, ISongForm } from "./Song.type";

export const getSongListApi = async () => {
  return await httpService.get<ISong[]>(ApiConfig.Song);
};

export const createSongApi = async (data: ISongForm) => {
  return await httpService.post<ISong>(ApiConfig.Song, data);
};

export const deleteSongApi = async (id: number) => {
  const url = `${ApiConfig.Song}/${id}`;
  return await httpService.delete(url);
};

export const updateSongApi = async (id: number, data: ISongForm) => {
  const url = `${ApiConfig.Song}/${id}`;
  return await httpService.put(url, data);
};
