
const studentList = [
    {
        id:1,
        name:"chanh"
    },
    {
        id:2,
        name:"hải"
    },
    {
        id:3,
        name:"tiến"
    }
]
export function getAll(){
    // call API;
    return [...studentList];
}
export function deleteById(id){
    // call API;
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id ==id){
            studentList.splice(i,1);
            break;
        }
    }
}