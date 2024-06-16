export default function Testimonial() {
  return (
    <div className="testimonials mt-4">
      <h2 class="text-xl text-center font-bold">
        Few words from our satisfied customers
      </h2>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div class="flex flex-col justify-center m-auto py-4 px-20">
            <h3 class="font-semibold">Jane D.</h3>
            <p class="text-justify">
              "What an incredible dining experience! From the moment we walked
              in, we were greeted with warmth and hospitality. The food was
              absolutely divine, each dish bursting with flavor and beautifully
              presented. Savoria Delights truly exceeded our expectations, and
              we can't wait to come back!"
            </p>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <div class="flex flex-col justify-center m-auto py-4 px-20">
            <h3 class="font-semibold">John S.</h3>
            <p class="text-justify">
              "I recently hosted a private event at Savoria Delights, and I
              couldn't have been happier with the experience. The events team
              was incredibly attentive and accommodating, ensuring that every
              detail was perfect. The food was outstanding, and my guests were
              raving about it all night. Thank you, Savoria Delights, for making
              my event unforgettable!"
            </p>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <div class="flex flex-col justify-center m-auto py-4 px-20">
            <h3 class="font-semibold">Bill T.</h3>
            <p class="text-justify">
              "With busy schedules, we often opt for takeout, and Savoria
              Delights' takeout menu has become our go-to choice. The food is
              always fresh and flavorful, and the ordering process is quick and
              easy."
            </p>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
