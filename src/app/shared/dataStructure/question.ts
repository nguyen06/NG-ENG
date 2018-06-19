import { option } from './option';

export class question{
    id: number;
    name: string;
    questionTypeId: number;
    options: option[];
    questionType: {
        id: number;
        name: string;
        isActive: boolean;
    }

}