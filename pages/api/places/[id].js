// import { places } from '../../../../lib/db.js';
import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return response.status(400).json({ status: "Bad Request" });
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  // Write the PATCH API route
  if (request.method === "PATCH") {
    const { name, location, image, mapURL, description } = request.body;

    const place = await Place.findByIdAndUpdate(id, {
      name,
      location,
      image,
      mapURL,
      description,
    });

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  // Write the DELETE API route
  if (request.method === "DELETE") {
    const place = await Place.findByIdAndDelete(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }
}
