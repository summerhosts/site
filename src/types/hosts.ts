import type { Events } from "./events";
import type { Link } from "./links";

export type HostInfo = { [key: string]: Link };

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
  bannerUrl?: string;
  hosts: Host[];
}
