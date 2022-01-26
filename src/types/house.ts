export type House = {
  id: number;
  address: string;
  homeowner: string;
  price: number;
  photoURL: string;
};

export type Houses = House[];

export type HouseResponse = {
  houses: Houses;
  ok: boolean;
};
