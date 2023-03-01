import { useState, useEffect } from "react";
import CardConcerts from "./CardConcerts";

interface TourDate {
  address?: string;
  formatted_start_date?: string;
  date: Date;
  venue_name?: string;
  id: number;
}

export default function ShelfConcerts() {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);
  useEffect(() => {
    const fetchTourDates = async () => {
      try {
        const response = await fetch(
          "https://cdn.seated.com/api/tour/c1a1e8be-fb4e-4e20-955a-3a2890e5892e?include=tour-events"
        );
        const data = await response.json();

        const dates: TourDate[] = data.included.map((obj: any) => {
          return {
            venue_name: obj["attributes"]["venue-name"],
            formatted_start_date: obj["attributes"]["starts-at-short"],
            date: obj["attributes"]["starts-at"],
            address: obj["attributes"]["formatted-address"],
          };
        });

        dates.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
        setTourDates(dates);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTourDates();
  }, []);

  return (
    <div>
      {tourDates.map((item: TourDate, index: number) => (
        <CardConcerts
          key={index}
          description={item.venue_name}
          address={item.address}
          concertDate={item.formatted_start_date}
        />
      ))}
    </div>
  );
}
