import {useRef, useState} from "react";
import {add} from "../../service/studentService.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import * as Yub from "yup";

const Add = ()=>{
    const [student,setStudent] = useState({});
    const navigate = useNavigate();
    const handleAdd = async (value)=>{
        console.log(value)
        let isSuccess = await add(value);
        if (isSuccess){
            toast.success("Thêm mới thành công")
            // thêm mới thành công
            navigate("/dashboard/student");
        }else {
            // thêm mới thất bại
            toast.error("Thêm mới thất bại ")
        }
    }
    const  validation = Yub.object({
        // id:Yub.number().required("Yêu cầu nhập").min(1,"Phải lớn hơn 0"),
        name:Yub.string().required("Yêu cầu nhập tên ")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên không đúng định dạng")
    });

    return(
        <>
            <h2>Thêm mới </h2>
            <Formik  initialValues={student} onSubmit={handleAdd} validationSchema={validation}>
                <Form>
                    {/*<div>*/}
                    {/*    <label>Id</label>*/}
                    {/*    <Field type ={'text'} name = {'id'}/>*/}
                    {/*    <ErrorMessage name={'id'} component={'small'}/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Name</label>
                        <Field type ={'text'} name = {'name'}/>
                        <ErrorMessage name={'name'} component={'small'}/>
                    </div>
                    <div>
                        <label>Score</label>
                        <Field type ={'text'} name = {'score'}/>
                    </div>
                    <div>
                        <Button type={'submit'}>Lưu</Button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
export default Add;