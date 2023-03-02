var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var car = {
    manufacturer: "BMW",
    model: "E36"
};
//================================
var car1 = {
    manufacturer: "BMW",
    model: "E34"
};
var car2 = {
    manufacturer: "MRC",
    model: "W223"
};
var arrayCars = [{
        cars: [car1, car2]
    }];
var group = {
    students: [
        { id: 1, name: "Ivan", group: 5, marks: [{ subject: "Математика", mark: 4, done: "yes" }, { subject: "Физика", mark: 5, done: "yes" }] },
        { id: 2, name: "Petya", group: 5, marks: [{ subject: "Математика", mark: 2, done: "no" }, { subject: "Физика", mark: 1, done: "no" }] },
        { id: 3, name: "Masha", group: 4, marks: [{ subject: "Химия", mark: 4, done: "yes" }, { subject: "Биология", mark: 5, done: "yes" }] },
        { id: 4, name: "Liza", group: 4, marks: [{ subject: "Химия", mark: 3, done: "yes" }, { subject: "Биология", mark: 4, done: "yes" }] },
    ],
    studentsFilter: function (group) {
        var res = new Array();
        this.students.forEach(function (element) {
            if (element.group == group) {
                res.push(element);
            }
        });
        console.log(res);
        return res;
    },
    marksFilter: function (mark) {
        var res = new Array();
        this.students.forEach(function (element) {
            if (element.marks[0].mark == mark || element.marks[1].mark == mark) {
                res.push(element);
            }
        });
        console.log(res);
        return res;
    },
    deleteStudent: function (id) {
        var _this = this;
        this.students.forEach(function (element) {
            if (element.id == id) {
                console.log(element.name, " удалён");
                _this.students.splice(_this.students.indexOf(element), 1);
            }
        });
    },
    mark: 3,
    group: 5
};
console.log("Фильтрация по группе номер 5");
var groupFillterBy5 = group.studentsFilter(5);
console.log("Фильтрация по оценке 2");
var markFillterBy2 = group.marksFilter(2);
console.log("Удаление по id");
console.log(group.students);
group.deleteStudent(2);
console.log(group.students);
