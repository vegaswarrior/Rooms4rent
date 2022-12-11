import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'


const Pricing = () => {
  return (
    <>

    
    <section className="section-tours" id="section-tours">
    <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
            Our Starter Pricing Plans
        </h2>
    </div>

    <div className="row">
        <div className="col-1-of-3">
           <div className="card">
               <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">Landing Page</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>6 Months Free SSL</li>
                            <li>6 Months Web Hosting</li>
                            <li>1 Revision</li>
                        </ul>
                    </div>
               </div>
               <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Starting At</p>
                            <p className="card__price-value">$600</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Learn More!</a>
                    </div>
                </div>
           </div>
        </div>


        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">Blogs</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>1 Year Free SSL</li>
                            <li>1 Year Free Web Hosting</li>
                            <li>3 Revisions</li>
                 
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Starting At</p>
                            <p className="card__price-value">1,500</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Learn More!</a>
                    </div>
                </div>
            </div>
        </div>


        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">E-Commerce</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>2 Years Free SSL</li>
                            <li>2 Years Web Hosting</li>
                            <li>Unlimited Revisions</li>
                            <li>Fully integrated Admin Dashboard</li>
   
                            <li></li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Starting At</p>
                            <p className="card__price-value">$3,000</p>
                        </div>
                        <LinkContainer to="/ecommerce">
                          
                             <a className="btn btn--white">Learn More!</a>
                           
                        </LinkContainer>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">Discover all tours</a>
    </div> */}
</section>
</>
  )
}

export default Pricing