import type { Events } from "./events";

export type HostInfo = { [key: string]: { value: string; link?: boolean } };

export interface Host {
  name: string;
  slug: string;
  info: HostInfo;
  events?: Events;
  bannerUrl?: string;
}

export interface Parent {
  name: string;
  slug: string;
  bannerUrl: string;
  hosts: Host[];
}
