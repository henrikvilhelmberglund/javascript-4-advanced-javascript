const klm = {
  airline: "KLM",
  iataCode: "KL",
  bookings: [],
  // book: function () {};
  book(flightNumber, passenger) {
    console.log(
      `${passenger} har bokat en plats med ${this.airline} och flightnummer ${this.flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passenger,
    });
  },
};

klm.book(1178, "Michael Gustavsson");
klm.book(1178, "Annika Gustavsson");
klm.book(2278, "Bertil Jonsson");
