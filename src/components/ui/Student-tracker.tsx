import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import { Input } from "@base-ui/react"
import { Button } from "@/components/ui/button";


function StudentTracker() {
  // useRef
  const inputRef = useRef<HTMLInputElement>(null)
  const[studentname, setStudentname] = useState("")

  // useState
  const [attendance, setAttendance] = useState(0)


//   Message
let attendanceMessage = "";
if(attendance === 0){
    attendanceMessage = "No Attendance Recorded! "
} else if(attendance >=1 && attendance <=4 ){
    attendanceMessage = "Attendance In Progress! "
}  else{
    attendanceMessage = "Good Attendance! "
}

  function addAttendance() {
    setAttendance(attendance + 1)
  }

//   function decreaseAttendance(){
//     setAttendance(attendance - 1)
//   }

  function resetAttendance(){
    setAttendance(0)
  }
  function focusInput() {
  inputRef.current?.focus()
}

  return (
    <Card className="w-130 justify-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Student Attendance Tracker</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <h3 className="text-center">Track Your Daily Attendance</h3>
        </CardDescription>

        <div>
          <p className="text-md font-bold">Student Name: </p>
          <Input placeholder="Enter Your Name" value={studentname} onChange={(e) => setStudentname(e.target.value)} ref={inputRef}></Input>

          <h2 className="mt-2 text-2xl font-bold mb-1">Attendance</h2>
           
           <h1>Student: {studentname}</h1>
          <h1 className="text-3xl font-bold text-center">{attendance} </h1>
          <p className="m-1 text-center text-red-600 font-bold">{attendanceMessage}</p>
        </div>

        <div className="flex justify-center mb-2 gap-3">
          <Button variant="secondary"  onClick={addAttendance}>+ Add Attendance</Button>
          <Button variant="ghost"  onClick={() =>{
            if(attendance>0){
                setAttendance(attendance-1)
            }
          }}>- Remove Attendance</Button>
          <Button variant="destructive"  onClick={resetAttendance}>Reset Attendance</Button>
        </div>
         
        <div className="flex justify-center ">
        <Button onClick={focusInput} variant="outline">Focus Input</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default StudentTracker
