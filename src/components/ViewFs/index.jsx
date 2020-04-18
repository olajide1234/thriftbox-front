import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import FsTable from '../FsTable';

class ViewFs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classStyle } = this.props;

    return (
      <Card className={`${classStyle} mt-4`} style={{ width: "100%" }}>
        <Card.Body>
          <div className="border-bottom">
            <span>
              <div className="float-right">
                <button onClick={f => f}> Download</button>
              </div>
              <h3 className="no-buttom-margin">View financial statements</h3>
              <p>View summaries of the financial records</p>
            </span>
          </div>


          <Row className="mr-0 ml-0 mt-3">
            <Form className="mt-2 mb-2" style={{ width: "100%" }}>
              <Row className="d-flex justify-content-between">
                <Col md={3}>
                  <label htmlFor="book">Select book</label>
                  <Form.Control as="select" id="book">
                    <option>First book</option>
                    <option>Second book</option>
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <LargeButton text="View current COA" classStyle="mt-4 greenButton" onClick={f => f} />
                </Col>
                <Col md={2}>
                  <LargeButton text="View draft P or L" classStyle="mt-4 greenButton" onClick={f => f} />
                </Col>
                <Col md={2}>
                  <LargeButton text="View draft SFP" classStyle="mt-4 greenButton" onClick={f => f} />
                </Col>
                <Col md={2}>
                  <LargeButton text="View draft TB" classStyle="mt-4 greenButton" onClick={f => f} />
                </Col>
              </Row>
            </Form>
          </Row>
          <FsTable title="Draft statement of financial position" />
        </Card.Body>
      </Card>
    );
  }
}

ViewFs.defaultProps = {
  classStyle: '',
};

ViewFs.propTypes = {
  classStyle: PropTypes.string,
};

export default ViewFs;
