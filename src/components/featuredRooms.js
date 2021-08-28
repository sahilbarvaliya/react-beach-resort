import React, { Component } from "react";
import { RoomContext } from "../context";
import Loding from "./Loding";
import Room from "./Room";
import Title from "./Title";
export default class featuredRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    // console.log(rooms);
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room}></Room>;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loding></Loding> : rooms}
        </div>
      </section>
    );
  }
}
