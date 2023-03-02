//================================
interface IPerson{
    id:number;
    name:string;
    group:number;
}
let array : Array<IPerson> = [
    {id:1, name:'Vasya',group:10},
    {id:2, name:'Ivan',group:11},
    {id:3, name:'Masha',group:12},
    {id:4, name:'Petya',group:10},
    {id:5, name:'Kira',group:11},
]
//================================
type CarsType = {
    manufacturer: string
    model: string
}
let car : CarsType = {
    manufacturer:"BMW",
    model:"E36" 
}
//================================
let car1 : CarsType = {
    manufacturer:"BMW",
    model:"E34"
}
let car2 : CarsType = {
    manufacturer:"MRC",
    model:"W223"
}
type ArrayCarsType = {
    cars : CarsType[]
}
const arrayCars : Array<ArrayCarsType> = [{
    cars:[car1,car2]
}]
//================================
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type DoneType = "yes" | "no"
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}
type GroupType = {
    students: Array<StudentType> // массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType
}
let group : GroupType = {
    students: [
        {id:1,name:"Ivan",group:5,marks:[{subject:"Математика",mark:4,done:"yes"},{subject:"Физика",mark:5,done:"yes"}]},
        {id:2,name:"Petya",group:5,marks:[{subject:"Математика",mark:2,done:"no"},{subject:"Физика",mark:1,done:"no"}]},
        {id:3,name:"Masha",group:4,marks:[{subject:"Химия",mark:4,done:"yes"},{subject:"Биология",mark:5,done:"yes"}]},
        {id:4,name:"Liza",group:4,marks:[{subject:"Химия",mark:3,done:"yes"},{subject:"Биология",mark:4,done:"yes"}]},
    ],
    studentsFilter(group:number): Array<StudentType> {
        let res : Array<StudentType> = new Array<StudentType>()
        this.students.forEach(element => {
            if (element.group == group) {
                res.push(element)
            }
        });
        console.log(res);
        return res
    },
    marksFilter(mark:number): Array<StudentType> {
        let res : Array<StudentType> = new Array<StudentType>()
        this.students.forEach(element => {
            if (element.marks[0].mark == mark || element.marks[1].mark == mark ) {
                res.push(element)                
            }
        });
        console.log(res);
        return res
    },
    deleteStudent(id:number):void{
        this.students.forEach(element => {
            if (element.id == id) {
                console.log(element.name," удалён");
                this.students.splice(this.students.indexOf(element),1)
            }
        });
    },
    mark: 3,
    group: 5
}
console.log("Фильтрация по группе номер 5");
let groupFillterBy5 = group.studentsFilter(5);
console.log("Фильтрация по оценке 2");
let markFillterBy2 = group.marksFilter(2)
console.log("Удаление по id");
console.log(group.students);
group.deleteStudent(2)
console.log(group.students);

