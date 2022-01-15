export interface IRouteData {
    key: string;
    name: string;
    path?: string;
    params: {
      photo: string;
      indexID: string;
      author: string;
      color: string;
    };
  }