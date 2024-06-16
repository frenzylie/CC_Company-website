"use client";

import Image from "next/image";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import { Goudy_Bookletter_1911 } from "next/font/google";

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-goudy",
});

export default function Home() {
  return (
    <main class="home flex flex-col text-gray-200 bg-[#121212]">
      <section class="min-h-screen-minus-header relative">
        <Image
          src="/image/hero.jpg"
          alt="Hero image"
          width={0}
          height={0}
          sizes="100vw"
          class="object-cover w-screen h-screen-minus-header"
        />
        <div class="absolute left-[5vw] top-[20vh] h-auto w-auto p-5 bg-black bg-black/50">
          <h1 class="text-3xl pb-6 leading-tight">
            <span
              className={`${goudy.variable} font-sans text-[#D1A103] text-5xl`}
            >
              Savor
            </span>{" "}
            the Flavor, <br />
            Indulge in{" "}
            <span
              className={`${goudy.variable} font-sans text-[#D1A103] text-5xl`}
            >
              Delight!
            </span>
          </h1>
          <p class="text-xl">
            Where every bite is a journey of flavor <br />
            and every dish a celebration of culinary artistry.
          </p>
        </div>
      </section>
      <section class="min-h-screen mt-5 sm:mt-0">
        <div class="overview flex flex-col items-center justify-between sm:flex-row">
          <div class="relative">
            <Image
              src="/image/image6.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              class="object-cover h-24 w-screen sm:h-screen"
            />
          </div>
          <div class="my-auto p-5 content-center">
            <h2>About Savoria Delights</h2>
            <h3>Our History</h3>
            <p>
              Born from a shared passion for culinary excellence and a desire to
              create an unforgettable dining experience. Founded in 2010, our
              journey began with a simple yet ambitious vision: to delight the
              senses and inspire the palate through the art of gastronomy.
            </p>
            <button>
              <Link href="/about">Our Story</Link>
            </button>
            <h3>Our Culture</h3>
            <p>
              At the heart of Savoria Delights lies a culture of innovation,
              integrity, and community. We source the finest ingredients from
              local farmers and purveyors, prioritizing sustainability to create
              a dining experience that is not only delicious but also memorable
              and meaningful.
            </p>
            <button>
              <Link href="/about#culture">Learn More</Link>
            </button>
            <h3>Our Crew</h3>
            <p>
              Our crew are comprised of dedicated culinary artisans, each
              bringing their unique talents and expertise to the table. We are
              united by a commitment to excellence and a love for good food.
            </p>
            <button>
              <Link href="/crews">Meet Our Crew</Link>
            </button>
          </div>
        </div>
      </section>
      <section class="services min-h-screen">
        <div class="flex flex-col-reverse items-center justify-between sm:flex-row">
          <div class="my-auto p-5 content-center">
            <h2>What we offer</h2>
            <h3>Dining Experience</h3>
            <p>
              From innovative appetizers to exquisite entrees to decadent
              desserts, our seasonal menu is carefully crafted with the finest
              ingredients and executed with precision and creativity by our
              talented culinary team.
            </p>
            <button>
              <Link href="/services#menu">Explore our Menu</Link>
            </button>
            <h3>Private Events & Catering</h3>
            <p>
              Host your next special occasion with us at Savoria Delights.
              Whether you're planning a corporate event, wedding reception, or
              intimate gathering, we'll take care of every detail so you can
              relax and enjoy the celebration.
            </p>
            <button>
              <Link href="/services">Plan Your Event</Link>
            </button>
            <h3>Takeout & Delivery</h3>
            <p>
              Whether you're craving your favorite dishes for a cozy night in or
              hosting a casual gathering with friends, our curated takeout menu
              offers a selection of our most popular dishes available for pickup
              or delivery.
            </p>
            <button>
              <Link href="/services">Order Now</Link>
            </button>
          </div>
          <div class="relative">
            <Image
              src="/image/image4.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              class="object-cover h-24 w-screen sm:h-screen "
            />
          </div>
        </div>
      </section>
      <section>
        <Testimonial />
      </section>
    </main>
  );
}
