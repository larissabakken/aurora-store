import React from "react";

interface Props {
  description?: string;
  address?: string;
  concertDate?: string;
}

const CardConcerts: React.FC<Props> = ({
  description,
  address,
  concertDate,
}) => {
  return (
    <div className="bg-card-bg-color my-4 mx-auto sm:mx-10 py-2 rounded-sm flex items-center justify-between px-2">
      <span className="w-1/4 truncate inline-block tooltip" title={description}>
        {description}
      </span>
      <span className="w-1/4 truncate">{address}</span>
      <span className="w-1/4 truncate">{concertDate}</span>
      <button className="w-1/4 truncate px-4 py-2 border bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-md shadow-2xl hover:shadow-hover-color hover:scale-110">
        Tickets to buy
      </button>
    </div>
  );
};

export default CardConcerts;
