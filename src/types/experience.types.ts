import { ExperienceLevel, ExperienceStatus } from '../enums';

export interface ExperiencePeriod {
    start: string;
    end?: string;
    status: ExperienceStatus;
}

export interface Experience {
    role: string;
    company: string;

    level?: ExperienceLevel;
    resume?: string;

    period?: ExperiencePeriod;
}
