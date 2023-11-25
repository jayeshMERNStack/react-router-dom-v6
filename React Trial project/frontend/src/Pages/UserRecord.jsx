import React from 'react'
import { useParams } from 'react-router-dom'


function UserRecord() {

    const {id} = useParams();

  return (
    <div>
      <h1>UserRecords Page</h1>
      <h2>User id is {id}</h2>
    </div>
  )
}

export default UserRecord
