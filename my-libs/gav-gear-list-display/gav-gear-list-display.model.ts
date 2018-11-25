export enum IconType {
    Svg = 'svg',
    Mat = 'mat',
    Img = 'img'
}

type Rating = number | Array<number>; // Objective = pass a number, transform it into an iterable

// To-Do, make this interface a class that automatically transforms the number into an iterable
export interface SkillConfig {
    skill: string;
    rating: Rating;
    description: string;
    icon: string;
    iconType?: IconType;
    show?: boolean;
}

// export interface Skill {
//     skill: string;
//     rating: Rating;
//     description: string;
//     icon: string;
//     IconType?: IconType;
// }

export class Skills {

    skills: SkillConfig[];

    constructor(config: SkillConfig[]) {
        for (let i = 0; i < config.length; i++) {
            const rating = config[i].rating;
            typeof rating === 'number' ? config[i].rating = Array.from(Array(rating), (a = 0) => a++) : config[i].rating = rating;
            config[i].show = false;
            this.skills = config;
        }
    }

}
