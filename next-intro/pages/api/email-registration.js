import path from "path";
import fs from "fs";
function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}
function extractData(path) {
  const jsonData = fs.readFileSync(path);
  return JSON.parse(jsonData);
}
export default function (req, res) {
  const { method } = req;

  const filePath = buildPath();
  const data = extractData(filePath);
  if (method === "POST") {
    const { email, eventId } = req.body;
    if (!data) return res.status(404).json({ message: "No data found" });

    const newEvents = data.allEvents.map((e) => {
      if (e.id === eventId) {
        if (e.emails_registered.includes(email)) {
          res.status(201).json({ message: "Email already registered" });
          return e;
        }
        return { ...e, emails_registered: [...e.emails_registered, email] };
      }
      return e;
    });

    fs.writeFileSync(filePath, JSON.stringify({ events_categories: data.events_categories, allEvents: newEvents }));
    res.status(200).json({ email, eventId });
  }
}
