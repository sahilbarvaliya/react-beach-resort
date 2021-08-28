import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "Free Cocktail",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam?",
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam?",
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "Free Cocktail",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam?",
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquam?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
