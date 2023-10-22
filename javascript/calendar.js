// fetch(("https://www.googleapis.com/calendar/v3/calendars/c_1f9277f62b81da3cc239dbf21c2c483b367df96d0cd06f8933f0c203ba3418f6@group.calendar.google.com/events?key=")

// fetch( "https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyB6mHlr2Yt1DsSaHU3RCHWKyyZqvOf4eok")
// .then( res => res.json())
// .then(res => console.log(res))

fetch("https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyB6mHlr2Yt1DsSaHU3RCHWKyyZqvOf4eok")
  .then(res => res.json())
  .then(data => {
    data.items.forEach((event => {
      const row = document.createElement("tr");

      for (let i = 0; i < 5; i++) {
        const cell = document.createElement("td");
        console.log(data)

        cell.innerHTML = formatEventData(event);

        row.appendChild(cell);
      }

      document.getElementById("calendar-body").appendChild(row);
    }));
  });

function formatEventData(event) {
  return `<strong> ${event.summary} </strong> <br> ${event.start.dateTime} - ${event.end.dateTime} <br>`;
}
