import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// core version + navigation, pagination modules:
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVT1,
    name:'Tina Snow',
    review: 'Modi alias animi dolorem aliquan en eun beatem maiores, consectetur preasentiun quibusdan, comodi velit porro blandities consequtur qui molestine, Dolorem, perspiciatiss asperantu laboure disti ratione deluts volutaun dolores desert exlicabo maostre ducie queilie?'
  },
  {
    avatar: AVT2,
    name:'Shatta Wale',
    review: 'Modi alias animi dolorem aliquan en eun beatem maiores, consectetur preasentiun quibusdan, comodi velit porro blandities consequtur qui molestine, Dolorem, perspiciatiss asperantu laboure disti ratione deluts volutaun dolores desert exlicabo maostre ducie queilie?'
  },
  {
    avatar: AVT3,
    name:'Kunne Despite',
    review: 'Modi alias animi dolorem aliquan en eun beatem maiores, consectetur preasentiun quibusdan, comodi velit porro blandities consequtur qui molestine, Dolorem, perspiciatiss asperantu laboure disti ratione deluts volutaun dolores desert exlicabo maostre ducie queilie?'
  },
  {
    avatar: AVT4,
    name:'Nana Ana McBrown',
    review: 'Modi alias animi dolorem aliquan en eun beatem maiores, consectetur preasentiun quibusdan, comodi velit porro blandities consequtur qui molestine, Dolorem, perspiciatiss asperantu laboure disti ratione deluts volutaun dolores desert exlicabo maostre ducie queilie?'
  },

  
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Tetimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1} 
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>                                                   
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials