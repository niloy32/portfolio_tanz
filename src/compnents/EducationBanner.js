import Card from "react-bootstrap/Card";

function ImageAndTextExample() {
  return (
    <>
      <div className="cards-container">
        {" "}
        {/* Added a container */}
        {schools.map((school, index) => (
          <div
            className="banner"
            key={schools[index].id}
            style={{
              width: "600px",
              height: "400px",
              overflow: "hidden",
              margin: ".5rem",
            }}
          >
            <Card
              className="bg-dark text-white m-2"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Card.Img
                variant="top"
                src={school.imageUrl}
                style={{
                  objectFit: "contain",
                  padding: "15px",
                  height: "200px",
                }}
              />
              {/* Card BOdy */}
              <Card.Body style={{ overflowY: "auto" }}>
                <Card.Header
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {school.program} in {school.details}
                </Card.Header>
                <Card.Text
                  style={{
                    fontSize: "1.5rem",
                    letterSpacing: "2px",
                  }}
                >
                  {school.year}
                </Card.Text>
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

const schools = [
  {
    id: 1,
    name: "Lambton College",
    program: "Postgraduate Certificate",
    year: "2023 - 2024",
    details: "Cyber Security And Computer Forensics",
    imageUrl:
      "https://www.digitary.net/wp-content/uploads/2021/04/Lambton-College-Logo.png",
  },
  {
    id: 2,
    name: "University of Liberal Arts Bangladesh",
    program: "Bachelor of Science ",
    year: "2016 - 2020",
    details: "Computer Science And Engineering",
    imageUrl:
      "https://www.eduopinions.com/wp-content/uploads/2022/10/University-of-Liberal-Arts-Bangladesh_Logo.png",
  },
];
