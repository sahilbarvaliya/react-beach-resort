import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/featuredRooms";
export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious Rooms" subtitle="deluxe rooms startig at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services> </Services>
      <FeaturedRooms></FeaturedRooms>
    </>
  );
}
