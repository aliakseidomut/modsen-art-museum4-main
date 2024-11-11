import { ArtWorkInfo } from "../types/ArtWork";

const BASE_URL: string = "https://api.artic.edu/api/v1";
const ARTWORK_FIELDS: string =
  "id,title,artist_title,artist_display,dimensions,credit_line,short_description,image_id,date_display";

interface ArtworkData {
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
  data: ArtworkData[];
}

export default class Api {
  public static async getArtWork(id: number | string): Promise<ArtWorkInfo> {
    const url = `${BASE_URL}/artworks/${id}?fields=${ARTWORK_FIELDS}`;

    const res = await fetch(url);
    const art = await res.json();

    return {
      id: art.data.id,
      imgUrl: art.data.image_id
        ? `https://www.artic.edu/iiif/2/${art.data.image_id}/full/full/0/default.jpg`
        : "",
      title: art.data.title,
      artistTitle: art.data.artist_title,
      artistInfo: art.data.artist_display,
      isFavorite: false,
      dimensions: art.data.dimensions,
      description: art.data.short_description,
      creditLine: art.data.credit_line,
      dateDisplay: art.data.date_display,
    };
  }

  public static async getArtWorks(ids: number[] | string[]) {
    const promises = ids.map(id => this.getArtWork(id));
    const results = await Promise.all(promises);

    return results;
  }

  public static async getPage(
    page: number,
    limit: number,
    search?: string,
  ): Promise<ArtWorkInfo[]> {
    let url: string = `${BASE_URL}/artworks?limit=${limit}&page=${page}`;

    if (search) {
      url = `${BASE_URL}/artworks/search?q=${search}&limit=${limit}&page=${page}`;
    }

    const res = await fetch(url);
    const data: ApiResponse = await res.json();

    const ids = data.data.map((item: ArtworkData) => item.id);
    return this.getArtWorks(ids);
  }

  public static async getTotalPages(
    limit: number,
    search?: string,
  ): Promise<number> {
    let url: string = `${BASE_URL}/artworks?limit=${limit}`;

    if (search) {
      url = `${BASE_URL}/artworks/search?q=${search}&limit=${limit}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    return data.pagination.total_pages;
  }
}
