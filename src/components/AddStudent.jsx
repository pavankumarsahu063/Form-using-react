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

    const userDetails = { ...student };

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

      console.log(userDetails);
      console.log("Student added successfully!");
    } catch (e) {
      console.error(e);
    }

    setStudent({ username: "", useremail: "", usercourse: "", userpassword: "" });
  };

  // 🎨 Internal Styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f4f8",
    },
    form: {
      backgroundColor: "white",
      padding: "30px 40px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "8px",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  return (
    <>
    {/* <h2>Add Student Details</h2> */}
    <div style={styles.container}>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          onChange={handleInput}
          value={student.username}
          style={styles.input}
        />
        <input
          type="email"
          name="useremail"
          placeholder="Enter Email"
          onChange={handleInput}
          value={student.useremail}
          style={styles.input}
        />
        <input
          type="text"
          name="usercourse"
          placeholder="Enter Course"
          onChange={handleInput}
          value={student.usercourse}
          style={styles.input}
        />
        <input
          type="password"
          name="userpassword"
          placeholder="Enter Password"
          onChange={handleInput}
          value={student.userpassword}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>
    </div>
    </>
  );
}