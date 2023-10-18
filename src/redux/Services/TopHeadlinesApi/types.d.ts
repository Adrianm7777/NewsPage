interface LatestDataResponse {
  status: string;
  totalResults: number;
  articles: ArticlesData[];
}
interface ArticlesData {
  source?: SourceData;
  author?: string | null;
  title?: string;
  description?: string | null;
  url?: string;
  urlToImage?: string | null;
  publishedAt?: string;
  content?: string | null;
}
interface SourceData {
  id: string | null;
  name: string;
}
