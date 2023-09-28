import React, { useState } from 'react';
import SideBar from '../sideBar/SideBar';

const EditAttendanceStatus = () => {
  const [attendanceData, setAttendanceData] = useState("");

  const handleStatusChange = (studentId, newStatus) => {
    setAttendanceData(prevData => {
      const updatedData = prevData.map(student => {
        if (student.id === studentId) {
          return { ...student, status: newStatus };
        }
        return student;
      });
      return updatedData;
    });
  };

  return (
      <div>
          <SideBar />
          <h1>Edit Attendance Status</h1>
          {/* {attendanceData.map(student => (
        <div key={student.id}>
          <span>{student.name}</span>
          <select
            value={student.status}
            onChange={e => handleStatusChange(student.id, e.target.value)}
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
      ))} */}
    </div>
  );
};

export default EditAttendanceStatus;
