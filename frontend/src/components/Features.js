import React from 'react'
import World from '../components/img/world.png'
import SEO from '../components/img/seo.png'
import CellPhone from '../components/img/cell.png'
import Fast from '../components/img/fast2.png'


const Features = () => {
  return (
    <section className="section-features">
                
    <div className="row">
        <div className="col-1-of-4">
            <div className="feature-box">
                 <img src={World} alt="" />
                <h3 className="heading-tertiary u-margin-bottom-small">Host Your Domain</h3>
                <p className="feature-box__text">
                  Our platform allows you to easily and securely host your own custom domain, giving your website a professional and reliable online presence.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box">
            <img src={Fast} alt="" />
                <h3 className="heading-tertiary u-margin-bottom-small">Fastest Load Times</h3>
                <p className="feature-box__text">
                    Our advanced infrastructure ensures that your website loads quickly and efficiently, providing a seamless user experience for your visitors.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box">
                 <img src={CellPhone} alt="" />
                <h3 className="heading-tertiary u-margin-bottom-small">Built Mobile Friendly First</h3>
                 <p className="feature-box__text">
                 Our platform is designed to be fully responsive, ensuring that your website looks great and functions seamlessly on all devices, including smartphones and tablets.
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box">
                 <img src={SEO} alt="" />
                <h3 className="heading-tertiary u-margin-bottom-small">SEO is the name of the game</h3>
                <p className="feature-box__text">
                  Our platform is optimized for Search Engine Optimization, helping your website rank higher in search results and attract more organic traffic.
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features