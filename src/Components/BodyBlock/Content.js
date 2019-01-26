import React,{Component} from 'react'
import {Grid,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Content.css'

class Content extends Component{
    render(){
        return(
            <Grid fluid>
            <Row className="show-grid">
              <Col sm={12} md={3}>
                <code>
                  &lt;
                  {'Col sm={12} md={3}'} /&gt;
                </code>
                <br />
              </Col>
              <Col sm={12} md={3}>
                <code>
                  &lt;
                  {'Col sm={12} md={3}'} /&gt;
                </code>
                <br />
              </Col>
              <Col sm={12} md={3}>
                <code>
                  &lt;
                  {'Col sm={12} md={3}'} /&gt;
                </code>
                <br />
              </Col>
              <Col sm={12} md={3}>
                <code>
                  &lt;
                  {'Col sm={12} md={3}'} /&gt;
                </code>
                <br />
              </Col>
            </Row>
          </Grid>
        )
    }
}
export default Content