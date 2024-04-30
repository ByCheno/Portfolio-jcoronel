import {projects} from '../../img';
import {Button} from '../common/Button';

export const ProjectCard = () => {
    return (
        <div className="row">
            <div className="col-4 card-projects">
                <div className="card" style={{width: "18rem"}}>
                    <img src={projects} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">E-commerce INFINITECS</h5>
                        <p className="card-text">
                            This project is an e-commerce about products
                            related to 3D printing, you can find both printer
                            components and already printed busts and objects,
                            we also offer personalized designs.
                            Technologies and tools applied in my project:
                            PHP + Laravel, JavaScript + Vue Js, HTML, CSS,
                            Bootstrap and more...</p>
                        <Button />
                    </div>
                </div>
            </div>
            
            <div className="col-4 card-projects">
                <div className="card" style={{width: "18rem"}}>
                        <img src={projects} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">E-commerce INFINITECS</h5>
                            <p className="card-text">
                                This project is an e-commerce about products
                                related to 3D printing, you can find both printer
                                components and already printed busts and objects,
                                we also offer personalized designs.
                                Technologies and tools applied in my project:
                                PHP + Laravel, JavaScript + Vue Js, HTML, CSS,
                                Bootstrap and more...</p>
                                <Button />
                        </div>
                </div>
            </div>

            <div className="col-4 card-projects">
                <div className="card" style={{width: "18rem"}}>
                        <img src={projects} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">E-commerce INFINITECS</h5>
                            <p className="card-text">
                                This project is an e-commerce about products
                                related to 3D printing, you can find both printer
                                components and already printed busts and objects,
                                we also offer personalized designs.
                                Technologies and tools applied in my project:
                                PHP + Laravel, JavaScript + Vue Js, HTML, CSS,
                                Bootstrap and more...</p>
                                <Button />
                        </div>
                </div>
            </div>
        </div>
    )
}
