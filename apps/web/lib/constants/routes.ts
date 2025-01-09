export const ROUTES = {
  home: () => "/",
  postCreate: () => "/posts/create",
  postDetail: (id: string) => `/posts/${id}`,
  postEdit: (id: string) => `/posts/${id}/edit`,
} as const;
