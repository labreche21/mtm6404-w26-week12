import { useState, useEffect } from "react";
import db from '../utils/db';
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "../components/editForm";

export const Student = () => {
    const navigate = useNavigate();
    // set up state variable for student
    const [student, setStudent] = useState({});

    // id from the route params
    const { id } = useParams();

    // create a function to fetch student
    const fetchStudentById = async (studentId) => {
        const docRef = doc(db, "classlist", studentId);
        const docSnapshot = await getDoc(docRef);

        // check if the doc exists in firestore
        if (docSnapshot.exists()) {
            setStudent({
                id: docSnapshot.id,
                ...docSnapshot.data()
            });
        } else {
            alert('Student does not exist in our records! Please provide a valid student id');
            return null;
        }
    }

    const handleUpdate = async (updatedStudent) => {
        const docRef = doc(db, 'classlist', id)

        try {
            await updateDoc(docRef, updatedStudent);
            navigate('/');
        } catch (err) {
            console.error('Cannot update student, try again later', err)
        }
     }

    useEffect(() => {
        fetchStudentById(id);
    }, [id]);

    return (
        <div className="student">
            {student && (
            <EditForm student={student} onUpdate={handleUpdate} />
            )}
        </div>
    );
}

export default Student;