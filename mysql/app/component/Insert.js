"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Insert() {
	const navi = useRouter();
	const insertFn = (e) =>{
		e.preventDefault();
		
		const formdata = new FormData(e.target);
		const values = Object.fromEntries(formdata);
		console.log(values);

		axios.post('/api', values);
		navi.push('./list');
	}

  return (
    <form onSubmit={insertFn}>
			<p><input type="id" name="id"/></p>
			<p><input type="text" name="name"/></p>
			<p><input type="email" name="email"/></p>
			<p><input type="submit" value="저장"/></p>
			<p><input type="submit" value="수정"/></p>
    </form>
  )
}

export default Insert