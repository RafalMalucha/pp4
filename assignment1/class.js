class Class{
    
    students = []

    addStudent(student){
        if (this.students.length < 10) {
            this.students.push(student)
        } else {
            console.log("too many students")
        }
    }
}

let c1 = new Class

c1.addStudent("student1")
c1.addStudent("student2")
c1.addStudent("student3")
c1.addStudent("student4")
c1.addStudent("student5")
c1.addStudent("student6")
c1.addStudent("student7")
c1.addStudent("student8")
c1.addStudent("student9")
c1.addStudent("student10")

console.log(c1.students)

c1.addStudent("student11")

console.log(c1.students)