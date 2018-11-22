export enum IconType {
    Svg = 'svg',
    Mat = 'mat',
    Img = 'img'
}

type Rating = number | Array<number>; // Objective = pass a number, transform it into an iterable

// To-Do, make this interface a class that automatically transforms the number into an iterable
export interface Skill {
    skill: string;
    rating: Rating;
    description: string;
    icon: string;
    iconType?: IconType;
}
