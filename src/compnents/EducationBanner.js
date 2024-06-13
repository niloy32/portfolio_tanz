import Card from "react-bootstrap/Card";

function ImageAndTextExample() {
  return (
    <>
      <div className="cards-container"> {/* Added a container */}
        {schools.map((school, index) => (
          <div className="banner" key={schools[index].id} style={{ width: '600px', height: '400px', overflow: 'hidden' }}>
            <Card className="bg-dark text-white m-2" style={{ width: '100%', height: '100%' }}>

              <Card.Img
                variant="top"
                src={school.imageUrl}
                style={{
                  width: '100%',
                  height: '50%',
                  objectFit: 'cover',
                  padding: "10px"
                }}
              />

              <Card.Body style={{ overflowY: 'auto' }}>
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
