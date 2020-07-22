const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/4752c8b54daea21b8e1af471824b50e3/${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} Esta fazendo 
          ${body.currently.temperature} graus. Existe a chance de
          ${body.currently.precipProbability}
          % de chuva.`
      );
    }
  });
};

module.exports = forecast;
