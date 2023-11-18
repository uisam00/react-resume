import { ReactNode } from 'react';

export interface SkillSectionProps {
    skillsGroup: SkillGroup[];
}

interface SkillGroup {
    type: string;
    skills: Skill[];
}

interface Skill {
    name: string;
    icon: ReactNode | ReactNode[];
}
