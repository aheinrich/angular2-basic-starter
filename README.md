# angular2-basic-starter

Basic skeleton project for Angular2 projects + Angular Material

Uses:
- Typescript
- SystemJS

## installation

`npm install`

## start

`npm run start`

## testing

`npm run start`

## Variations
- Master - No UI toolkit
- Bootstrap - Bootstrap + FontAwesome
- Material - Material Design < THIS BRANCH >

# Material

## SystemJS configuration
Module loader has to be told how to load each Material Design package:

The first block declares the MD2 packages being used:
```javascript
var materialPackages = [
        'core',
        'toolbar',
        'icon',
        'button',
        'sidenav',
        'list',
        'card',
        'input',
        'radio',
        'checkbox'
    ];
```

Then, create an object literal for each package, adding it to SystemJS `packages`    
```javascript
materialPackages.forEach(
    function (pkgName) {
        packages['@angular2-material/' + pkgName] = { 
            format: 'cjs',
            defaultExtension: 'js', 
        main: pkgName}
});
```

There may be a better way to do this... I borrowed this technique from Kara's original Pupply-Love project demo'd at ng-conf     

## Angular Material Resources
- Angular Material Design 1x: 
- Angular Material Design 2x: https://github.com/angular/material2
- Material Design Icons: https://design.google.com/icons/