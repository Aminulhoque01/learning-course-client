import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import course5 from '../../asstes/Image/course5.jpg'
import course4 from '../../asstes/Image/course4.png'
import course3 from '../../asstes/Image/course3.jpg'

const Home = () => {
    return (
        <div>
            <Carousel slide={false}>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        style={{height:'90vh'}}
                        src={course5}
                        alt="First slide"
                        
                    />
                     
                    <Carousel.Caption>
                        <h3>Welcome To Our Online course</h3>
                        <p>Master everything you need to become a web developer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        style={{height:'90vh'}}
                        src={course3}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome To Our Online course</h3>
                        <p>Learn Effectively that will take you towards your goal</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        style={{height:'90vh'}}
                        src={course4}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome To Our Online course</h3>
                        <p>
                        Start your dream today. Conquer the world.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;