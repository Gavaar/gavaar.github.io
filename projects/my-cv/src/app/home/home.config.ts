// LOCAL IMPORTS
import { IconType, Skills } from './../../../../../my-libs/gav-gear-list-display/gav-gear-list-display.model';

export const basicInfo = `Currently working as a Front End Multi-Platform Developer (academic examples at bitbucket.org/Gavaar).
    BSC in Psychology w/ Specialization in Behavioral Analysis - Universidad Central de Venezuela.
    Passionate about research, marketing, consumer\'s psychology, and computer programming.
    Interested in expanding my knowledge about applied behavioral analysis and coding.
    I am also interested in prestidigitation ("magic") and barista bar-tendering.`;

export const skillList: Skills = new Skills([
    {
        skill: 'Angular',
        rating: 7,
        description: `I've been working in Angular for about a year now. SOLID principles, lazy loading, OnPush Strategy, etc.
            I have been developing in the ability to extend basic classes (such as the Validators class), etc.
            I can create pages, services, screens, components, directives, etc; from zero up to a running state`,
        icon: 'angular',
        iconType: IconType.Svg
    },
    {
        skill: 'Typescript | Javascript',
        rating: 7,
        description: `Great practice with Typescript. Wide usage of types, interfaces, classes and services.
            Also like thinking on puzzles, with an account on codewars for more practice.
            Concatenation of methods, destructuring, spread, rest, DRY principle, etc.`,
        icon: 'keyboard'
    },
    {
        skill: 'HTML',
        rating: 10,
        description: `Basic Toolset for any front-web developer. Nothing much to add about this one`,
        icon: 'code'
    },
    {
        skill: 'SCSS',
        rating: 9,
        description: `Nesting is used, but not overused. Classes go to the point.
            Angular Material manipulation is done through scss. Mixins, variables, importing files, media-queries.
            Lots of responsiveness in general. Not putting a 10 because there's a more lot to learn on CSS.
            But rating me a 9 because all of that which I don't know can be quickly understood, learned and applied`,
        icon: 'aspect_ratio'
    }
]);
