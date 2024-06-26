/*import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Modal } from "../../components/Modal";
import { ApiStatus, IUser } from "./User.type";
import { deleteUserAction, getUserListAction } from "./UserSlice";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [userDataToView, setUserDataToView] = useState<IUser | null>(null);
  const { list, listStatus } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const navigator = useNavigate();

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {listStatus === ApiStatus.loading && <tbody>List is loading</tbody>}
        {listStatus === ApiStatus.error && (
          <tbody>Error while loading list</tbody>
        )}

        {listStatus === ApiStatus.ideal &&
          list.map((user: IUser, index: number) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div>
                    <input
                      type="button"
                      value="View"
                      onClick={() => {
                        setUserDataToView(user);
                      }}
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => {
                        navigator(`/edit/${user.id}`);
                      }}
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => {
                        dispatch(deleteUserAction(user.id));
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
      {userDataToView && (
        <Modal
          title="User Details"
          onClose={() => {
            setUserDataToView(null);
          }}
        >
          <div>
            <div>
              <label> Name : {userDataToView.name}</label>
            </div>
            <div>
              <label> Email : {userDataToView.email}</label>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UserList;
*/

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Modal } from '../../components/Modal';
import { ApiStatus, ISong } from './Song.type';
import { deleteSongAction, getSongListAction } from './SongSlice';
import { useNavigate } from 'react-router-dom';
import { buttonStyles } from '../../styles/ButtonStyles';
const SongList = () => {
  const [SongDataToView, setSongDataToView] = useState<ISong | null>(null);
  const { list, listStatus } = useAppSelector((state: RootState) => state.song);
  const dispatch = useAppDispatch();

  const navigator = useNavigate();

  useEffect(() => {
    dispatch(getSongListAction());
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listStatus === ApiStatus.loading && <tr><td colSpan={4}>List is loading</td></tr>}
          {listStatus === ApiStatus.error && <tr><td colSpan={4}>Error while loading list</td></tr>}
          {listStatus === ApiStatus.ideal &&
            list.map((Song: ISong, index: number) => {
              return (
                <tr key={Song.id}>
                  <td>{index + 1}</td>
                  <td>{Song.name}</td>
                  <td>{Song.description}</td>
                  <td>
                    <div>
                      <input
                        type="button"
                        value="View"
                        className={buttonStyles.toString()}
                        onClick={() => {
                          setSongDataToView(Song);
                        }}
                      />
                      <input
                        type="button"
                        value="Edit"
                        className={buttonStyles.toString()}
                        onClick={() => {
                          navigator(`/edit/${Song.id}`);
                        }}
                      />
                      <input
                        type="button"
                        value="Delete"
                        className={buttonStyles.toString()}
                        onClick={() => {
                          dispatch(deleteSongAction(Song.id));
                        }}
                      />                  </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {SongDataToView && (
        <Modal
          title="Song Details"
          onClose={() => {
            setSongDataToView(null);
          }}
        >
          <div>
            <div>
              <label> Name : {SongDataToView.name}</label>
            </div>
            <div>
              <label> Description : {SongDataToView.description}</label>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SongList;