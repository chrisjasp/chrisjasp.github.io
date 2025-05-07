<script lang="ts">
    import type { LayoutProps } from "./$types";
    import 'bootstrap-icons/font/bootstrap-icons.min.css'
    import "../../assets/scss/theme.scss"

    let { children }: LayoutProps = $props();
</script>

{@render children()}