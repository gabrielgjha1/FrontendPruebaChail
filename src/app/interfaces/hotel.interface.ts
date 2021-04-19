export interface Resp {
  message: string;
  hotel:   Hotel[];
  total:   number;
}

export interface Hotel {
  status:          boolean;
  score:           number;
  porcentajeVotos: number;
  countVotes:      number;
  pictureOne:      string;
  pictureTwo:      string;
  pictureThree:    string;
  _id:             string;
  hotelname:       string;
  category:        number;
  price:           number;
  comentarios:     string[];
  __v:             number;
}
