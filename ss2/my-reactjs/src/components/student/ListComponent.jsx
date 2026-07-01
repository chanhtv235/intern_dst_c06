import React from "react";
import {getAll} from "../../service/studentService.js";
import DeleteComponent from "./DeleteComponent.jsx";

class ListComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            isShowModal : false,
            deleteStudent: null,
            isNeedReload: false
        }
    }
    componentDidMount() {
        console.log("------componentDidMount --------");
        this.setState(
            {
                studentList: [...getAll()]
            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isNeedReload!==this.state.isNeedReload){
            this.setState(
                {
                    studentList: [...getAll()],
                    isNeedReload: false
                }
            )
        }
    }

    reload =()=>{
        this.setState(
            {
                isNeedReload: true
            }
        )
    }


    closeModal = ()=>{
        this.setState(
            {
                isShowModal: false,
            }
        );
    }

    handleOpenModal =(student)=>{
        this.setState(
            {
                isShowModal: true,
                deleteStudent : student
            }
        )
    }
    render() {
        return (
            <>
                {console.log("-----------list render ----------------")}
                <h3 style={{background:'green',color:'yellow'}}>Danh sách</h3>
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
                    {this.state.studentList.map((student,i)=>(
                        <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <button  onClick={()=>{
                                    this.handleOpenModal(student)
                                }} className={"btn btn-sm btn-danger"}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent isShow ={this.state.isShowModal}
                                 student ={this.state.deleteStudent}
                                 closeModal ={this.closeModal}
                                 reload ={this.reload}

                 />
            </>
        );
    }
}
export default ListComponent;