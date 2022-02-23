export type Reminder = {
  title: string;
  id: string;
  description?: string;
};

export type Reminders = { items: Reminder[] };
