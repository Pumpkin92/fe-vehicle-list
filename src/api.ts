import axios from "axios";

interface Response {
  data: any | object;
}

export const getVehicles = (pageNumber: number, classificatiion: string) => {
  return axios
    .get(
      `https://m6zhmj6dggvrmepfanilteq4q40rlalu.lambda-url.eu-west-1.on.aws/vehicles?page=${pageNumber}&advert_classification=${classificatiion}`
    )
    .then((response: Response) => {
      return response;
    });
};
