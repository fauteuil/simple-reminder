import { atom, selector } from "recoil";
import { LoremIpsum } from "lorem-ipsum";
import { nanoid } from "nanoid";

import { Reminder, Reminders } from "./types";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const defaultReminder: Reminder = {
  id: "",
  title: "",
  description: ""
};

const defaultReminderList: Reminders = {
  items: [
    {
      id: nanoid(),
      title: lorem.generateWords(1),
      description: lorem.generateWords(3)
    },
    {
      id: nanoid(),
      title: lorem.generateWords(1),
      description: lorem.generateWords(3)
    },
    {
      id: nanoid(),
      title: lorem.generateWords(1),
      description: lorem.generateWords(3)
    },
    {
      id: nanoid(),
      title: lorem.generateWords(1),
      description: lorem.generateWords(3)
    },
    {
      id: nanoid(),
      title: lorem.generateWords(1),
      description: lorem.generateWords(3)
    },
    {
      id: nanoid(),
      title: lorem.generateWords(1),
      description: lorem.generateWords(3)
    }
  ]
};

export const reminderListState = atom<Reminders>({
  key: "reminderListState",
  default: defaultReminderList
});

export const selectedReminderIdState = atom<string>({
  key: "selectedReminderIdState",
  default: ""
});

export const selectedReminderState = selector<Reminder>({
  key: "selectedReminderState",
  get: ({ get }) => {
    const list = get(reminderListState).items || [];
    const selectedId = get(selectedReminderIdState);
    const selectedItem = list.find((item) => item.id === selectedId);
    return selectedItem || defaultReminder;
  }
});
