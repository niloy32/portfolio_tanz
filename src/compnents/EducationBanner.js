import Card from "react-bootstrap/Card";

function ImageAndTextExample() {
  return (
    <>
      <div className="cards-container">
        {" "}
        {/* Added a container */}
        {workPlaces.map((school, index) => (
          <div className="banner" key={workPlaces[index].id}>
            <Card
              className="text-white m-2 "
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(8 37 47))",
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
