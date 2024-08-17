import {License} from "@frontend/core";
import {DatabaseParams} from "./databaseParams";

export interface Company {
  id: number;
  name: string;
  dsn: string;
}
