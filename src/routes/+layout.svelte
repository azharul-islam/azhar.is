<script lang="ts">
    import '../styles.css'
    import { onMount } from 'svelte';
    
    let isLoading = true;
    let mounted = false;

    onMount(() => {
        // Brief loading state for smooth entry
        setTimeout(() => {
            isLoading = false;
            mounted = true;
        }, 100);
    });
</script>

<div class="app noise" class:mounted>
    {#if isLoading}
        <div class="loader">
            <div class="loader-dot"></div>
            <div class="loader-dot"></div>
            <div class="loader-dot"></div>
        </div>
    {:else}
        <div class="page-content">
            <slot />
        </div>
    {/if}
</div>

<!-- Ambient background gradient -->
<div class="ambient-glow"></div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-height: -webkit-fill-available;
        position: relative;
        z-index: 1;
    }

    .page-content {
        opacity: 0;
        animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        height: 100vh;
    }

    .loader-dot {
        width: 8px;
        height: 8px;
        background: var(--accent-gradient, linear-gradient(135deg, #6366f1, #a855f7));
        border-radius: 50%;
        animation: loaderPulse 1.4s ease-in-out infinite;
    }

    .loader-dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .loader-dot:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes loaderPulse {
        0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
        }
        40% {
            transform: scale(1.2);
            opacity: 1;
        }
    }

    /* Ambient background glow */
    .ambient-glow {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 0;
        background: 
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 0% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 50%);
    }
</style>
