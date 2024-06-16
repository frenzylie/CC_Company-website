import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main class="about-us flex flex-col">
      <section class="mt-5">
        <div class="flex flex-col items-center justify-between sm:flex-row">
          <div class="relative">
            <Image
              src="/image/image2.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              class="object-cover h-24 w-screen sm:h-screen"
            />
          </div>
          <div class="my-auto p-5 content-center text-justify">
            <h3 class="text-xl font-bold mb-3">Our History</h3>
            <h4 class="font-medium text-lg">Founding</h4>
            <p>
              Founded in 2010 by culinary enthusiasts, their shared love for
              exquisite cuisine and dedication to providing unparalleled dining
              experiences inspired them to create a restaurant that would
              celebrate the art of gastronomy.
            </p>
            <h4 class="font-medium text-lg mt-2">Early Years</h4>
            <p>
              In its early years, Savoria Delights quickly established itself as
              a culinary destination known for its innovative dishes, impeccable
              service, and inviting atmosphere.
            </p>
            <h4 class="font-medium text-lg mt-2">Milestones</h4>
            <ul>
              <li>
                2012
                <p>Savoria Delights was featured in Local Newspaper.</p>
              </li>
              <li>
                2014
                <p>
                  Expanded its menu to include a wider range of seasonal and
                  locally sourced ingredients.
                </p>
              </li>
              <li>
                2018
                <p>
                  Celebrated its 8th anniversary with a special menu featuring
                  signature dishes, showcasing the restaurant's evolution and
                  culinary prowess.
                </p>
              </li>
              <li>
                2020
                <p>
                  Adapted to the challenges of the global pandemic by
                  introducing takeout and delivery services.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="my-5 px-5">
        <div>
          <h3 class="text-xl font-bold mb-3">Meet Our Crew</h3>
          <p>
            Get to know the heart of our team - a collective of passionate
            chefs, attentive servers, and welcoming hosts dedicated to creating
            memorable dining moments for you. With a commitment to excellence in
            every dish and interaction, experience our hospitality and delicious
            cuisine, crafted with care and served with a smile.
          </p>
          <button class="my-2 p-2 border border-white border-solid rounded-md bg-gray-700">
            <Link href="/crews">Meet Our Crew</Link>
          </button>
        </div>
      </section>
      <section id="culture">
        <div class="flex flex-col-reverse items-center justify-between sm:flex-row">
          <div class="my-auto p-5 content-center text-justify">
            <h3 class="text-xl font-bold mb-3">Our Culture & Values</h3>
            <h4 class="font-medium text-lg">Culinary Excellence</h4>
            <p>
              From sourcing the finest ingredients to crafting inspired dishes
              with precision and creativity, we strive to elevate the art of
              gastronomy and delight the senses of our guests.
            </p>
            <h4 class="font-medium text-lg mt-2">Sustainability</h4>
            <p>
              We believe in responsible stewardship of our planet and are
              dedicated to sustainable practices in all aspects of our
              operations to make a positive impact on the world around us.
            </p>
            <h4 class="font-medium text-lg mt-2">Hospitality & Warmth</h4>
            <p>
              Hospitality is at the heart of everything we do. Our crew is dedicated to providing personalized service
              and ensuring that every guest feels valued and cared for from the
              moment they walk through our doors.
            </p>
            <h4 class="font-medium text-lg mt-2">Creativity & Innovation</h4>
            <p>
              Our chefs are encouraged to experiment with new flavors and
              techniques. We are always
              striving to innovate and evolve, keeping our menu fresh and
              exciting for our guests.
            </p>
          </div>
          <div class="relative">
            <Image
              src="/image/image9.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              class="object-cover h-24 w-screen sm:h-screen "
            />
          </div>
        </div>
      </section>
      <section class="my-5 text-justify">
        <div class="flex flex-col items-center justify-between">
          <div class="relative">
          <Image
              src="/image/image5.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              class="object-cover h-48 w-screen"
            />
          </div>
          <div class="px-5 mt-5">
          <h3 class="text-xl font-bold mb-3">Join Our Team</h3>
          <h4 class="font-medium text-lg">A Dynamic Work Environment</h4>
          <p>
            We offer a dynamic and collaborative work environment where
            creativity and passion are celebrated. Our crew is like a family,
            working together to create exceptional dining experiences and foster
            a culture of excellence.
          </p>
          <h4 class="font-medium text-lg mt-2">Growth & Development Opportunities</h4>
          <p>
            We believe in investing in our crew members' growth and development.
            Whether you're a seasoned chef or just starting your culinary
            career, we offer opportunities for learning and advancement.
          </p>
          <h4 class="font-medium text-lg mt-2">A Supportive Team</h4>
          <p>
            We support and empower each other to succeed. We value diversity,
            collaboration, and mutual respect, and are committed to fostering a
            positive and inclusive work environment.
          </p>
        </div>
        </div>
      </section>
    </main>
  );
}
