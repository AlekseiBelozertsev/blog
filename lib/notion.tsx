import { databaseId } from "@/pages/blog";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
});

const n2m = new NotionToMarkdown({notionClient: notion});

// Page metadata gets the data needed for the post to show
export const getPageMetaData = (post: any) => {

    return {
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      tags: post.properties.Tags.multi_select,
      description: post.properties.Description.rich_text[0].plain_text,
      createdAt: post.properties.Created.rich_text[0].plain_text,
      slug: post.properties.Slug.rich_text[0].plain_text,
      thumbnail: post.properties.Thumbnail.rich_text[0].plain_text
    };
    
  };

// Fetches all posts
export const getAllPublished = async () => {
    const posts = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Created",
          direction: "descending",
        },
      ],
    });
  
    const allPosts: any = posts.results;

    return allPosts.map((post: any) => {
      return getPageMetaData(post);
    });
    
  };

  

  

// Fetches single post
export const getSinglePost = async (Slug: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: Slug,
                },
            },
        },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdToString = n2m.toMarkdownString(mdblocks);

    return {
        metadata,
        markdown: mdToString,
    }
};

