
// 20240318110010
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=2024-03-02&minmagnitude=6



const earthquakes = {
  "type": "FeatureCollection",
  "metadata": {
    "generated": 1710752409000,
    "url": "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2024-01-01&endtime=2024-03-02&minmagnitude=6",
    "title": "USGS Earthquakes",
    "status": 200,
    "api": "1.14.0",
    "count": 16
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "mag": 6.3,
        "place": "southern East Pacific Rise",
        "time": 1708653073973,
        "updated": 1710552066890,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000m0zq",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000m0zq&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": 0,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 611,
        "net": "us",
        "code": "7000m0zq",
        "ids": ",usauto7000m0zq,at00s9ad5e,us7000m0zq,",
        "sources": ",usauto,at,us,",
        "types": ",internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 98,
        "dmin": 7.986,
        "rms": 0.86,
        "gap": 38,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.3 - southern East Pacific Rise"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.7745,
          -35.0892,
          10
        ]
      },
      "id": "us7000m0zq"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6,
        "place": "171 km NNE of Colonia, Micronesia",
        "time": 1707910822125,
        "updated": 1709365216009,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000lz5f",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000lz5f&format=geojson",
        "felt": 1,
        "cdi": 1,
        "mmi": 3.817,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 554,
        "net": "us",
        "code": "7000lz5f",
        "ids": ",us7000lz5f,usauto7000lz5f,at00s8ugfk,pt24045001,",
        "sources": ",us,usauto,at,pt,",
        "types": ",dyfi,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 143,
        "dmin": 6.667,
        "rms": 0.68,
        "gap": 56,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.0 - 171 km NNE of Colonia, Micronesia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          138.5725,
          11.0047,
          14
        ]
      },
      "id": "us7000lz5f"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.1,
        "place": "Volcano Islands, Japan region",
        "time": 1707736774858,
        "updated": 1710340913981,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000lym6",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000lym6&format=geojson",
        "felt": 2,
        "cdi": 1,
        "mmi": 0,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 573,
        "net": "us",
        "code": "7000lym6",
        "ids": ",us7000lym6,usauto7000lym6,at00s8qq4q,pt24043000,",
        "sources": ",us,usauto,at,pt,",
        "types": ",dyfi,internal-moment-tensor,internal-origin,losspager,moment-tensor,oaf,origin,phase-data,shakemap,",
        "nst": 168,
        "dmin": 5.095,
        "rms": 0.89,
        "gap": 23,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.1 - Volcano Islands, Japan region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          142.7919,
          22.0086,
          236
        ]
      },
      "id": "us7000lym6"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.1,
        "place": "Kermadec Islands, New Zealand",
        "time": 1707476268482,
        "updated": 1709783797993,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000lxyv",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000lxyv&format=geojson",
        "felt": 1,
        "cdi": 3.9,
        "mmi": 4.095,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 573,
        "net": "us",
        "code": "7000lxyv",
        "ids": ",us7000lxyv,usauto7000lxyv,at00s8l54e,pt24040000,",
        "sources": ",us,usauto,at,pt,",
        "types": ",dyfi,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 210,
        "dmin": 0.893,
        "rms": 0.74,
        "gap": 26,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.1 - Kermadec Islands, New Zealand"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -177.2323,
          -29.9268,
          13
        ]
      },
      "id": "us7000lxyv"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.5,
        "place": "70 km W of Tarauacá, Brazil",
        "time": 1706434736538,
        "updated": 1708622206433,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000lui3",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000lui3&format=geojson",
        "felt": 5,
        "cdi": 3.4,
        "mmi": 2.404,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 652,
        "net": "us",
        "code": "7000lui3",
        "ids": ",us7000lui3,usauto7000lui3,pt24028000,at00s7ytgx,",
        "sources": ",us,usauto,pt,at,",
        "types": ",dyfi,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 237,
        "dmin": 6.527,
        "rms": 0.86,
        "gap": 40,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.5 - 70 km W of Tarauacá, Brazil"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.4005,
          -8.236,
          621.081
        ]
      },
      "id": "us7000lui3"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.1,
        "place": "15 km W of Taxisco, Guatemala",
        "time": 1706334768419,
        "updated": 1709660750851,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000luai",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000luai&format=geojson",
        "felt": 358,
        "cdi": 7.5,
        "mmi": 4.925,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 841,
        "net": "us",
        "code": "7000luai",
        "ids": ",us7000luai,usauto7000luai,at00s7woc1,pt24027000,",
        "sources": ",us,usauto,at,pt,",
        "types": ",dyfi,ground-failure,impact-text,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 134,
        "dmin": 0.479,
        "rms": 0.84,
        "gap": 57,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.1 - 15 km W of Taxisco, Guatemala"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.6159,
          14.0636,
          90
        ]
      },
      "id": "us7000luai"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.3,
        "place": "39 km SW of Port-Vila, Vanuatu",
        "time": 1706020425022,
        "updated": 1708372555578,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000lt73",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000lt73&format=geojson",
        "felt": 91,
        "cdi": 6.1,
        "mmi": 5.26,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 1,
        "sig": 666,
        "net": "us",
        "code": "7000lt73",
        "ids": ",at00s7pxsb,pt24023000,us7000lt73,usauto7000lt73,",
        "sources": ",at,pt,us,usauto,",
        "types": ",dyfi,ground-failure,impact-link,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 248,
        "dmin": 4.339,
        "rms": 0.71,
        "gap": 38,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.3 - 39 km SW of Port-Vila, Vanuatu"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          168.0499,
          -17.9827,
          31
        ]
      },
      "id": "us7000lt73"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 7,
        "place": "128 km WNW of Aykol, China",
        "time": 1705946944418,
        "updated": 1710103594729,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000lsze",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us7000lsze&format=geojson",
        "felt": 476,
        "cdi": 8.7,
        "mmi": 8.531,
        "alert": "red",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2414,
        "net": "us",
        "code": "7000lsze",
        "ids": ",us7000lsze,usauto7000lsze,pt24022000,at00s7od3a,",
        "sources": ",us,usauto,pt,at,",
        "types": ",dyfi,finite-fault,general-text,ground-failure,impact-text,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 121,
        "dmin": 0.425,
        "rms": 0.65,
        "gap": 29,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 7.0 - 128 km WNW of Aykol, China"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.6594,
          41.2628,
          13
        ]
      },
      "id": "us7000lsze"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.2,
        "place": "Southwest Indian Ridge",
        "time": 1705788579708,
        "updated": 1706412076170,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m53t",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m53t&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": 0,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 591,
        "net": "us",
        "code": "6000m53t",
        "ids": ",usauto6000m53t,at00s7kyw5,pt24020002,us6000m53t,",
        "sources": ",usauto,at,pt,us,",
        "types": ",internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 102,
        "dmin": 7.701,
        "rms": 0.62,
        "gap": 18,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.2 - Southwest Indian Ridge"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          46.1966,
          -39.93,
          10
        ]
      },
      "id": "us6000m53t"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.6,
        "place": "123 km NW of Tarauacá, Brazil",
        "time": 1705786265092,
        "updated": 1706413835966,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m52p",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m52p&format=geojson",
        "felt": 4,
        "cdi": 3.8,
        "mmi": 2.561,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 672,
        "net": "us",
        "code": "6000m52p",
        "ids": ",us6000m52p,usauto6000m52p,pt24020001,at00s7kx3u,",
        "sources": ",us,usauto,pt,at,",
        "types": ",dyfi,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 185,
        "dmin": 7.065,
        "rms": 0.69,
        "gap": 36,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.6 - 123 km NW of Tarauacá, Brazil"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.464,
          -7.2879,
          607
        ]
      },
      "id": "us6000m52p"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.1,
        "place": "Pagan region, Northern Mariana Islands",
        "time": 1705765720121,
        "updated": 1710604733834,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m50e",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m50e&format=geojson",
        "felt": 1,
        "cdi": 3.4,
        "mmi": 4.04,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 573,
        "net": "us",
        "code": "6000m50e",
        "ids": ",us6000m50e,usauto6000m50e,at00s7kh95,pt24020000,",
        "sources": ",us,usauto,at,pt,",
        "types": ",dyfi,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,oaf,origin,phase-data,shakemap,",
        "nst": 302,
        "dmin": 3.263,
        "rms": 1.01,
        "gap": 10,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.1 - Pagan region, Northern Mariana Islands"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          145.6341,
          18.5192,
          184
        ]
      },
      "id": "us6000m50e"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.4,
        "place": "148 km NW of Fangale’ounga, Tonga",
        "time": 1705615941755,
        "updated": 1708657248035,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m4js",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m4js&format=geojson",
        "felt": 4,
        "cdi": 3.8,
        "mmi": 4.069,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 632,
        "net": "us",
        "code": "6000m4js",
        "ids": ",us6000m4js,usauto6000m4js,pt24018002,",
        "sources": ",us,usauto,pt,",
        "types": ",dyfi,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 121,
        "dmin": 1.372,
        "rms": 0.7,
        "gap": 22,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.4 - 148 km NW of Fangale’ounga, Tonga"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -175.4225,
          -18.9103,
          209
        ]
      },
      "id": "us6000m4js"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.4,
        "place": "45 km SSW of Jurm, Afghanistan",
        "time": 1704964826337,
        "updated": 1710615618040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m31m",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m31m&format=geojson",
        "felt": 111,
        "cdi": 5.1,
        "mmi": 4.196,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 687,
        "net": "us",
        "code": "6000m31m",
        "ids": ",us6000m31m,usauto6000m31m,pt24011000,at00s73ba0,",
        "sources": ",us,usauto,pt,at,",
        "types": ",dyfi,ground-failure,impact-text,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 140,
        "dmin": 3.122,
        "rms": 1.02,
        "gap": 17,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.4 - 45 km SSW of Jurm, Afghanistan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          70.6013,
          36.4979,
          204
        ]
      },
      "id": "us6000m31m"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.7,
        "place": "93 km SE of Sarangani, Philippines",
        "time": 1704746922361,
        "updated": 1710615603040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m2jp",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m2jp&format=geojson",
        "felt": 24,
        "cdi": 4.9,
        "mmi": 5.599,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 1,
        "sig": 702,
        "net": "us",
        "code": "6000m2jp",
        "ids": ",at00s6yn5a,pt24008000,us6000m2jp,usauto6000m2jp,",
        "sources": ",at,pt,us,usauto,",
        "types": ",dyfi,ground-failure,impact-link,impact-text,internal-moment-tensor,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 138,
        "dmin": 2.209,
        "rms": 0.76,
        "gap": 22,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.7 - 93 km SE of Sarangani, Philippines"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          126.1575,
          4.9225,
          62.574
        ]
      },
      "id": "us6000m2jp"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 6.2,
        "place": "8 km SW of Anamizu, Japan",
        "time": 1704093521584,
        "updated": 1710020297040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m0xm",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m0xm&format=geojson",
        "felt": 5,
        "cdi": 8.7,
        "mmi": 7.001,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 596,
        "net": "us",
        "code": "6000m0xm",
        "ids": ",us6000m0xm,",
        "sources": ",us,",
        "types": ",dyfi,ground-failure,losspager,origin,phase-data,shakemap,",
        "nst": 185,
        "dmin": 1.278,
        "rms": 0.4,
        "gap": 32,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 6.2 - 8 km SW of Anamizu, Japan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          136.8272,
          37.1895,
          10
        ]
      },
      "id": "us6000m0xm"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 7.5,
        "place": "2024 Noto Peninsula, Japan Earthquake",
        "time": 1704093009476,
        "updated": 1710020297040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000m0xl",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000m0xl&format=geojson",
        "felt": 401,
        "cdi": 8.9,
        "mmi": 8.793,
        "alert": "red",
        "status": "reviewed",
        "tsunami": 1,
        "sig": 2357,
        "net": "us",
        "code": "6000m0xl",
        "ids": ",pt24001001,at00s6kml3,us6000m0xl,",
        "sources": ",pt,at,us,",
        "types": ",dyfi,earthquake-name,finite-fault,general-text,ground-failure,impact-link,impact-text,internal-origin,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 282,
        "dmin": 0.957,
        "rms": 0.55,
        "gap": 36,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 7.5 - 2024 Noto Peninsula, Japan Earthquake"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          137.271,
          37.4874,
          10
        ]
      },
      "id": "us6000m0xl"
    }
  ],
  "bbox": [
    -177.2323,
    -39.93,
    10,
    168.0499,
    41.2628,
    621.081
  ]
}

// PATH to acces data in console:
// earthquakes.features[1].properties
 
/* let mag = earthquakes.features[0].properties.mag
let time = earthquakes.features[0].properties.time
let place = earthquakes.features[0].properties.place
console.log(`An earthquake with ${mag} magnitude took place in ${place} at ${time}.`) */


// (destructurizare)
let {mag, time, place} = earthquakes.features[0].properties
console.log(`An earthquake with ${mag} magnitude took place in ${place} at ${new Date(time)}.`)

//for loop

for(let i=0; i<earthquakes.features.length; i++) {
    let {mag, time, place} = earthquakes.features[i].properties
    if (mag>6.0 && place.includes("Japan")) {
        console.log(`An earthquake with ${mag} magnitude took place in ${place} at ${new Date(time)}.`)
    }
}