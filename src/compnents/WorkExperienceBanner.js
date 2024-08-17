import Card from "react-bootstrap/Card";

function WorkExperienceBanner() {
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
              marginInline: "10px",
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

export default WorkExperienceBanner;

const schools = [
  {
    id: 1,
    name: "Intact Financial",
    program: "Postgraduate Certificate",
    year: "2024 - Present",
    details: "Cyber Threat Intelligence (CTI)",
    imageUrl:
      "https://www.multivu.com/players/English/9155351-intact-financial-2022-social-impact-esg-report/image/intactlogo_1682094355963-HR.png",
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
