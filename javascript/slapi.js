// Buses 
fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=f7c188a0820b41f1ada4164057d66e33&siteid=7000&timewindow=30')
.then(res => res.json())
.then(res => res.ResponseData.Buses.forEach((data) => {
    busesData(data)
}));

const busesData = (data) => {
    let slElm = document.getElementById("sl-info")
    let busesInfo = ""
    busesInfo += `
        <div class = "sl-info-child"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bus-front-fill" viewBox="0 0 16 16">
        <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A43.608 43.608 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1v2ZM3.552 3.22A43.306 43.306 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44.304 44.304 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994ZM8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.304 44.304 0 0 0 8 4Zm-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z"/>
      </svg><i class="bi bi-bus-front-fill"></i> ${data.LineNumber} | ${data.Destination} | ${data.DisplayTime} |  Läge ${data.StopPointDesignation}</div>
    `
    slElm.innerHTML += busesInfo
};

// Trains
fetch('https://api.sl.se/api2/realtimedeparturesV4.json?key=f7c188a0820b41f1ada4164057d66e33&siteid=7006&timewindow=30')
.then(res => res.json())
.then(res => res.ResponseData.Trains.forEach((data) => {
    trainData(data)
}));

const trainData = (data) => {
    let slElm = document.getElementById("sl-info2")
    let trainInfo = ""
    trainInfo += `
        <div class = "sl-info-child2"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-train-front-fill" viewBox="0 0 16 16">
        <path d="M10.621.515C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM6.5 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm-2 2h7A1.5 1.5 0 0 1 13 5.5v2A1.5 1.5 0 0 1 11.5 9h-7A1.5 1.5 0 0 1 3 7.5v-2A1.5 1.5 0 0 1 4.5 4Zm.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM4 5.5a.5.5 0 0 1 .5-.5h3v3h-3a.5.5 0 0 1-.5-.5v-2ZM8.5 8V5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3Z"/>
      </svg><i class="bi bi-train-front-fill"></i>  ${data.LineNumber} ${data.Destination} ${data.DisplayTime} Läge ${data.StopPointDesignation}</div>
    `
    slElm.innerHTML += trainInfo
};
