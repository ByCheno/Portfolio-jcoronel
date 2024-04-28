import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col } from "react-bootstrap";
import {projects, skills, contact, home} from '../../img';
// import 'animate.css';

export const SkillsCard = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quas ea est, sint nemo quaerat eum expedita repellat nostrum delectus libero fugiat ipsum, modi ab dolorum sapiente perferendis. Dolorum, quae!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img className="skill-img" src={projects} alt="" />
                                    <h5>Skill 1</h5>
                                </div>
                                <div className="item">
                                    <img className="skill-img" src={skills} alt="" />
                                    <h5>Skill 2</h5>
                                </div>
                                <div className="item">
                                    <img className="skill-img" src={contact} alt="" />
                                    <h5>Skill 3</h5>
                                </div>
                                <div className="item">
                                    <img className="skill-img" src={home} alt="" />
                                    <h5>Skill 4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SkillsCard;