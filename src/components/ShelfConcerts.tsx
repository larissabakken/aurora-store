import { useState, useEffect } from "react";
import CardConcerts from "./CardConcerts";

interface TourDate {
  address?: string;
  formattedStartDate?: string;
  date: Date;
  venueName?: string;
  id: number;
}

const ShelfConcerts = () => {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);

  useEffect(() => {
    const fetchTourDates = async () => {
      try {
        const response = await fetch(
          "https://cdn.seated.com/api/tour/c1a1e8be-fb4e-4e20-955a-3a2890e5892e?include=tour-events"
        );
        const data = await response.json();

        const dates: TourDate[] = data.included.map((obj: any) => ({
          //optional chaining and nullish coalescing operator to avoid errors
          venueName: obj?.attributes?.["venue-name"] || "",
          formattedStartDate: obj?.attributes?.["starts-at-short"] || "",
          date: new Date(obj?.attributes?.["starts-at"]),
          address: obj?.attributes?.["formatted-address"] || "",
          id: obj.id,
        }));

        dates.sort((a, b) => a.date.getTime() - b.date.getTime());
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
          key={item.id}
          //the nullish coalescing operator to provide default values
          description={item.venueName || ""}
          address={item.address || ""}
          concertDate={item.formattedStartDate || ""}
        />
      ))}
    </div>
  );
};

export default ShelfConcerts;
