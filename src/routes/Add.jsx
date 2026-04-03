import { createBrowserRouter } from "react-router";
import { useState, useEffect } from "react";
import {collection, addDoc} from "firebase/firestore";
import db from '../utils/db';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../db.js'


export const Add = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        studentNumber: '',
    });

    const handleChange = (e)=> {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name.value] : e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDeafault();

        const c = collection(db, 'classlist');
        addDoc(c, formData);
    }
        

setFormData(

)

    return (
        <div>
        <h1>Add Student</h1>
    <form>
        <div>
            <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div>
            <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
        </div>
        <div>
            <input required type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
            <input required type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange}/>
        </div>
        <button type="submit">add student</button>
    </form>
    </div>
    );
}
     export default Add;