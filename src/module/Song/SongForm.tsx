import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Input } from "../../components/Input";
import { ApiStatus, IUpdateSongActionProps, ISongForm } from "./Song.type";
import Style from "./SongFormStyle.module.css";
import {
  createSongAction,
  resetCreateListStatus,
  updateSongAction,
} from "./SongSlice";
import { useParams } from "react-router-dom";
import { toastError } from "../../components/ToastifyConfig";
interface IProps {
  isEditForm?: boolean;
}

const SongForm = (props: IProps) => {
  const { isEditForm } = props;
  const [name, setName] = useState("");
  const [description, setEmail] = useState("");

  const params = useParams();
  const SongIdToEdit = useRef(parseInt(params.id || ""));

  const { list } = useAppSelector((state: RootState) => state.song);

  useEffect(() => {
    if (isEditForm && SongIdToEdit.current) {
      // list of Song
      const SongData = list.filter((x) => x.id === SongIdToEdit.current);

      if (SongData.length) {
        setName(SongData[0].name);
        setEmail(SongData[0].description);
      }
    }
  }, [isEditForm]);

  const { createSongFormStatus, updateSongFormStatus } = useAppSelector(
    (state: RootState) => state.song
  );
  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data: ISongForm = { name, description };

    if (name && description) {
      if (isEditForm) {
        const dirtyFormData: IUpdateSongActionProps = {
          id: SongIdToEdit.current,
          data,
        };
        dispatch(updateSongAction(dirtyFormData));
      } else {
        const data: ISongForm = { name, description };
        dispatch(createSongAction(data));
      }
    } else {
      toastError("Please fill the form");
    }
  };

  useEffect(() => {
    if (createSongFormStatus === ApiStatus.success) {
      setName("");
      setEmail("");
      dispatch(resetCreateListStatus());
    }
  }, [createSongFormStatus]);

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={onSubmitForm}>
        <Input
          label="Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="Description"
          value={description}
          type="descrpition"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <div className={Style["btn-wrapper"]}>
          <input
            type="submit"
            value={isEditForm ? "Update" : "Create"}
            disabled={
              createSongFormStatus === ApiStatus.loading ||
              updateSongFormStatus === ApiStatus.loading
            }
          />
        </div>
      </form>
    </div>
  );
};

export default SongForm;
