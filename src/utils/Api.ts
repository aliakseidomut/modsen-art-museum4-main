import { ARTWORK_FIELDS } from "@constants/apiConstants";
import { ApiResponse, ArtWorkInfo, ArtworkServerData } from "../types/ArtWork";
import { buildUrl } from "@utils/buildUrl";

export default class Api {
  public static async getArtWork(id: number | string): Promise<ArtWorkInfo> {
    const url = buildUrl(`artworks/${id}`, {
      fields: ARTWORK_FIELDS,
    });

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch artwork: ${res.statusText}`);
      }
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
    } catch (error) {
      console.error("Error fetching artwork:", error);
      throw error;
    }
  }

  public static async getArtWorks(
    ids: (number | string)[],
  ): Promise<ArtWorkInfo[]> {
    const promises = ids.map(id => this.getArtWork(id));
    try {
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.error("Error fetching artworks:", error);
      throw error;
    }
  }

  public static async getPage(
    limit: number,
    page: number,
    search?: string,
    sort?: string,
  ): Promise<ArtWorkInfo[]> {
    const url = buildUrl("artworks/search", {
      limit: limit.toString(),
      page: page.toString(),
      q: search || "",
      sort: sort || "",
    });

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch artworks page: ${res.statusText}`);
      }
      const data: ApiResponse = await res.json();

      const ids = data.data.map((item: ArtworkServerData) => item.id);
      return this.getArtWorks(ids);
    } catch (error) {
      console.error("Error fetching page:", error);
      throw error;
    }
  }

  public static async getTotalPages(
    limit: number,
    search?: string,
  ): Promise<number> {
    const url = buildUrl("artworks/search", {
      limit: limit.toString(),
      q: search || "",
    });

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch total pages: ${res.statusText}`);
      }
      const data = await res.json();
      return data.pagination.total_pages;
    } catch (error) {
      console.error("Error fetching total pages:", error);
      throw error;
    }
  }
}
