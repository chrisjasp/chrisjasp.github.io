<script lang="ts">
    import type { LayoutProps } from "./$types";
    import 'bootstrap-icons/font/bootstrap-icons.min.css'
    import "../../assets/scss/theme.scss"
    import { onMount } from "svelte";

    let { children }: LayoutProps = $props();

    onMount(async () => {
        await import("../../assets/js/vendors/color-modes");
        await import("bootstrap/dist/js/bootstrap.bundle.min");
        await import("../../assets/js/vendors/offcanvas.js");
        await import("../../assets/js/vendors/navbar");
        // await import("swiper")
        await import("../../assets/js/vendors/swiper.js");
        // await import("scrollcue");
        await import("../../assets/js/vendors/scrollcue.js");
    })
</script>

{@render children()}