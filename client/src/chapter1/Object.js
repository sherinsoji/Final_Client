function Object()
{
const student={
id:102,
name:
{
    first:"Ali",
    last:"Ahammed",
},
mark:89
};
const student1={
id:[1,2,3],
name:["Ali","Badhar","Zaid"],
mark:89
};

const list = [
{
    id:1,
    name:'Aisha'
},
{
    id:2,
    name:'Fathima'
},
{
    id:3,
    name:'Shaima'
}
];
console.log(student);
console.log(student1);
console.log(list);
return(
    <div>
        <h1>Object</h1>
        {student.name.first}<br></br>
        {student1.name[1]}
<br></br>
        {list[1]["id"]}

        <h2>Array of Objects</h2>
        {
            list.map((item)=><p>{item.name}</p>)
        }
    </div>
)
}
export default Object;