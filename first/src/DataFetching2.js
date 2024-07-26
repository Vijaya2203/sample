import { useEffect, useState } from "react";
import axios from 'axios';
function DataFetching2(){
    //create an state variable to assign response JSON
    const [data, setData] = useState([]);
    useEffect(()=> {
        const fetchMyData = async() =>{
           //const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
           const res = await axios.get('https://fakestoreapi.com/users');
           //console.log(res);
           const resData = await res.data;
           setData(resData);
           //console.log(resData); 
        }
        fetchMyData();
    })

    return(
        <div>Fetching the Data
        {data.map((dataItem, index)=>
        <tr key={index}>{dataItem.title}</tr>
        )}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">USERID</th>
      <th scope="col">TITLE</th>
      <th scope="col">BODY</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataItem, index)=>
        <tr key={index}>
            <td>{dataItem.id}</td>
            <td>{dataItem.userId}</td>
            <td>{dataItem.title}</td>
            <td>{dataItem.body}</td>
        </tr>
        )}
  </tbody>
</table>   
</div>
    );
}
export default DataFetching2;