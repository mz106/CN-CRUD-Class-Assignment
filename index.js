
const fs = require("fs");

const command = process.argv[2];
const studentId = process.argv[3];
const name = process.argv[4];
const classroom = process.argv[5];

const { add, updateClass, deleteStudent } = require("./utils");

const app = () => {
    let classArr;
    try {
        classArr = JSON.parse(fs.readFileSync('./classroom.json'))
    } catch(err) {
        classArr = [];
    }
    

    if (command === "add") {
        add(classArr, studentId, name, classroom);
    } else if (command === "read") {
        console.log(classArr)
    } else if (command === "updateClass") {
        updateClass(classArr, studentId, classroom);
    } else if (command === "deleteStudent") {
        deleteStudent(classArr, studentId);
    }

}

app()