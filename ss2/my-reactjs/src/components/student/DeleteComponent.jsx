import React from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";


class DeleteComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClose = () => {
     this.props.closeModal();
    }
    handleDelete = () => {
        deleteById(this.props.student.id);
        console.log(getAll());
        this.props.reload();
        this.props.closeModal();
    }

    render() {
        return (
            <>
                {console.log("--------Delete Modal--------------")}
                <Modal show={this.props.isShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muốn xoá sinh viên {this.props.student?.name}</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                           Huỷ
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Xoá
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DeleteComponent