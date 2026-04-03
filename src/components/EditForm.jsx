import { useEffect, useState } from "react";

export const EditForm = ({ student, onUpdate}) => {
    const [formData, setFormData] = useState ({
        firstName: student?.firstName || '',
        lastNanem: student?.lastName || '',
        email: student?.email || '',
        studentNumber: student?.studentNumber || '',
    })

    const handleChange = (e)=> {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name.value] : e.target.value
            }
        });
    }

    useEffect (() => {
        if (student) {
            setFormData({
                firstName: student.firstName || '',
                lastNanem: student.lastName || '',
                email: student.email || '',
                studentNumber: student.studentNumber

            });
        }
    }, [student]);


    const handleSubmit = (e) => {
        e.preventDeafault();

        const c = collection(db, 'classlist');
        addDoc(c, formData);
    }



    return(
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
export default EditForm;