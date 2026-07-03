
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
export function add(student){
    studentList.push(student);
    return true;
}