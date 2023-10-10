"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Upload() {
    const [imageView, setImageView] = useState();
    const [data, setData] = useState([]);

    const uploadFile = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const obj = Object.fromEntries(formdata);
        console.log(obj);

        const fReader = new FileReader();
        fReader.readAsDataURL(obj.upload); // obj.upload 파일을 읽을 때 비동기가 한번 됨?...
        fReader.addEventListener('load', () => {
            axios.post('/api/upload/files', {
                title: obj.title,
                imgURL: fReader.result
            })
            console.log(fReader.result)
            console.log(fReader);
        })
        console.log(obj.upload);
    }
    const getfile = async () => {
        const d = await axios.get('/api/upload/files');
        setData(d.data)
    }

    function b64toBlob(b64Data, contentType = '') {
        const image_data = atob(b64Data.split(',')[1]); 
     
        const arraybuffer = new ArrayBuffer(image_data.length);
        const view = new Uint8Array(arraybuffer);
     
        for (let i = 0; i < image_data.length; i++) {
           view[i] = image_data.charCodeAt(i) & 0xff;
        }
     
        const blob =  new Blob([arraybuffer], { type: contentType });
        const blobUrl = URL.createObjectURL(blob); 
        console.log(blobUrl)
     }

    useEffect(()=>{
        getfile(); // 데이터 받아옴
    },[])

    return (
        <div>
            <form
                onSubmit={uploadFile}
                method='post'
                encType='multipart/form-data'
            >
                <p><input type='text' name='title' /></p>
                <p><input type='file' name='upload'
                    onChange={(e) => {
                        const file = e.target.files[0];
                        file && setImageView(URL.createObjectURL(file))
                        // 파일이 존재할 때만 실행 (취소누르면 오류나니까)
                    }}
                />
                    <img src={imageView} width="200" />
                </p>
                <p><input type='submit' name='저장' /></p>
            </form>
            <div>
                {
                    data.map(obj => (
                        <figure key={obj.num}>
                            <img src={obj.imgURL} alt="" width="200" />
                            <figcaption>{obj.title}</figcaption>
                        </figure>
                    ))
                }
            </div>
        </div>
    )
}

export default Upload