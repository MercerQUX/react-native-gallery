export interface IPhotoData {
  id?: string;
  indexID:number,
  color:string,
  urls: {
    small: string;
    full: string;
  };
  author: string;
  discription: string;
}
