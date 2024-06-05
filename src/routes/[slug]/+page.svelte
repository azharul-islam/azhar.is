<script lang="ts">
    import { page } from "$app/stores";
    import { portfolioData } from "$lib/data";


    const pageData = $page.params.slug in portfolioData? portfolioData[$page.params.slug]: null;

</script>

<p>{pageData.title}</p>
<!-- <enhanced:img src={a.img} class="preview" /> -->
