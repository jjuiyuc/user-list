import React, { useState, useEffect } from "react";
import UserCard from "../component/UserCard";
import "../css/page/UserListPage.css";

const UserListPage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        // componentDidMount
        fetch("https://api.github.com/users?per_page=100&since=0")
            .then((result) => {
                return result.json();
            })
            .then((userData) => {
                console.log(userData);
                setUserList(userData);
            });
    }, []);

    return (
        <>
            <div className="list-container">
                <h1 className="list-title ">Github User</h1>
                <ul className="card-group-container d-flex flex-wrap">
                    {userList.length ? (
                        userList.map((el) => {
                            return (
                                <UserCard
                                    key={el.id}
                                    login={el.login}
                                    avatar_url={el.avatar_url}
                                    site_admin={el.site_admin}
                                />
                            );
                        })
                    ) : (
                        <p>none</p>
                    )}
                </ul>
            </div>
        </>
    );
};

export default UserListPage;
