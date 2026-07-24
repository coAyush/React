import React, { useState } from "react";
import RegistrationForm from "../components/forms/RegistrationForm";

const Admission = () => {
  const [formData, setFormData] = useState({
    rollNo: 0,
    name: "",
    gender: "",
    phone: "",
    age: 0,
    schoolName: "",
    email: "",
    boardId: 0,
    dateOfBirth: "",
    marks: [{
      "subjectId": 0,
      "marks": 0.1
    }]

  })
  return (
    <div className="flex flex-col gap-2.5 bg-gradient-to-r from-white to-gray-300 min-h-screen">
      <div className="flex justify-center mt-2">
        <div className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent font-extrabold text-3xl">
          Registration Form
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <RegistrationForm formData={formData} setFormData={setFormData}/>
    </div>
    </div>
  );
};

export default Admission;