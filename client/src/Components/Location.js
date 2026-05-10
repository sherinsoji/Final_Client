import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Location=()=>
{
const [ip, setIp] = useState(null); 
const [geoData, setGeoData] = useState(null); 
const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIp(response.data.ip); // Set the IP address in state
    } catch (error) {
      console.error("Error fetching IP address:", error.message);
    }
  };
const getGeoLocationData = async () => {
    if (!ip) return; // Ensure IP is available before making the request
    try {
      const response = await axios.get(
`https://geo.ipify.org/api/v2/country?apiKey=at_ATcS5s96AXq7tU3hrWPE0hZmQaRtN&ipAddress=${ip}`
      );
      setGeoData(response.data); // Set geolocation data in state
      console.log("GeoLocation Data:", response.data);
    } catch (error) {
      console.error("Error fetching geolocation data:", error.message);
    }
  };

useEffect(() => {
    fetchIpAddress();
  }, []);

useEffect(() => {
    if (ip) {
      getGeoLocationData();
    }
  }, [ip]);

    return(
       <div className="location">
      <br />
      <br />
      {ip ? <p>IP Address: {ip}</p> : <p>Loading IP address...</p>}
      {geoData ? (
        <div>
          Country: {geoData.location.country}
          <br />
          Region: {geoData.location.region}
          <br/>
          City:{geoData.location.city}
         <br/>
          Postal Code:{geoData.location.postalCode}
          <br/>
          Time Zone:{geoData.location.timezone}
          <br/>
          Language:{geoData.location.language}
          <br/>
          Continent:{geoData.location.continent}
           <br/>
           Latitude: {geoData.location.lat} <br />
            Longitude: {geoData.location.lng} <br />
          </div>
      ) : (
        <p>Loading Geolocation Data...</p>
      )}
    </div>
  );

}
export default Location;