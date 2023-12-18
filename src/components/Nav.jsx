import React from 'react'
import logo from '../assets/images/logo.png'
import { Button, Container, } from 'react-bootstrap'

const Nav = () => {
    return (
        <div>
            <header className="HeroBg-img mb-sm-5">
                <Container>
                    <nav className="d-flex justify-content-between py-sm-4 ">
                        <div className="d-flex align-items-center">
                            <img className='w-logo' src={logo} alt="events free" />
                            <p className="fs-lg1 fw-bold lh-135 ff-poppins text-skyblue m-0">Events </p>
                            <p className="fs-lg1 fw-bold lh-135 ff-poppins text-lightblue m-0">Free</p>
                        </div>
                        <label for="icon" className="icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id="icon" hidden />
                        <div className=" d-flex align-item-center mb-0 phone-view gap-5">
                            <ul className="gap-5 d-flex flex-direction-col align-items-center m-0 p-0">
                                <li><a href="" className="fs-md1 fw-normal ff-poppins text-white">HOME</a></li>
                                <li><a href="" className="fs-md1 fw-normal ff-poppins text-white">EVENTS</a> </li>
                                <li> <a href="" className="fs-md1 fw-normal ff-poppins text-white">FEED</a> </li>
                                <li> <a href="" className="fs-md1 fw-normal ff-poppins text-white">USER NAME</a> </li>
                            </ul>
                            <div className='d-flex align-items-center' >
                                <Button className='fs-md text-white fw-semibold ff-poppins sec-btn lh-150 bg-skyblue'>Log Out</Button>
                            </div>
                        </div>
                    </nav>
                    <div className='py-sm-5 mt-5 '>
                        <p className=" fs-md1 fw-normal text-white lh-150 ff-poppins m-0 lh-150">Home {'>'} Events </p>
                        <p className="fs-xxl fw-semibold ff-poppins lh-150 text-white m-0">Events</p>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Nav
