// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { isUndefined } from "util";
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
};
/**
 * Service Methods
 */
export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  newItem: BaseItem
): Promise<Item | null> => {
  const findItem = await find(id);

  if (!findItem) null;

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const findItem = await find(id);

  if (!findItem) null;

  delete items[id];
};
