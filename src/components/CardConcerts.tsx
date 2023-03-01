import React from "react";

const CardConcerts = (props: any) => {
  return (
    <>
      <div>CardConcerts</div>
      <p>{props.description}</p>
      <p>{props.address}</p>
      <p>{props.concertDate}</p>
    </>
  );
};

export default CardConcerts;
