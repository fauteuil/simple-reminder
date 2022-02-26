import { OnClick } from '../../types';

export type Reminder = OnClick & {
  title: string;
  id: string;
  description?: string;
};

export type Reminders = { items: Reminder[] };
