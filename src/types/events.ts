export type EventAuthor = { id: number; username: string; displayName: string };
export type Event = { value: string; title?: string; author?: EventAuthor };
export type Events = { [key: string]: Event };
