import React from 'react'
import img1 from '../../img/cat1.jpeg'; // with import
import img2 from '../../img/hdSun.jpeg'; // with import
import img3 from '../../img/img2.jpeg'; // with import
import './carrouselHome.css'

const CarrouselMain = () => {

    return (
        <div className="homeMainCarouselContainer">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className='active'>•</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">•</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2">•</li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" role="button" href='#carouselExampleIndicators' data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href='#carouselExampleIndicators' role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        </div>
    )
}

export default CarrouselMain
{/* 
<img className="dBlock w-100"
                                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                                alt="First slide" />
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100"
                            src="https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_4x3.jpg"
                            alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100"
                            src="https://i.pinimg.com/originals/7e/0a/50/7e0a507de8cf8b46e0f2665f1058ef37.jpg"
                            alt="Third slide" /> */}

