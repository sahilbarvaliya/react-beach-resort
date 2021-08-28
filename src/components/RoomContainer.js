import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loding from "./Loding";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loding />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loding />;
//         }
//         return (
//           <>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
