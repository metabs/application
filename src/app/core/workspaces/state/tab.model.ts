export interface ApiTab {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  created: string;
  updated: string;
}

export interface Tab {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  created: string;
  updated: string;
}

export function createTab(params: Partial<Tab | ApiTab>) {
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
