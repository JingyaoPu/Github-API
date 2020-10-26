import React, { useEffect, useState, useRef } from "react";
import { getfollowing } from "../redux/effects";
import { connect } from "react-redux";
import styled from "styled-components";
import User from "../user/user";

const Following = (props) => {
  const { fetching, error, userName } = props;
  const listSize = useRef()
  const [followingList, setFollowingList] = useState([]);
  useEffect(() => {
      console.log(userName)
      userName && load(10)
  }, [userName]);

  const load = (size)=>{
    console.log("load")
    getfollowing(userName, 0, size)
        .then(
          (res) => {
            if (res.status === 200) {
              console.log(res);
              setFollowingList(res.data);
              listSize.current = size
            }
          },
          (error) => {
            console.log(error);
          }
        )
        .catch((err) => console.log(err));
  }
  return (
    <>
      {fetching ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>{error}</p>
      ) : followingList.length > 0 ? (
        <UserList>
          <>
            <p style = {{cursor:"pointer"}} onClick={()=>load(listSize.current+10)}>Load more</p>
            {followingList.map((e, index) => (
              <UserListItem key={index}>
                <User avatar_url={e.avatar_url} content={e.login} />
              </UserListItem>
            ))}
          </>
        </UserList>
      ) : (
        <p> no data </p>
      )}
    </>
  );
};
const UserList = styled.ul`
  overflow: scroll;
  list-style-type: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 600px;
  background-color: rgba(245,210,218);
  box-shadow: 0 3px 5px 0px rgba(255, 105, 135, .3);
`;

const UserListItem = styled.li`
  margin: 2px;
  background-color: #ffffff;
  padding: 3px;
  img {
    width: 50px;
    height: 50px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 245px;
  height: 60px;
`;

const mapStateToProps = (state) => ({
  fetching: state.status.fetching,
  error: state.status.error,
  userName: state.status.data?.login,
});
export default connect(mapStateToProps, null)(Following);
