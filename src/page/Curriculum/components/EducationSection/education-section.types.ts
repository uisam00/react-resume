import { EducationStatus } from '../../../../enums/education.enum';

export interface EducationItem {
    course: string;
    institution: string;
    city: string;
    period: {
        start: string;
        end?: string;
        status: EducationStatus;
    };
}

export interface EducationSectionProps {
    educationItems: EducationItem[];
}
