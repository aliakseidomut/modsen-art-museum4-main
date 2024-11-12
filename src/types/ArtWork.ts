interface ArtWorkInfo {
  id: number;
  imgUrl: string;
  title: string;
  artistTitle: string;
  artistInfo: string;
  isFavorite: boolean;
  dimensions: string;
  description: string;
  creditLine: string;
  dateDisplay: string;
}

interface ArtworkServerData {
  id: number;
  title: string;
  artist_title: string;
  artist_display: string;
  dimensions: string;
  credit_line: string;
  short_description: string;
  image_id: string;
  date_display: string;
}

interface ApiResponse {
  data: ArtworkServerData[];
}

export type { ArtWorkInfo, ArtworkServerData, ApiResponse };
