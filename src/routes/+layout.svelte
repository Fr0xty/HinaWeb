<script lang="ts">
    import '../app.scss';
    import { onMount } from 'svelte';

    let isScrolling: NodeJS.Timeout;

    onMount(() => {
        document.addEventListener('scroll', () => {
            document.body.classList.add('scroll');

            window.clearTimeout(isScrolling);

            isScrolling = setTimeout(() => {
                document.body.classList.remove('scroll');
            }, 1000);
        });
    });
</script>

<slot />
