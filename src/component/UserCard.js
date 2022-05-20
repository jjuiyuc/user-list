import React from "react";
import "../css/component/UserCard.css";

const UserCard = (props) => {
    const { login, avatar_url, site_admin } = props;

    return (
        <>
            <li className="list-card-container d-flex">
                <div className="list-card-img">
                    <img src={avatar_url} alt="圖片" />
                </div>
                <div className="list-card-info flex-grow">
                    <div className="list-card-head d-flex">
                        <h1 className="list-card-title">{login}</h1>
                    </div>

                    <div className="list-card-site-container">
                        <p className="list-card-site ">
                            site_admin：{site_admin ? "true" : "false"}
                        </p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default UserCard;
