import { v4 as uuid } from "uuid";

export default {
  "dogs": [
      {
        "id":uuid(),
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        "id":uuid(),
        "name": "Duke",
        "age": 3,
        "src": "duke",
        "facts": [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        "id":uuid(),
        "name": "Perry",
        "age": 4,
        "src": "perry",
        "facts": [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      }
    ]
};