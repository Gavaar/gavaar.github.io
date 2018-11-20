export enum IconType {
    Svg = 'svg',
    Mat = 'mat',
    Img = 'img'
}

export interface Skill {
    skill: string;
    rating: number;
    description: string;
    icon: string;
    iconType?: IconType;
}
