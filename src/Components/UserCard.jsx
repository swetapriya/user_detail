import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { DisplayWrapper, DisplayStyled, CardStyled, CoverWrapper } from "./styled";
import {GET_USER_DETAILS, SELECTED_USER, SET_MODAL} from '../Redux/types'

const { Meta } = Card;

function UserCard() {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state) => state.reducer1.userDetails);
  const [userLikeDetails, setUserLikeDetails] = useState([]);

  const handleDelete = (user) => {
    const filterUser = usersDetails?.filter((item) => item.id !== user.id);
    dispatch({ type: GET_USER_DETAILS, userDetails: filterUser });
  };

  const handleEdit = (user) => {
    dispatch({ type: SELECTED_USER, user });
    dispatch({ type: SET_MODAL, isModalOpen: true });
  };

  const handleHeart = (user) => {
    const copyuserLikeDetails = [...userLikeDetails];
    const hasFilled = userLikeDetails.findIndex((item) => {
      return item.userId === user.id;
    });
    if (hasFilled !== -1) {
      copyuserLikeDetails.splice(hasFilled, 1, {
        userId: user.id,
        filled: !userLikeDetails[hasFilled]?.filled,
      });
      setUserLikeDetails([...copyuserLikeDetails]);
    } else {
      setUserLikeDetails([...userLikeDetails, { userId: user.id, filled: true }]);
    }
  };

  return usersDetails?.map((user) => {
    return (
      <>
        <CardStyled
          size="small"
          cover={
            <CoverWrapper
            >
              <img
                style={{ width: "200px", height: "200px" }}
                alt="avtar"
                src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
              />
            </CoverWrapper>
          }
          actions={[
            !userLikeDetails.find((item) => item.userId === user.id)?.filled ? (
              <HeartOutlined
                key={`heart-${user.name}`}
                onClick={() => handleHeart(user)}
                style={{ color: "red" }}
              />
            ) : (
              <HeartFilled
                onClick={() => handleHeart(user)}
                style={{ color: "red" }}
              />
            ),
            <EditOutlined key="edit" onClick={() => handleEdit(user)} />,
            <DeleteOutlined key="delete" onClick={() => handleDelete(user)} />,
          ]}
        >
          <Meta
            title={user?.name}
            description={
              <DisplayWrapper>
                <DisplayStyled>
                  <MailOutlined style={{ padding: "3px 2px" }} />
                  {user?.email}
                </DisplayStyled>
                <DisplayStyled>
                  <PhoneOutlined style={{ padding: "3px 2px" }} />
                  {user?.phone}
                </DisplayStyled>
                <DisplayStyled>
                  <GlobalOutlined style={{ padding: "3px 2px" }} />
                  {user?.website}
                </DisplayStyled>
              </DisplayWrapper>
            }
          />
        </CardStyled>
      </>
    );
  });
}

export default UserCard;
