export type singleProjectType = {
  id: string;
  name: string;
  client: string;
  category: "interior" | "exterior" | "animation";
  type: "image" | "video";
  imageUrl?: {
    small: string;
    large: string;
  };
  videoUrl?: {
    placeholder: string;
    mainUrl: string;
  };
};
