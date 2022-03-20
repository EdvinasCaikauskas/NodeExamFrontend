import {useRef, useContext} from 'react';
import http from "../plugins/http";
import mainContext from "../context/mainContext";

const Upload = () => {
    const {user} = useContext(mainContext)
    const photo = useRef()
    const city = useRef()
    const price = useRef()
    const description = useRef()

    async function upload() {
        const apartment = {
            photo: photo.current.value,
            city: city.current.value,
            price: price.current.value,
            description: description.current.value,
            email: user.email
        }

        const res = await http.post(apartment, '/upload')

        console.log(res)
    }


    return (
        <div className="d-flex center upload-container">
            <input type="text" ref={photo} placeholder="photo url"/>
            <input type="text" ref={city} placeholder="city"/>
            <input type="text" ref={price} placeholder="price"/>
            <input type="text" ref={description} placeholder="description"/>
            <button onClick={upload}>Upload</button>
        </div>
    );
};

export default Upload;