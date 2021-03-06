export interface IEvent {
  id: number;
  title: string;
  description: string;
  date: Date;
  images?: string[];
};

export class Event implements IEvent {
  id: number;
  title: string;
  description: string;
  date: Date;
  images: string[];

  constructor(id: number, title: string, description: string, date: Date, images: string[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.images = images;
  }
}
