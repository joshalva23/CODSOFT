export interface BlogBase {
    id: string;
    authorId: string;
    authorName: string;
    description: string;
    createdAt: string;
    imageUrl: string | null;
    lastEditAt: string | null;
    title: string;
    isVisible: boolean;
}

export interface BlogNoContent extends BlogBase {
}

export interface BlogYesContent extends BlogBase {
    content: string[];
}
