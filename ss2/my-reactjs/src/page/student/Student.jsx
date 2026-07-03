
import React, {useEffect, useState} from "react";
import {getAll} from "../../service/studentService.js";
import DeleteComponent from "../../components/DeleteComponent.jsx";
import {Link} from "react-router-dom";

const Student = ()=>{
    const[studentList,setStudentList] = useState();
    const[isShowModal,setIsShowModal] = useState(false);
    const[deleteStudent,setDeleteStudent] = useState({});
    const[needReload,setNeedReload] = useState(false);
    useEffect(() => {
        console.log("-----useEffect----------")
        setStudentList([...getAll()]);
    },[needReload]);

    const handleOpenModal = (student)=>{
           setDeleteStudent(student);
           setIsShowModal(true);
    }
    const closeModal = ()=>{
         setIsShowModal(false);
    }
    const reload = ()=>{
       setNeedReload(pre=>!pre);
    }
    return (
        <>
            {console.log("-----------list render ----------------")}
            <h3 style={{background:'green',color:'yellow'}}>Danh sách</h3>
            <Link to={'/dashboard/student/add'}> Thêm mới</Link>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {studentList && studentList.map((student,i)=>(
                    <tr key={student.id}>
                        <td>{i+1}</td>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.score}</td>
                        <td>
                            <button  onClick={()=>{
                                handleOpenModal(student)
                            }} className={"btn btn-sm btn-danger"}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent isShow ={isShowModal}
                             student ={deleteStudent}
                             closeModal ={closeModal}
                             reload ={reload}

            />
        </>
    );
}
export default Student;