import React, { useState, useEffect } from "react"
import UserCard from "../component/UserCard"
import AxiosInstance from "../utils/api"
import "../css/page/UserListPage.css"

export default function UserListPage() {
  const
    [userList, setUserList] = useState([]),
    [error, setError] = useState(null),
    [requestData, setRequestData] = useState(true)

  useEffect(() => {
    if (!requestData) return

    setError(null)
    setRequestData(false)

    AxiosInstance.get(`/users?per_page=100&since=0`)
      .then((response) => {
        setUserList(response.data || [])
      })
      .catch(error => setError(error))
  }, [requestData])

  return (
    <div className="list-container">
      {error
        ? <>
          <div className="d-flex justify-content-center">
            <h1 className="error">{error}</h1>
          </div>
        </>
        : (
          <>
            <h1 className="list-title">Github Users</h1>
            <ul className="card-group-container d-flex flex-wrap">
              {userList.length ? (
                userList?.map((el) => (
                  <UserCard
                    key={el.id}
                    login={el.login}
                    avatar_url={el.avatar_url}
                    site_admin={el.site_admin}
                  />
                ))
              ) : (
                <p>none</p>
              )}
            </ul>
            )
          </>
        )}
    </div>
  )
}


