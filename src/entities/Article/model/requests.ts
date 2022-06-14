import { ArticleContext } from '@api/dataContext/fake';

export const getArticleById = async (articleId: string) => {
    const data = await ArticleContext.getArticle({ articleId });
    return data;
  };
  
  export const getArticles = async () => {
    const data = await ArticleContext.getArticles();
    return data;
  };
  