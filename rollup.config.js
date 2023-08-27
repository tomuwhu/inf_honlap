import sveltePreprocess from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte'
export default {
plugins: [
    svelte({
    preprocess: sveltePreprocess(),
    css: css => {
        css.write('public/bundle.css')
    },
    }),
],
}