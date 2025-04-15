import { useState } from "react";

export default function AddStudent() {
  const [student, setStudent] = useState({
    username: "",
    useremail: "",
    usercourse: "", 
    userpassword: "",
  });

  const handleInput = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      username: student.username,
      useremail: student.useremail,
      usercourse: student.usercourse,
      userpassword: student.userpassword,
    };

    try {
      const response = await fetch("http://localhost:8080/students/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }
      console.log(userDetails)
      console.log("Student added successfully!");
    } catch (e) {
      console.error(e);
    }
    setStudent({username:'',useremail:'',usercourse:'',userpassword:''})
  };

  return (
    <div className="add-container">
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          onChange={handleInput}
          value={student.username}
        />
        <input
          type="email"
          name="useremail"
          placeholder="Enter Email"
          onChange={handleInput}
          value={student.useremail}
        />
        <input
          type="text"
          name="usercourse"
          placeholder="Enter Course"
          onChange={handleInput}
          value={student.usercourse}
        />
        <input
          type="password"
          name="userpassword"
          placeholder="Enter Password"
          onChange={handleInput}
          value={student.userpassword}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
