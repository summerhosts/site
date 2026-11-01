import type { Events } from "./events";
import type { ReferenceList } from "./references";

export interface Software {
  name: string;
  slug: string;
  iconUrl?: string;
  bannerUrl?: string;
  description: string;
  events?: Events;
  references?: ReferenceList;
}
