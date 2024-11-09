export interface BlogNoContent {
    id: string;
    authorId: string;
    authorName:string;
    description:string;
    createdAt: string;
    imageUrl: string | null;
    lastEditAt: string | null;
    title: string;
    isVisible: boolean;
}

export interface BlogYesContent {
    id: string;
    authorId: string;
    authorName:string;
    description:string;
    content:string[];
    createdAt: string;
    imageUrl: string | null;
    lastEditAt: string | null;
    title: string;
    isVisible: boolean;
}
