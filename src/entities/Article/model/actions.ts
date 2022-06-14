import { ArticleContext } from "@api/dataContext/fake";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getArticleById = createAsyncThunk(
//   "articleSlice/getArticleById",
//   async (articleId: string) => {
//     const data = await ArticleContext.getArticle({ articleId });
//     return data;
//   }
// );
// export const getArticles = createAsyncThunk(
//   "articleSlice/getArticles",
//   async () => {
//     const data = await ArticleContext.getArticles();
//     return data;
//   }
// );

export const getArticleById = async (articleId: string) => {
  const data = await ArticleContext.getArticle({ articleId });
  return data;
};

export const getArticles = async () => {
  const data = await ArticleContext.getArticles();
  return data;
};
