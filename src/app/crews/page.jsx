"use client";

import { useState, useEffect } from "react";
import FetchCrew from "@/components/FetchCrew";

export default function Page() {
  const [crewData, setCrewData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await FetchCrew();
        setCrewData(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const headChef = crewData[0];
  const sousChef = crewData.slice(1, 3);
  const manager = crewData[3];
  const supervisor = crewData.slice(4, 6);
  return (
    <section class="my-5 px-5">
    <div>
      <h2 class="text-xl font-bold">Crew Members</h2>
      <p>
        Discover the key individuals who bring expertise to every dish
        and make your dining experience unforgettable.
      </p>
      <h3 class="text-lg font-semibold mt-3 text-center">Kitchen Crew</h3>
      <div class="flex justify-center mx-auto">
      <div>
        <h4 class="text-center font-medium underline">Head Chef</h4>
        {headChef && (
          <div class="my-3 ">
            <img src={headChef.picture.large} alt="Head Chef" class="flex justify-center mx-auto" />
            <p class="text-center">
              {headChef.name.first} {headChef.name.last}
            </p>
            <p class="flex gap-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              {headChef.email}
            </p>
            <p class="flex gap-2 justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              {headChef.phone}
            </p>
          </div>
        )}
      </div></div>
      <div class="my-3 ">
        <h4 class="my-3 text-center font-medium underline">Sous Chefs</h4>
        <div class="flex flex-col justify-center mx-auto gap-12 sm:flex-row">
        {sousChef.map((chef, index) => (
          <div key={index}>
            <img src={chef.picture.large} alt={`Sous Chef ${index + 1}`} class="flex justify-center mx-auto" />
            <p class="text-center">
            {chef.name.first} {chef.name.last}
            </p>
            <p class="flex gap-2 justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg> {chef.email}</p>
              <p class="flex gap-2 justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>{chef.phone}</p>
          </div>
        ))}
      </div></div>
      <h3 class="text-lg font-semibold mt-8 text-center">Front-of-house Crew</h3>
      <div class="flex justify-center mx-auto">
        <div>
        <h4 class="text-center font-medium underline">Manager</h4>
        {manager && (
          <div class="my-3">
            <img src={manager.picture.large} alt="Manager" class="flex justify-center mx-auto" />
            <p class="text-center">
            {manager.name.first} {manager.name.last}
            </p>
            <p class="flex gap-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>{manager.email}</p>
              <p class="flex gap-2 justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>{manager.phone}</p>
          </div>
        )}
      </div></div>

      <div class="my-3">
        <h4 class="my-3 text-center font-medium underline">Supervisors</h4>
        <div class="flex flex-col justify-center mx-auto gap-12 sm:flex-row">
        {supervisor.map((sup, index) => (
          <div key={index}>
            <img src={sup.picture.large} alt={`Supervisor ${index + 1}`} class="flex justify-center mx-auto" />
            <p class="text-center">
            {sup.name.first} {sup.name.last}
            </p>
            <p class="flex gap-2 justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>{sup.email}</p>
              <p class="flex gap-2 justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>{sup.phone}</p>
          </div>
        ))}
      </div></div>
    </div></section>
  );
}
