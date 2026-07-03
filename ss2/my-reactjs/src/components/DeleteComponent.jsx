import {Button, Modal} from "react-bootstrap";
import React from "react";
import {deleteById, getAll} from "../service/studentService.js";

const DeleteComponent = ({isShow,student,closeModal,reload})=>{
    const handleClose = ()=>{
        closeModal();
    }
    const handleDelete = ()=>{
        deleteById(student.id);
        console.log(getAll());
        reload();
        closeModal();
    }
    return (
        <>
            {/*{console.log("--------Delete Modal--------------")}*/}
            <Modal show={isShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {student?.name}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Huỷ
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Xoá
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DeleteComponent;