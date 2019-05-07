# Ukulele tabs creator
This project aims to easily create tabs for a ukulele song by clicking on some chords to integrate them.



TODO:
- [x] Chord component: display name and strings
- [x] Field with chords to pick up
- [x] Field with the tab
- [ ] More chords
    - [ ] Host them on a db or something and put it on a server (firebase / serverless)
- [ ] Open and save tabs
- [ ] Better UI/UX: right now there isn't a design, it's just SVGs component without style or anything

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
I might use Vuetify because it's easy to use and it's material design so it works well.

## Improvement
- Add a show/hide menu that contains the chords, might use the vuetify drawer.
- Add a Play button: tabs go fullscreen and there is a slideshow of the chords
- Save the tabs on the localstorage it's easy and this ain't a bank so we don't care about security (it's just music lewl)

## PWA Support
Investigate the PWA support with VueJS, might be interesting

Benoît Pingris