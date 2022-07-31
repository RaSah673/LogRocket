import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
    state = {
        students: []
    };

    componentDidMount() {
        this.resetState();
    }

    getStudents = () => {
        axios.get(API_URL).then(res => this.setState({ students: res.data }));
    };

    resetState = () => {
        this.getStudents();
    };

    render() {
        return (
            <Fragment>

                <Header />
                <Container style={{ marginTop: "20px" }}>
                    <Row>
                        <Col>
                            <StudentList
                                students={this.state.students}
                                resetState={this.resetState}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewStudentModal create={true} resetState={this.resetState} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;