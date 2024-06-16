"use client";

export default async function FetchCrew() {
  const res = await fetch("https://randomuser.me/api/?results=6", { next: {revalidate: 3600}});
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}