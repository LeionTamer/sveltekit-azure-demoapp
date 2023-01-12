# Running the application

Application runs with the standard `npm run dev` command

# Packages

## Tailwind CSS

See [https://tailwindcss.com/docs/guides/sveltekit](https://tailwindcss.com/docs/guides/sveltekit) for the source material

Install the tailwind package and create a tailwind config

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
```

Update tailwind config with the paths to all of the config types

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'], // This is the only change
  theme: {
    extend: {}
  },
  plugins: []
};
```

Create a tailwind css (ie. twbase.css) file to add the tailwind directives

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Optionally you can create an alias in the svelte config

```
import path from 'path' // require for path resolution
kit: {
  ...,
  '@styles': path.resolve('./src/styles') // create an alias for path styles
}
```

In the `src/+layout.svelte` file, import the tailwind css

```
<script lang="ts">
  import "@styles/twbase.css"
</script>

<slot />
<button class="rounded-lg p-3 bg-red-500"> // sample tailwind implementation
  test tailwind
</button>
```
