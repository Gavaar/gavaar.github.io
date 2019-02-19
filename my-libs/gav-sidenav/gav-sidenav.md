# Gavaar Sidenav

Component intended for the creation of a dynamic sidenav, that automatically hides on smaller devices (<1024px `width`), and permits routing to configurable locations on configurable clicks.

### Getting Started

1. Import `GavaarSidenavModule` from its folder into the Module that would be using it.

```typescript
import { GavaarSidenavModule } from '../gav-sidenav/gav-sidenav.module';
```

2. use the html tag `<gav-sidenav></gav-sidenav>` to include the sidenav into a parent module.

3. All modules that intend to be routed inside the sidenav, should be put inside the tag; a simple example with `router-outlet` would be:

```html
<gav-sidenav [sidenavOptions]="myInput" (onOptionClick)="myOutput">
  <router-outlet></router-outlet>
  <div class="gav-sidenav-footer">
    <p>I'm a footer!!</p>
    <p></p>
  </div>
</gav-sidenav>
```

4. thereafter, input the required fields to be used by the component.

### Configuring

The module receives one input, gives back one output, and renders two contents that are put inside it, through the `<ng-content></ng-content>` template.

##### Input

In the example above, we called the variable 'myInput' the one that passes the configuration. This should be a class of the type `SidenavOptions` which takes as parameter the following interface:

```typescript
export interface SidenavOption {
  name: string; // what's written in the button
  routerLink: string; // where it should route to
  icon?: string; // icon in the Angular Material Design icon list
  suboptions?: Array<{ name: string; routerLink: string }>; // array of name and routerLink Objects
}
```

...there are two more options in the interface that are automatically set, so there's no need to input them at class creation.

example class:

```typescript
myCustomOptions = new SidenavOptions([
  { name: 'Home', routerLink: 'home', icon: 'home' },
  {
    name: 'console',
    routerLink: '/console',
    icon: 'search',
    suboptions: [{ name: 'search', routerLink: 'search' }, { name: 'summary', routerLink: 'summary' }]
  }
]);
```

Any content put inside the html tag `<gav-sidenav></gav-sidenav>` will be rendered inside the sidenav. Any content flagged with the class `.gav-sidenav-footer` will be printed at the bottom of the sidenav.

##### Output

On button clicked, the element will give back to the component the `SidenavOption` Object or the `suboption` Object that was clicked, .

### Styling

Component is not encapsulated (for more information search for view encapsulation online), which means all it's classes and elements are accessible and editable through css.

Element view should be enough to know which tag to override in css to change any given style. But nonetheless, the main classes to edit are:

- `.sidenav-content-general-wrapper`: most external wrapper.
- `.sidenav-container`: div which contains all sidenav-related things. It gets the `.mobile` class for mobile devices styles.
  - `.sidenav-main-button`: main buttons with icons. Gets an `.active` class when clicked.
  - `.sidenav-sub-button`: small buttons, with a `::before` for on-focus styles.
  - `.gav-sidenav-footer`: the selector for the ng-content can also be styled.
- `.sidenav-expander`: button for expanding or collapsing the sidenav on <1024px devices.
- `.sidenav-content-container`: container for whatever is passed through ng-content as routeable content.
