import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='aboutBottom'>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque adipisci accusamus ad facere sint iusto, magnam a necessitatibus maxime molestias nisi, cum quae nesciunt, nulla animi. At, consectetur. Nisi, excepturi!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quasi libero quo magnam impedit similique dolore architecto, sequi praesentium autem id, veniam aut laudantium hic nobis nulla, vitae alias labore?
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam at earum ipsa pariatur, totam adipisci quidem, voluptatem amet, voluptate porro dolor eius. Et quae officiis unde porro quaerat tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis veniam ipsam possimus aut velit voluptatibus laboriosam aperiam asperiores. Architecto veniam quidem similique, dolor explicabo illo culpa aspernatur rem ratione?

        </p>
      </div>
    </div>
  )
}
export default About




