<script lang="ts">
    import { portfolioData } from "../lib/data.js";
    import { onMount } from "svelte";

    // Convert portfolioData object to array format for the list
    const list = Object.entries(portfolioData).map(([id, data]) => ({
        id,
        ...data,
    }));

    let mounted = false;
    let visibleCards: Set<string> = new Set();
    
    onMount(() => {
        mounted = true;
        
        // Intersection Observer for staggered card reveals
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('data-id');
                        if (id) {
                            visibleCards.add(id);
                            visibleCards = visibleCards; // Trigger reactivity
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );
        
        // Observe all cards after a brief delay
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach((card) => {
                observer.observe(card);
            });
        }, 100);
        
        return () => observer.disconnect();
    });
</script>

<div class="projects-grid" class:mounted>
    {#each list as item, index (item.id)}
        <a 
            href={`/${item.id}`}
            class="project-card"
            class:visible={visibleCards.has(item.id)}
            data-id={item.id}
            style="--delay: {index * 0.1}s"
        >
            <div class="card-image-wrapper">
                <enhanced:img src={item.image} class="card-image" alt={item.title} />
                <div class="card-overlay">
                    <span class="view-project">
                        <i class="ph-bold ph-arrow-up-right"></i>
                        View Project
                    </span>
                </div>
            </div>
            
            <div class="card-content">
                <div class="card-info">
                    <h3 class="card-title">{item.title}</h3>
                    <p class="card-subtitle">{item.subtitle}</p>
                </div>
                
                <div class="card-arrow">
                    <i class="ph-bold ph-arrow-up-right"></i>
                </div>
            </div>
            
            <div class="card-glow"></div>
        </a>
    {/each}
</div>

<style lang="scss">
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        gap: var(--space-xl);
        padding: 0 var(--space-xl);
        max-width: 1400px;
        margin: 0 auto;
    }

    .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: var(--bg-secondary);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        opacity: 0;
        transform: translateY(40px);
        transition: 
            opacity 0.6s var(--ease-out),
            transform 0.6s var(--ease-out),
            border-color 0.3s var(--ease-out);
        
        &.visible {
            opacity: 1;
            transform: translateY(0);
            transition-delay: var(--delay, 0s);
        }
        
        &:hover {
            border-color: rgba(99, 102, 241, 0.3);
            
            .card-image {
                transform: scale(1.05);
            }
            
            .card-overlay {
                opacity: 1;
            }
            
            .card-arrow {
                transform: translate(2px, -2px);
                background: var(--accent-primary);
                border-color: var(--accent-primary);
                
                i {
                    color: white;
                }
            }
            
            .card-glow {
                opacity: 1;
            }
        }
    }

    .card-image-wrapper {
        position: relative;
        width: 100%;
        height: 220px;
        overflow: hidden;
        background: var(--bg-tertiary);
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s var(--ease-out);
    }

    .card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(10, 10, 15, 0.2) 0%,
            rgba(10, 10, 15, 0.8) 100%
        );
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: var(--space-lg);
        opacity: 0;
        transition: opacity 0.3s var(--ease-out);
    }

    .view-project {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-sm) var(--space-md);
        background: var(--accent-gradient);
        border-radius: var(--radius-full);
        color: white;
        font-size: var(--fs-sm);
        font-weight: 500;
        
        i {
            font-size: 1.1em;
        }
    }

    .card-content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: var(--space-md);
        padding: var(--space-lg);
    }

    .card-info {
        flex: 1;
        min-width: 0;
    }

    .card-title {
        font-family: var(--font-heading);
        font-size: var(--fs-xl);
        font-weight: 600;
        margin: 0 0 var(--space-xs);
        color: var(--text-primary);
    }

    .card-subtitle {
        font-size: var(--fs-sm);
        color: var(--text-muted);
        margin: 0;
        line-height: 1.5;
        
        /* Limit to 2 lines */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card-arrow {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        transition: all 0.3s var(--ease-out);
        
        i {
            font-size: 1.2em;
            color: var(--text-secondary);
            transition: color 0.3s var(--ease-out);
        }
    }

    .card-glow {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            ellipse at 50% 0%,
            rgba(99, 102, 241, 0.1) 0%,
            transparent 70%
        );
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.5s var(--ease-out);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
            padding: 0 var(--space-md);
            gap: var(--space-lg);
        }
        
        .card-image-wrapper {
            height: 200px;
        }
    }

    @media (max-width: 480px) {
        .projects-grid {
            padding: 0 var(--space-sm);
        }
        
        .card-content {
            padding: var(--space-md);
        }
        
        .card-title {
            font-size: var(--fs-lg);
        }
    }
</style>
