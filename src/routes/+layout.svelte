<script lang="ts">
    import type { LayoutProps } from "./$types";
    import '../../assets/js/vendors/color-modes'
    import 'bootstrap-icons/font/bootstrap-icons.min.css'
    import "../../assets/scss/theme.scss"

    import 'bootstrap/dist/js/bootstrap.bundle.min'
    import '../../assets/js/vendors/offcanvas.js'
    import '../../assets/js/vendors/navbar'
    import 'swiper'
    import '../../assets/js/vendors/swiper.js'
    import 'scrollcue'
    import '../../assets/js/vendors/scrollcue.js'

    let { children }: LayoutProps = $props();
</script>

{@render children()}