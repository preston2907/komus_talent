import { ArticleType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class ArticleData {
  getArticles(): ResponseResult<ArticleType[]> {
    const data = httpService<ArticleType[]>("GET", "getArticles");
    return data;
  }

  getArticle(payload: { articleId: number }): ResponseResult<ArticleType> {
    const data = httpService<ArticleType>(
      "GET",
      "getArticles",
      "articleId=" + payload.articleId
    );
    return data;
  }
}
