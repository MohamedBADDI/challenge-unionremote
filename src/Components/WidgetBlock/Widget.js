import React , {Component} from 'react'
import {Navbar,NavItem,Nav,Grid,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Content from '../BodyBlock/Content'
import Swiper from 'react-id-swiper'
import './Widget.css'
import logo from '../../img/logo.png'


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

    render(){
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
                <Content />
              </Swiper>
            </Row>
            </Grid>
            </div>
        )
    }
}
export default Widget