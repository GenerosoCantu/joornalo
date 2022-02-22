export class Story {
  _id?: string;
  date?: Date;
  status: string;
  section: string;
  subsections?: string;
  title: string;
  desc: string;
  text: string;
  images?: string[];
  embed?: string[];
  quotes?: string[];
}
