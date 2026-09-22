import type { Link } from "./links";

export type DiscordSocial = {
  id: number;
  usernames: string[];
  displayNames: string[];
};

export type Webpages = { [key: string]: Link };

export interface PersonSocials {
  discord?: DiscordSocial[];
  github?: string;
  youtube?: string;
  instagram?: string;
  tiktok?: string;
  x?: string;
  webpages?: Webpages;
}

export interface Person {
  name: string;
  slug: string;
  attributes: string[];
  socials: PersonSocials;
  shortDescription: string;
}
