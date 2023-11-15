import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import "swiper/css"


import { carouselInfo } from "./carouse-data"
import classes from "./index.module.scss"


export default function index() {

  return (
    <section className={classes.memCarousel}>

      <section className={classes.wrapper}>
        <h1 className={classes.carouselHeader}>
          Why I'm a Medium Member...
        </h1>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          { carouselInfo.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={classes.contentWrapper}>
                <div className={classes.imageWrapper}>
                  <img
                    src={item.image}
                    alt="image"
                    className={classes.carouselImage}
                  />
                  <div className={classes.fcircle}/>
                  <div className={classes.scircle} />
                </div>

                <div>
                  <div className={classes.carouselDescription}>
                    {item.text}
                  </div>
                  <p className={classes.name}>{item.name}</p>            
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  )
}
