"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function List() {
  const [data,setData] = useState([]);

  const getData = ()=>{
    axios.get('/api')
    .then(res=>{
      setData(res.data);
    })
  }

  const del = (id)=>{
    axios.delete(`/api/${id}`)
    .then(res=>{
      setData(res.data);
    })
  }

  const edit = (num)=>{
    axios.put(`/api/${num}`,{name:'민유빈'})
    .then(res=>{
      setData(res.data);
    })
  }

  useEffect(()=>{
    getData();
  },[])

  return (
      <>
      <ul>
      {
        data.map(obj => (
          <li key={obj.num}>
            아이디:{obj.id} /
            이름:{obj.name} /
            메일:{obj.email} 
            <button onClick={()=>{del(obj.num)}}>삭제</button>
          </li>
        ))
      }
      </ul>
    </>
  )
}

export default List