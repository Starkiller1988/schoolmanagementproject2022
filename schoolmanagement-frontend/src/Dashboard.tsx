import { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import {
  IoSchoolOutline,
  IoMan,
  IoSettings,
  IoWomanOutline,
} from "react-icons/io5";
import axios from "axios";
import { CreationModal } from "./CreactionModal";

interface MyState {
  isOpen: boolean;
  students: [];
}

export class Dashboard extends Component<{}, MyState> {
  state: MyState = {
    isOpen: false,
    students: [],
  };

  componentDidMount() {
    axios.get("http://localhost:7070/list").then((res) => {
      const students = res.data;
      this.setState({ students });
    });
  }

toggle = () => {

this.setState((prevState) => ({ isOpen: !prevState.isOpen }))

}



  render() {
    return (
      <div>
        <Navbar color="dark" className="light mb-2">
          <NavbarBrand className="text-white">
            <IoSchoolOutline className="font-size-xxl" />
            <span className="font-size-l ml-3"> Bootcamp Manager Application</span>
          </NavbarBrand>
        </Navbar>

        <Container className="mt-3">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" /> 16 Studenten
                </CardTitle>
                <CardText>
                  Erfahrene und Unerfahrene lernen die Basics der BackEnd Webentwicklung
                </CardText>
                <Button>Manage Students</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoSchoolOutline className="font-size-xl" /> 2 Coaches
                </CardTitle>
                <CardText>
                  André Schreck
                  <br />
                  Thomas Klittaus
                </CardText>
                <Button>Manage Teachers</Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoSettings className="font-size-xl" /> 12 Weeks
                </CardTitle>
                <CardText>
                  With supporting text below as natural lead-in to additional
                  content.
                </CardText>
                <Button>Manage Employees</Button>
              </Card>
            </Col>
          </Row>
        </Container>


<CreationModal isOpen = {this.state.isOpen} toggle = {this.toggle}></CreationModal>



        <Container className="mt-4">
          <Row>
            <Col sn="12">
              <Button block color="success" onClick={this.toggle}>
                <span className="font-size-l">Create New Student</span>
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
         {this.state.students.map(student => renderStudent(student))}  
         </Container>
      </div>
    );
  }

}


function renderStudent(st) {
  return(

    <Row>
        <Col sm="12">
          <Card body>
            <CardTitle tag="h5">
              <IoMan className="font-size-xl" /> {st.lastName + ", " + st.firstName}
              </CardTitle>
              <CardBody>
                <Row>
                  <Col sm="4" className="text-center">
                    <span className="font-weight-bold">Kurs: </span>
                    <span>{st.bootcamp}</span>
                    </Col>
                  <Col sm="4" className="text-center">
                  <span className="font-weight-bold">Age: </span>
                  <span>{st.age}</span>
                    </Col>
                  <Col sm="4" className="text-center">
                  <span className="font-weight-bold">Coach: </span>
                  <span>{st.teacher}</span>
                    </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col sm="6">
                    <Button block outline color="primary" onClick={() => updateStudent(st.id)}>
                      Edit
                    </Button>
                    </Col>
                  <Col sm="6">
                    <Button block outline color="danger" onClick={() => deleteStudent(st.id)}>
                      Delete
                    </Button>
                    </Col>
                </Row>
              </CardFooter>
            </Card>
        </Col>
    </Row>


  )

}
function deleteStudent(id: any): void {
 axios.post(`http://localhost:7070/delete/${id}`)
}




function updateStudent(id: any): void {
  axios.post(`http://localhost:7070/list/${id}`);
}

