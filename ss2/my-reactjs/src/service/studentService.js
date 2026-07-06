

const studentList = [
    {
        id:1,
        name:"chanh",
        score:10
    },
    {
        id:2,
        name:"hải",
        score:7
    },
    {
        id:3,
        name:"tiến",
        score: 5
    }
]
import api from "../axiosConfig/api.js";
export async function getAll(){
    // call API;
    try{
        const res= await api.get(`/students`);
        console.log(res);
        return res.data;
    }catch (e){
      console.log(e);
      console.log("Lỗi call API")
    }
    return [] ;
}
export async function deleteById(id){
    // call API;
    try{
        const res= await api.delete(`/students/${id}`);
        console.log(res);
        return res.status =="200";
    }catch (e){
        console.log(e);
        console.log("Lỗi call API")
    }
    return false;
}
export async function add(student){
    try{
        const res= await api.post(`/students`,student);
        return res.status =="201";
    }catch (e){
        console.log(e);
        console.log("Lỗi call API")
    }
    return false;
}