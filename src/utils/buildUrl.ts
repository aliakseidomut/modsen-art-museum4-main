import { BASE_URL } from "@constants/apiConstants";

export function buildUrl(
  endpoint: string,
  params?: Record<string, string>,
): string {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  if (params) {
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key]),
    );
  }
  return url.toString();
}
