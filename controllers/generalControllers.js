const students = []

export const getStudents = (req, res) => {
    res.json(students)
}

export const createStudent = (req, res) => {
    // console.log(req.body);
    students.push(req.body)
    res.json({
        message : "THIS USER IS VALID",
        student: req.body
    })
}