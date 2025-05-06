<script lang="ts">
    import type { LayoutProps } from "./$types";
    import "../../assets/scss/theme.scss"

    import 'swiper'
    import 'scrollcue'

    let { children }: LayoutProps = $props();
</script>

{@render children()}