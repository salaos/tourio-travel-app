// import { places } from '../../../lib/db';
import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const place = await Place.find();
    return response.status(200).json(place);
  }

  if (request.method === "POST") {
    const { name, location, image, mapURL, description } = request.body;
    const place = await Place.create({
      name,
      location,
      image,
      mapURL,
      description,
    });
    return response.status(201).json(place);
  }

  if (request.method === "PATCH") {
    const { id, name, location, image, mapURL, description } = request.body;
    const place = await Place.findByIdAndUpdate(id, {
      name,
      location,
      image,
      mapURL,
      description,
    });
    return response.status(200).json(place);
  }

  if (request.method === "DELETE") {
    const { id } = request.body;
    const place = await Place.findByIdAndDelete(id);
    return response.status(200).json(place);
  }
}
