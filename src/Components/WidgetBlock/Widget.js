import React , {Component} from 'react'
import {Navbar,NavItem,Nav,Grid,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Swiper from 'react-id-swiper'
import './Widget.css'
import logo from '../../img/logo.png'
import logofooter from '../../img/logofooter.svg'
import img_1 from '../../img/img_1.jpg'


import ContentData from '../BodyBlock/ContentData'

class Widget extends Component{
    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null        
      }
    
      goNext() {
        if (this.swiper) this.swiper.slideNext()
      }
    
      goPrev() {
        if (this.swiper) this.swiper.slidePrev()
      }

    render(props){
        const params = {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              hide: true,
              type:'progressbar'
            }
          }

          
      const ContentComponent = ContentData.map(contentsingle => <div style={{background:img_1}}>
        <h3 style={{display: !contentsingle.question && "none"}}>Question: {contentsingle.question}</h3>
        <h3 style={{color: !contentsingle.punchLine && "#888888"}}>Answer: {contentsingle.punchLine}</h3>
      </div>)
      
        return(
          <div>
            <Navbar fluid className="bg-color">
            <Navbar.Header>
                <Navbar.Brand className="logo_position">  
                <a href="#brand"><img src={logo} className="logo" alt="Logo"/>
                Welcome to the jungle</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight className="arrow_group">
                <NavItem eventKey={1} href="#" className="arrow_move btn_prev" onClick={this.goPrev}>
                  <FontAwesomeIcon icon={faArrowLeft}/>
                </NavItem>
                <NavItem eventKey={2} href="#"className="arrow_move btn_next" onClick={this.goNext}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </NavItem>
                </Nav>
            </Navbar>
            <Grid fluid>
            <Row className="show-grid">
              <Swiper {...params} ref={node => this.swiper = node.swiper }>
             {ContentComponent}
              </Swiper>
            </Row>
            </Grid>
            <Grid fluid className="no-pad footer">
            <Col sm={12} className="no-pad" md={3}>
              <img id="size_logo" src={logofooter} alt=""/>
            </Col>
            <Col sm={12} md={3} className="no-pad" xsOffset={6}>
              <a href="#" className="button_footer">
                Voir le profil
              </a>
            </Col>
            </Grid>
            </div>
        )
    }
}
export default Widget