import Testimonial from "@/components/Testimonial";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Page() {
  return (
    <section class="min-h-screen">
      <div class="services flex flex-col items-center justify-between sm:flex-row">
        <div class="relative">
          <Image
            src="/image/image3.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            class="object-cover h-24 w-screen sm:h-[80vh]"
          />
        </div>
        <div class="my-auto p-5 content-center">
          <h2>Our Products & Services</h2>
          <h3>Dining Experience</h3>
          <p>
            Our seasonal menu features a carefully curated selection of
            innovative dishes crafted with the finest ingredients and executed
            with precision and creativity by our talented culinary team.
          </p>
          <h3 class="mt-3">Private Events & Catering</h3>
          <p>
            Whether you're planning a corporate event, wedding reception, or
            intimate gathering with friends and family, our dedicated crew will
            work with you to create an unforgettable dining experience tailored
            to your tastes and preferences.
          </p>
          <h3 class="mt-3">Takeout & Delivery</h3>
          <p>
            Whether you're craving your favorite dishes for a cozy night in or
            hosting a casual gathering with friends, our curated takeout menu
            offers a selection of our most popular dishes available for pickup
            or delivery. Experience the same exceptional quality and flavor
            wherever you are.
          </p>
          <button class="flex gap-2 mt-2 p-2 border border-solid rounded-md bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#25D366"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            Contact Us
          </button>
        </div>
      </div>
      <Testimonial />
      <div id="menu">
        <Menu />
      </div>
    </section>
  );
}
