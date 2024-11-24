export type Image = {
  alt_description: string;
  description: string;
  id: string;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    instagram_username: string;
  };
};
