export type singleProjectType = {
  id: string;
  name: string;
  client: string;
  category: "interiors" | "exteriors" | "motion images";
  type: "image" | "video";
  imageUrl?: {
    small: string;
    large: string;
    thumbnailSrc: string;
  };
  videoUrl?: {
    placeholder: string;
    mainUrl: string;
    thumbnailSrc: string;
  };
};

export type dropDownCategory =
  | "All Projects"
  | "Interiors"
  | "Exteriors"
  | "Motion Images";
