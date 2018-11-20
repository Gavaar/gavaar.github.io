import { IconType } from './../../../../../my-libs/gav-gear-list-display/gav-gear-list-display.model';
// LOCAL IMPORTS
import { Skill } from 'my-libs/gav-gear-list-display/gav-gear-list-display.model';

export const basicInfo = `Currently working as a Front End Multi-Platform Developer (academic examples at bitbucket.org/Gavaar).
    BSC in Psychology w/ Specialization in Behavioral Analysis - Universidad Central de Venezuela.
    Passionate about research, marketing, consumer\'s psychology, and computer programming.
    Interested in expanding my knowledge about applied behavioral analysis and coding.
    I am also interested in prestidigitation ("magic") and barista bar-tendering.`;

export const skillList: Skill[] = [
    {
        skill: 'Angular',
        rating: 4,
        description: 'I\'m awesome at what I do',
        icon: 'angular',
        iconType: IconType.Svg
    },
    {
        skill: 'my skill 2',
        rating: 5,
        description: 'I\'m awesome at coding!!',
        icon: 'star'
    }
];
