import { useEffect, useState } from "react";

export default function DisplayStudent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const apiUrl = "http://localhost:8080/students/getallstudents";
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [data]);

  const containerStyle = {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "30px",
  };

  const studentGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  };

  const studentCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const studentCardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
  };

  const h2Style = {
    marginBottom: "10px",
    color: "#1d3557",
  };

  const pStyle = {
    margin: "6px 0",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Student List</h1>

      <div style={studentGridStyle}>
        {data.map((student) => (
          <div
            key={student.id}
            style={{ ...studentCardStyle, ":hover": studentCardHoverStyle }}
          >
            <h2 style={h2Style}>{student.username}</h2>
            <p style={pStyle}>
              <strong>Course:</strong> {student.usercourse}
            </p>
            <p style={pStyle}>
              <strong>Email:</strong> {student.useremail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
