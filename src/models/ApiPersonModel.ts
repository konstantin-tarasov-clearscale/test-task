import { ApiPhoneModel } from "./ApiPhoneModel";

export type ApiPersonModel = {
  id: string;
  age: number
  name: string;
  email: string;
  avatar: string | null;
  phone: Array<ApiPhoneModel>;
}
