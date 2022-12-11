import React from 'react'
import '../components/sass/main.scss'
import Me1 from '../components/img/1.png'
import Me2 from '../components/img/2.png'
import Me3 from '../components/img/3.png'

const About = () => {
  return (
    <>
       <section class="section-about">
<div class="u-center-text u-margin-bottom-big">
    <h2 class="heading-secondary">
        Desisning Websites is Our Passion
    </h2>
</div>

<div class="row">
    <div class="col-1-of-2">
        <h3 class="heading-tertiary u-margin-bottom-small">Creating A Beautiful Website is Our #1 Goal</h3>
        <p class="paragraph">
        At Warrior Web Designs, we are dedicated to providing the best possible web design services to our clients. We strive to be leaders in the industry, 
        and work tirelessly to ensure that your website is not only visually stunning, but also user-friendly and effective at achieving your business goals.
                      
        </p>

        <h3 class="heading-tertiary u-margin-bottom-small">We Create SEO for your Website, Embedded right into the code</h3>
        <p class="paragraph">
        We understand that a successful website is the cornerstone of any modern business, and we are committed to helping you achieve your online goals. In addition to our custom web design services, we also offer a range of other services, including search engine optimization (SEO) and mobile optimization, to help your website attract more visitors and reach more potential customers. 
        We are committed to excellence in all that we do, and we will stop at nothing to ensure that your website is the best it can be.
        </p>

        <a href="#" class="btn-text">Learn more &rarr;</a>
    </div>
    <div class="col-1-of-2">
        <div class="composition">
            <img src={Me3} alt="Photo 1" class="composition__photo composition__photo--p1" />
            <img src={Me2} alt="Photo 2" class="composition__photo composition__photo--p2" />
            <img src={Me1} alt="Photo 3" class="composition__photo composition__photo--p3" />
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default About



