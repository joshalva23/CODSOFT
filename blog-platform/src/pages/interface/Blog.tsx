export interface Blog {
    id: string;
    authorId: string;
    authorName:string;
    content: string;
    description:string;
    createdAt: string;
    imageUrl: string | null;
    lastEditAt: string | null;
    title: string;
}