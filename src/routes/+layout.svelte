<script lang="ts">
    import '../app.scss';
    import { onMount } from 'svelte';

    onMount(() => {
        document.addEventListener('scroll', () => {
            document.body.classList.add('scroll');
        });
    });
</script>

<slot />
