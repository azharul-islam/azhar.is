<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { portfolioData } from "../../lib/data.js";

    // Get the slug from route params
    $: slug = $page.params.slug;
    $: project = slug && slug in portfolioData ? portfolioData[slug as keyof typeof portfolioData] : undefined;

    // Full-screen viewer state
    let fullscreenImageIndex: number | null = null;
    let isFullscreen = false;

    // Handle 404 - redirect to home if project not found
    $: if (slug && !project) {
        goto("/");
    }

    // Open full-screen viewer
    function openFullscreen(index: number) {
        fullscreenImageIndex = index;
        isFullscreen = true;
        document.body.style.overflow = "hidden";
    }

    // Close full-screen viewer
    function closeFullscreen() {
        isFullscreen = false;
        fullscreenImageIndex = null;
        document.body.style.overflow = "";
    }

    // Navigate to next image
    function nextImage() {
        if (fullscreenImageIndex !== null && project?.images) {
            fullscreenImageIndex = (fullscreenImageIndex + 1) % project.images.length;
        }
    }

    // Navigate to previous image
    function prevImage() {
        if (fullscreenImageIndex !== null && project?.images) {
            fullscreenImageIndex =
                fullscreenImageIndex === 0
                    ? project.images.length - 1
                    : fullscreenImageIndex - 1;
        }
    }

    // Handle keyboard navigation
    function handleKeydown(event: KeyboardEvent) {
        if (!isFullscreen) return;

        if (event.key === "Escape") {
            closeFullscreen();
        } else if (event.key === "ArrowRight") {
            nextImage();
        } else if (event.key === "ArrowLeft") {
            prevImage();
        }
    }

    // Add keyboard event listener
    import { onMount, onDestroy } from "svelte";
    onMount(() => {
        window.addEventListener("keydown", handleKeydown);
    });
    onDestroy(() => {
        window.removeEventListener("keydown", handleKeydown);
        document.body.style.overflow = "";
    });
</script>

{#if project}
    <div class="description-page">
        <div class="header">
            <a href="/" class="back-link">
                <i class="ph-bold ph-arrow-left"></i>
                <span>Back to Portfolio</span>
            </a>
        </div>

        <div class="content">
            <div class="project-header">
                <h1 class="title">{project.title}</h1>
                <p class="subtitle">{project.subtitle}</p>
            </div>

            <div class="description">
                <p>{project.description}</p>
            </div>

            <div class="gallery">
                <h2 class="gallery-title">Gallery</h2>
                <div class="image-grid">
                    {#each project.images as image, index}
                        <button
                            type="button"
                            class="image-wrapper"
                            on:click={() => openFullscreen(index)}
                            on:keydown={(e) => e.key === 'Enter' && openFullscreen(index)}
                            aria-label="View {project.title} - Image {index + 1} in fullscreen"
                        >
                            <enhanced:img src={image} alt="{project.title} - Image {index + 1}" class="gallery-image" />
                            <div class="image-overlay">
                                <i class="ph-bold ph-magnifying-glass-plus"></i>
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    </div>
{/if}

{#if isFullscreen && fullscreenImageIndex !== null && project?.images}
    <div
        class="fullscreen-overlay"
        on:click={closeFullscreen}
        on:keydown={(e) => e.key === 'Enter' && closeFullscreen()}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
    >
        <button class="close-button" on:click={closeFullscreen} aria-label="Close">
            <i class="ph-bold ph-x"></i>
        </button>
        <button class="nav-button prev-button" on:click|stopPropagation={prevImage} aria-label="Previous image">
            <i class="ph-bold ph-arrow-left"></i>
        </button>
        <button class="nav-button next-button" on:click|stopPropagation={nextImage} aria-label="Next image">
            <i class="ph-bold ph-arrow-right"></i>
        </button>
        <div class="fullscreen-image-container">
            <enhanced:img
                src={project.images[fullscreenImageIndex]}
                alt="{project.title} - Image {fullscreenImageIndex + 1}"
                class="fullscreen-image"
            />
        </div>
        <div class="image-counter">
            {fullscreenImageIndex + 1} / {project.images.length}
        </div>
    </div>
{/if}

<style lang="scss">
    .description-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        min-height: calc(100vh - 40px);
    }

    .header {
        margin-bottom: 40px;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: black;
        text-decoration: none;
        font-family: "Inter", sans-serif;
        font-size: 1em;
        padding: 12px 20px;
        border-radius: 5px;
        background-color: #f6f6f6;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        border: 1px solid black;
        transform: rotate(-1deg);

        i {
            font-size: 1.2em;
        }

        &:hover {
            transform: translate(2px, -2px);
            box-shadow: -0.15rem 0.15rem 0 black;
            background-color: #e8e8e8;
        }

        &:active {
            transform: translate(0, 0);
            box-shadow: none;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .project-header {
        .title {
            font-family: Lora, sans-serif;
            font-size: 2.5em;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 1.1em;
            font-family: "Inter", sans-serif;
            color: rgb(166, 166, 166);
            margin: 0;
        }
    }

    .description {
        font-family: "Inter", sans-serif;
        font-size: 1.1em;
        line-height: 1.8;
        max-width: 800px;
        color: #333;

        p {
            margin: 0;
        }
    }

    .gallery {
        margin-top: 20px;
    }

    .gallery-title {
        font-family: Lora, sans-serif;
        font-size: 2em;
        font-weight: 700;
        margin: 0 0 30px 0;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }

    .image-wrapper {
        position: relative;
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
        background-color: #f6f6f6;
        transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        aspect-ratio: 4/3;
        border: none;
        padding: 0;

        &:hover {
            transform: translateY(-4px);

            .image-overlay {
                opacity: 1;
            }

            .gallery-image {
                transform: scale(1.05);
            }
        }
    }

    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        display: block;
    }

    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

        i {
            font-size: 2.5em;
            color: white;
        }
    }

    .fullscreen-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .fullscreen-image-container {
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
    }

    .fullscreen-image {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    }

    .close-button {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid white;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 10000;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }

        &:active {
            transform: scale(0.95);
        }
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid white;
        color: white;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8em;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 10000;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-50%) scale(1.1);
        }

        &:active {
            transform: translateY(-50%) scale(0.95);
        }

        &.prev-button {
            left: 20px;
        }

        &.next-button {
            right: 20px;
        }
    }

    .image-counter {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-family: "Inter", sans-serif;
        font-size: 1.1em;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px 20px;
        border-radius: 20px;
        z-index: 10000;
    }

    @media only screen and (max-width: 768px) {
        .description-page {
            padding: 15px;
        }

        .project-header .title {
            font-size: 2em;
        }

        .image-grid {
            grid-template-columns: 1fr;
        }

        .nav-button {
            width: 50px;
            height: 50px;
            font-size: 1.5em;

            &.prev-button {
                left: 10px;
            }

            &.next-button {
                right: 10px;
            }
        }

        .close-button {
            top: 10px;
            right: 10px;
            width: 40px;
            height: 40px;
        }

        .image-counter {
            bottom: 20px;
            font-size: 0.9em;
        }
    }
</style>
