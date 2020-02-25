export interface Tab {
  id: number | string;
  title: string;
  description: string;
  icon: string;
  link: string;
  created: string;
  updated: string;
}

export function createTab(params: Partial<Tab>) {
  return {
    id: params.id,
    title: params.title,
    description: params.description,
    icon: params.icon,
    link: params.link,
    created: params.created,
    updated: params.updated,
  } as Tab;
}
