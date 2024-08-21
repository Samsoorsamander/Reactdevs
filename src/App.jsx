import { initialTravelPlan } from "./Components/places";
import { useState } from "react";

export default function App() {
  return (
    <>
      <TravelPlan />
    </>
  );
}

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
