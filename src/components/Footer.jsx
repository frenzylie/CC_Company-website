"use client";

import Link from "next/link";
import scrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <main class="bg-slate-800 text-gray-200">
      <div class="p-4 flex flex-col sm:flex-row">
        <div class="basis-1/6 flex-none justify-center mx-auto">
          <h2 class="font-semibold">Quick Link</h2>
          <ul>
            <li>
              <button onClick={scrollToTop}>Top</button>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/crews">Crews</Link>
            </li>
          </ul>
        </div>
        <div class="text-justify p-3 sm:p-0">
          <h2 class="font-semibold">Disclaimers</h2>
          <p>
            Please note that everything presented on this website, including
            company information, products, services, testimonials, and menu
            items, are entirely fictional and created for illustrative purposes
            only. Any resemblance to actual persons, companies, or events are
            purely coincidental.
          </p>
          <p>
            The images used on this website may include stock photos or images
            obtained from third-party sources. They are used for demonstration
            purposes only and do not represent real individuals, businesses, or
            products.
          </p>
          <p>
            The purpose of this website is to serve as a demonstration or
            exercise in web design and content creation. It does not represent a
            real business or offer real products or services.
          </p>
        </div>
      </div>
    </main>
  );
}
