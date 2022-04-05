export interface Question {
    id: string;
    name: string;
    description?: any;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
}

export interface RootObject {
    id: string;
    name: string;
    description?: any;
    createdAt: Date;
    updatedAt: Date;
    rate: number;
    questions: Question[];
}