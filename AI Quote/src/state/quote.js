import { atom } from "recoil";
import { faker } from "@faker-js/faker";

const quoteState = atom({
  key: "quoteState",
  default: {
    quote: faker.lorem.sentence(),
    author: faker.name.fullName(),
  },
});

export default quoteState