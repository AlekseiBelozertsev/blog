import { databaseId } from "@/pages/blog";
import { Client } from "@notionhq/client";
import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_KEY,
});

// Fetches all posts

 export const getDatabase = async (databaseId: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
};

export const getPage = async (pageId: string) => {
    const response = await notion.pages.retrieve({
        page_id: pageId
    });
    return response;
};

export const getBlocks = async (blockId: string) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
    });
    return response.results;
}

// Fetches single post

const n2m = new NotionToMarkdown({notionClient: notion});

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
    
    // const metadata = getPageMetaData(page)
};



getSinglePost('Test-is-in-progress', databaseId);
