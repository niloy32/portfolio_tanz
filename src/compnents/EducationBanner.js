import Card from "react-bootstrap/Card";

function ImageAndTextExample() {
  return (
    <>
      <div className="cards-container">
        {/* Added a container */}
        {workPlaces.map((school, index) => (
          <div className="banner" key={workPlaces[index].id}>
            <Card
              className="text-white m-2 "
              style={{
                // width: "500px",
                // height: "150%",
                backgroundColor: "#08252f",
              }}
            >
              <Card.Img
                variant="top"
                src={school.imageUrl}
                className="schoolImage"
              />
              {/* Card BOdy */}
              <Card.Body style={{ overflowY: "auto" }}>
                <Card.Header
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {school.details}
                </Card.Header>
                <Card.Text>{school.year}</Card.Text>
                <p className="CardDescription">{school.description}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
        <br />
      </div>
    </>
  );
}

export default ImageAndTextExample;

const workPlaces = [
  {
    id: 1,
    name: "Lambton College",
    program: "Postgraduate Certificate",
    year: "2023 - 2024",
    details: "Cyber Security And Computer Forensics",
    description:
      "I gained practical skills and in-depth knowledge in cybersecurity, digital forensics, ethical hacking, and network security. My studies focused on identifying vulnerabilities, protecting systems, and responding to security incidents, with hands-on experience in network testing and mobile application security. This comprehensive training prepared me for real-world challenges in the cybersecurity field.",
    imageUrl:
      "https://www.digitary.net/wp-content/uploads/2021/04/Lambton-College-Logo.png",
  },
  {
    id: 2,
    name: "University of Liberal Arts Bangladesh",
    program: "Bachelor of Science ",
    year: "2016 - 2020",
    details: "Computer Science And Engineering",
    description:
      "I developed a strong foundation in computer science and engineering, covering areas such as software development, algorithms, data structures, and system design. My studies included hands-on experience with programming languages, database management, and hardware architecture, which provided me with the skills to solve complex technical problems and innovate in the ever-evolving tech industry.",
    imageUrl:
      "https://www.eduopinions.com/wp-content/uploads/2022/10/University-of-Liberal-Arts-Bangladesh_Logo.png",
  },
];
