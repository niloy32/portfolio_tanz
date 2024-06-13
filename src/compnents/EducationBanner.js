import Card from "react-bootstrap/Card";

function ImageAndTextExample() {
  return (
    <>
      {schools.map((school, index) => (
        <div className="banner">
          <Card key={schools[index].id} className="bg-dark text-white m-2">
            <Card.Img
              variant="top"
              src={school.imageUrl}
              style={{
                height: "10rem", // Adjusts height automatically to maintain aspect ratio
                width: "100%", // Ensures the image takes up the full width of the container
                padding: "10px",
              }}
            />

            <Card.Body>
              <Card.Header
                style={{
                  fontSize: "0.8rem",
                }}
              >
                {school.details}
              </Card.Header>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  letterSpacing: "2px",
                }}
              >
                {school.year}
              </Card.Text>
            </Card.Body>
          </Card>
          <div style={{ height: ".2rem" }} />
        </div>
      ))}
      <br />
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
    details: "CYBER SECURITY AND COMPUTER FORENSICS",
    imageUrl:
      "https://www.digitary.net/wp-content/uploads/2021/04/Lambton-College-Logo.png",
  },
  {
    id: 2,
    name: "University of Liberal Arts Bangladesh",
    program: "Bachelor of Science ",
    year: "2016-2020",
    details: "Computer Science And Engineering",
    imageUrl:
      "https://www.eduopinions.com/wp-content/uploads/2022/10/University-of-Liberal-Arts-Bangladesh_Logo.png",
  },
];
