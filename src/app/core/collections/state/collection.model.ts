export interface Collection {
  id: number | string;
  title: string;
}

export function createCollection(params: Partial<Collection>) {
  return {
    id: params.id,
    title: params.title,
  } as Collection;
}
