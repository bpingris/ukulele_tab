# Ukulele tabs creator
This project aims to easily create tabs for a ukulele song by clicking on some chords to integrate them.



TODO:
- [x] Chord component: display name and strings
- [x] Field with chords to pick up
- [x] Field with the tab
- [x] More chords
    - [x] Host them on a db or something and put it on a server (firebase / serverless)
- [ ] Open and save tabs
  - [ ] WIP: tabs are saved locally in the localstorage, not 100% working
  - [ ] When we save a tab, check if one already exists with the same name and ask if we can replace it
- [ ] Better UI/UX: right now there isn't a design, it's just SVGs component without style or anything
  - [ ] Vuetify has been integrated, it's better but need some adjustments

## Chord component
This component takes a name and an Array of Array containing the points to press to play the chord.
It uses SVG to display it.
```js
// main.js
import Chord from '@/components/Chord';
Vue.component('chord', Chord);
...
// App.vue
<template>
    <chord name="c" :points="[[4,3]]" ></chord>
</template>
```

## Design
I use Vuetify to power the application

## Improvement
- [x] Add a show/hide menu that contains the chords, might use the vuetify drawer.
- [] Add a Play button: tabs go fullscreen and there is a slideshow of the chords, maybe integrate an automatic and slow scroll
- [x] Save the tabs on the localstorage it's easy and this ain't a bank so we don't care about security (it's just music lewl)

## PWA Support
Investigate the PWA support with VueJS, might be interesting

Benoît Pingris