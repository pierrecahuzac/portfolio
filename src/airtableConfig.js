const Airtable = require("airtable");

export default function AirtableConfig() {
  Airtable.configure({
    endpointUrl: "https://api.airtable.com/",
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const base = Airtable.base("appEZiYnTCOVl3uWD");
}
