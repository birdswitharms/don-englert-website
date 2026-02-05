// Massage the discog_output.json file
// Only need id, type, format, label, title, resource_url, role, artist

const discog_output = require("./discog_output.json");
export const massagedOutput = discog_output.map(item => ({
  id: item.id,
  type: item.type,
  format: item.format,
  label: item.label,
  title: item.title,
  resource_url: item.resource_url,
  role: item.role,
  year: item.year,
  artist: item.artist,
  videoId: item.video ? item.video : null
}));
