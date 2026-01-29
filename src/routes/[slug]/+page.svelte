<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { portfolioData } from "../../lib/data.js";
    import { onMount, onDestroy } from "svelte";

    // Get the slug from route params
    $: slug = $page.params.slug;
    $: project = slug && slug in portfolioData ? portfolioData[slug as keyof typeof portfolioData] : undefined;

    // Full-screen viewer state
    let fullscreenImageIndex: number | null = null;
    let isFullscreen = false;
    let mounted = false;

    // Handle 404 - redirect to home if project not found
    $: if (slug && !project) {
        goto("/");
    }

    onMount(() => {
        mounted = true;
        window.addEventListener("keydown", handleKeydown);
    });

    onDestroy(() => {
        window.removeEventListener("keydown", handleKeydown);
        document.body.style.overflow = "";
    });

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
</script>

{#if project}
    <div class="project-page" class:mounted>
        <!-- Hero Section with Back Link -->
        <header class="project-header">
            <a href="/" class="back-link">
                <i class="ph-bold ph-arrow-left"></i>
                <span>Back to Portfolio</span>
            </a>
        </header>

        <!-- Project Hero Image -->
        <div class="hero-image-wrapper">
            <enhanced:img src={project.image} alt={project.title} class="hero-image" />
            <div class="hero-overlay"></div>
        </div>

        <!-- Project Content -->
        <main class="project-content">
            <div class="project-info">
                <h1 class="project-title">{project.title}</h1>
                <p class="project-subtitle">{project.subtitle}</p>
            </div>

            <div class="project-description">
                <p>{project.description}</p>
            </div>

            <!-- Gallery Section -->
            <section class="gallery-section">
                <h2 class="gallery-title">Gallery</h2>
                <div class="gallery-grid">
                    {#each project.images as image, index}
                        <button
                            type="button"
                            class="gallery-item"
                            on:click={() => openFullscreen(index)}
                            on:keydown={(e) => e.key === 'Enter' && openFullscreen(index)}
                            aria-label="View {project.title} - Image {index + 1} in fullscreen"
                            style="--delay: {index * 0.05}s"
                        >
                            <enhanced:img src={image} alt="{project.title} - Image {index + 1}" class="gallery-image" />
                            <div class="gallery-overlay">
                                <i class="ph-bold ph-magnifying-glass-plus"></i>
                            </div>
                        </button>
                    {/each}
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="project-footer">
            <a href="/" class="footer-back">
                <i class="ph-bold ph-arrow-left"></i>
                <span>Back to all projects</span>
            </a>
        </footer>
    </div>
{/if}

<!-- Fullscreen Lightbox -->
{#if isFullscreen && fullscreenImageIndex !== null && project?.images}
    <div
        class="lightbox"
        on:click={closeFullscreen}
        on:keydown={(e) => e.key === 'Enter' && closeFullscreen()}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
    >
        <button class="lightbox-close" on:click={closeFullscreen} aria-label="Close">
            <i class="ph-bold ph-x"></i>
        </button>
        
        <button class="lightbox-nav prev" on:click|stopPropagation={prevImage} aria-label="Previous image">
            <i class="ph-bold ph-arrow-left"></i>
        </button>
        
        <button class="lightbox-nav next" on:click|stopPropagation={nextImage} aria-label="Next image">
            <i class="ph-bold ph-arrow-right"></i>
        </button>
        
        <div class="lightbox-content" on:click|stopPropagation>
            <enhanced:img
                src={project.images[fullscreenImageIndex]}
                alt="{project.title} - Image {fullscreenImageIndex + 1}"
                class="lightbox-image"
            />
        </div>
        
        <div class="lightbox-counter">
            {fullscreenImageIndex + 1} / {project.images.length}
        </div>
    </div>
{/if}

<style lang="scss">
    .project-page {
        min-height: 100vh;
        opacity: 0;
        
        &.mounted {
            opacity: 1;
            animation: fadeIn 0.5s var(--ease-out) forwards;
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* Header */
    .project-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: var(--space-lg) var(--space-xl);
        z-index: var(--z-sticky);
        background: linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%);
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-sm) var(--space-md);
        background: var(--bg-glass);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        color: var(--text-primary);
        font-size: var(--fs-sm);
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s var(--ease-out);
        
        i {
            font-size: 1.1em;
            transition: transform 0.3s var(--ease-out);
        }
        
        &:hover {
            background: var(--bg-glass-hover);
            border-color: var(--accent-primary);
            
            i {
                transform: translateX(-3px);
            }
        }
    }

    /* Hero Image */
    .hero-image-wrapper {
        position: relative;
        width: 100%;
        height: 50vh;
        min-height: 400px;
        overflow: hidden;
    }

    .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(10, 10, 15, 0.5) 50%,
            var(--bg-primary) 100%
        );
    }

    /* Content */
    .project-content {
        max-width: 1000px;
        margin: 0 auto;
        padding: var(--space-3xl) var(--space-xl);
        margin-top: -100px;
        position: relative;
        z-index: 1;
    }

    .project-info {
        margin-bottom: var(--space-2xl);
    }

    .project-title {
        font-family: var(--font-heading);
        font-size: var(--fs-4xl);
        font-weight: 500;
        margin: 0 0 var(--space-sm);
        line-height: 1.1;
    }

    .project-subtitle {
        font-size: var(--fs-lg);
        color: var(--text-muted);
        margin: 0;
        max-width: 700px;
    }

    .project-description {
        margin-bottom: var(--space-3xl);
        
        p {
            font-size: var(--fs-lg);
            line-height: 1.8;
            color: var(--text-secondary);
            max-width: 800px;
        }
    }

    /* Gallery */
    .gallery-section {
        margin-bottom: var(--space-3xl);
    }

    .gallery-title {
        font-family: var(--font-heading);
        font-size: var(--fs-2xl);
        font-weight: 500;
        margin: 0 0 var(--space-xl);
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--space-md);
    }

    .gallery-item {
        position: relative;
        aspect-ratio: 4/3;
        border-radius: var(--radius-md);
        overflow: hidden;
        border: 1px solid var(--glass-border);
        background: var(--bg-secondary);
        cursor: pointer;
        padding: 0;
        transition: all 0.3s var(--ease-out);
        
        &:hover {
            border-color: var(--accent-primary);
            transform: translateY(-4px);
            
            .gallery-image {
                transform: scale(1.05);
            }
            
            .gallery-overlay {
                opacity: 1;
            }
        }
    }

    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s var(--ease-out);
    }

    .gallery-overlay {
        position: absolute;
        inset: 0;
        background: rgba(10, 10, 15, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s var(--ease-out);
        
        i {
            font-size: 2em;
            color: white;
        }
    }

    /* Footer */
    .project-footer {
        padding: var(--space-3xl) var(--space-xl);
        border-top: 1px solid var(--glass-border);
        text-align: center;
    }

    .footer-back {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-md) var(--space-lg);
        background: var(--bg-glass);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        color: var(--text-secondary);
        font-size: var(--fs-sm);
        text-decoration: none;
        transition: all 0.3s var(--ease-out);
        
        i {
            transition: transform 0.3s var(--ease-out);
        }
        
        &:hover {
            color: var(--text-primary);
            border-color: var(--accent-primary);
            
            i {
                transform: translateX(-3px);
            }
        }
    }

    /* Lightbox */
    .lightbox {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.95);
        z-index: var(--z-modal);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s var(--ease-out);
        cursor: pointer;
    }

    .lightbox-close {
        position: absolute;
        top: var(--space-lg);
        right: var(--space-lg);
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-glass);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        color: white;
        font-size: 1.5em;
        cursor: pointer;
        transition: all 0.3s var(--ease-out);
        z-index: 1;
        
        &:hover {
            background: var(--bg-glass-hover);
            transform: scale(1.1);
        }
    }

    .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-glass);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        color: white;
        font-size: 1.5em;
        cursor: pointer;
        transition: all 0.3s var(--ease-out);
        z-index: 1;
        
        &.prev {
            left: var(--space-lg);
        }
        
        &.next {
            right: var(--space-lg);
        }
        
        &:hover {
            background: var(--bg-glass-hover);
            transform: translateY(-50%) scale(1.1);
        }
    }

    .lightbox-content {
        max-width: 90vw;
        max-height: 85vh;
        cursor: default;
    }

    .lightbox-image {
        max-width: 100%;
        max-height: 85vh;
        object-fit: contain;
        border-radius: var(--radius-md);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .lightbox-counter {
        position: absolute;
        bottom: var(--space-xl);
        left: 50%;
        transform: translateX(-50%);
        padding: var(--space-sm) var(--space-md);
        background: var(--bg-glass);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        color: white;
        font-size: var(--fs-sm);
        font-family: var(--font-body);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .project-header {
            padding: var(--space-md);
        }
        
        .hero-image-wrapper {
            height: 40vh;
            min-height: 300px;
        }
        
        .project-content {
            padding: var(--space-xl) var(--space-md);
            margin-top: -60px;
        }
        
        .project-title {
            font-size: var(--fs-3xl);
        }
        
        .gallery-grid {
            grid-template-columns: 1fr;
        }
        
        .lightbox-nav {
            width: 44px;
            height: 44px;
            font-size: 1.2em;
            
            &.prev {
                left: var(--space-sm);
            }
            
            &.next {
                right: var(--space-sm);
            }
        }
        
        .lightbox-close {
            width: 40px;
            height: 40px;
            top: var(--space-sm);
            right: var(--space-sm);
        }
    }
</style>
