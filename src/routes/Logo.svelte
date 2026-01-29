<script lang="ts">
    import { onMount } from 'svelte';
    
    let isHovered = false;
    let mounted = false;
    
    onMount(() => {
        mounted = true;
    });
</script>

<a href="/" class="brand" class:mounted on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
    <span class="brand-text">
        <span class="brand-main">AZHAR</span><span class="brand-accent">.IS</span>
    </span>
    <div class="brand-glow" class:active={isHovered}></div>
</a>

<style lang="scss">
    .brand {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 14px 20px;
        background: var(--bg-tertiary);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-md);
        text-decoration: none;
        overflow: hidden;
        transform: rotate(-2deg) scale(0.95);
        opacity: 0;
        transition: 
            transform 0.4s var(--ease-out),
            border-color 0.3s var(--ease-out);
        
        &.mounted {
            opacity: 1;
            transform: rotate(-2deg) scale(1);
        }
        
        &:hover {
            transform: rotate(0deg) scale(1.02);
            border-color: var(--accent-primary);
            
            .brand-accent {
                opacity: 1;
            }
        }
    }
    
    .brand-text {
        font-family: "disposabledroid_bbbold", sans-serif;
        font-size: clamp(28px, 4vw, 36px);
        letter-spacing: -0.5px;
        position: relative;
        z-index: 2;
    }
    
    .brand-main {
        color: var(--text-primary);
    }
    
    .brand-accent {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        opacity: 0.8;
        transition: opacity 0.3s var(--ease-out);
    }
    
    .brand-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--accent-gradient);
        opacity: 0;
        filter: blur(30px);
        transform: translate(-50%, -50%);
        transition: opacity 0.5s var(--ease-out);
        z-index: 1;
        
        &.active {
            opacity: 0.3;
        }
    }

    /* Responsive adjustments */
    @media (max-width: 480px) {
        .brand {
            padding: 12px 16px;
        }
        
        .brand-text {
            font-size: 24px;
        }
    }
</style>
