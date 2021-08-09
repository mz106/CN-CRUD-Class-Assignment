const fs = require("fs");

const save = (classArr) => {
    let stringyObj = JSON.stringify(classArr);
    fs.writeFileSync('./classroom.json', stringyObj);
}

exports.add = (classArr, studentId, name, classroom) => {
    let studentObj = {
        id: studentId,
        name: name,
        classroom: classroom
    }

    classArr.push(studentObj)
    save(classArr)

} 

exports.updateClass = (classArr, id, classroom) => {
    let newArr = classArr;
    newArr.map((item, index) => {
        if (newArr[id - 1].id === id) {
            newArr[id - 1].classroom = classroom
        } 
    })

    save(newArr)
}

exports.deleteStudent = (classArr, studentId) => {
    let newArr = classArr.filter(student => (student.id) !== studentId)
    save(newArr)
}