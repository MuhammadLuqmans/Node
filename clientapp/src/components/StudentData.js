import React from 'react'
import {  gql , useQuery } from '@apollo/client'


const GET_STUDENTSDATA = gql`
  query StudentsData {
    students{
      Name,
      Email,
      Age,
      id
    }
  }
`;


const StudentData =() => {
    const { loading, error, data } = useQuery(GET_STUDENTSDATA);
    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>error </h2>

    console.log(data)
    const { students } = data;
    return(
        <div>
            <h2>Sutdents List </h2>
            <table style={{ margin:"auto" }} border="1px" width="800px" height="200px">
                <thead>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    </thead>
                    <tbody>
                {students.map((std , ind)=>{
                    return(<tr key={ind}>
                            <td>{std.id}</td>
                            <td>{std.Name}</td>
                            <td>{std.Email}</td>
                            <td>{std.Age}</td>
                            </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentData;