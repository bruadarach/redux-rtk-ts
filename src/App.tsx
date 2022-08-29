import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CustomerCard from "./app/components/CustomerCard";
import ReservationCard from "./app/components/ReservationCard";
import { RootState } from "./app/store";
import { addReservation } from "./features/reservationSlice";

function App() {
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {/* <div className="reservation-card-container">Laith Harb</div> */}
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {/* <CustomerCard /> */}
          {customers.map((customer) => {
            // return <CustomerCard />;
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
              ></CustomerCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
