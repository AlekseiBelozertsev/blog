import { databaseId } from "@/pages/blog";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
});

const n2m = new NotionToMarkdown({notionClient: notion});

// page metadata gets the data needed for the post to show
export const getPageMetaData = (post: any) => {
    // const getTags = (tags: any) => {
    //   const allTags = tags.map((tag: any) => {
    //     return tag.name;
    //   });
  
    //   return allTags;
    // };
  
    return {
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
    //   tags: getTags(post.properties.Tags.multi_select),
      description: post.properties.Description.rich_text[0].plain_text,
      createdAt: getToday(post.properties.Created.last_edited_time),
      slug: post.properties.Slug.rich_text[0].plain_text,
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
    console.log(allPosts[0].properties)
    return allPosts.map((post: any) => {
      return getPageMetaData(post);
    });
  };
  

// Fetches single post
export const getSinglePost = async (Slug: string, databaseId: string) => {
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
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdToString = n2m.toMarkdownString(mdblocks);

    return {
        markdown: mdToString,
    }
};



//makes date easier to read
const getToday = (datestring: string) => {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = new Date();
  
    if (datestring) {
      date = new Date(datestring);
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
  
    return today;
  };
