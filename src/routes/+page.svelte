<script lang="ts">
    import { onMount } from 'svelte';
    import Logo from "./Logo.svelte";
    import Content from "./Content.svelte";
    
    let mounted = false;
    let scrollY = 0;
    
    onMount(() => {
        mounted = true;
    });
    
    function handleScroll() {
        scrollY = window.scrollY;
    }
</script>

<svelte:window on:scroll={handleScroll} />

<div id="app">
    <!-- Hero Section -->
    <section class="hero" class:mounted>
        <div class="hero-content">
            <div class="hero-header">
                <Logo />
            </div>
            
            <div class="hero-intro">
                <h1 class="hero-title">
                    <span class="title-line line-1">Software Engineering</span>
                    <span class="title-line line-2">Manager & <span class="gradient-text">Frontend Expert</span></span>
                </h1>
                
                <p class="hero-description">
                    Crafting exceptional digital experiences since 2016. 
                    Specialized in mobile and web applications, currently based in Qatar.
                    Below are some of my featured projects.
                </p>
                
                <div class="contact-links">
                    <a
                        href="mailto:azhar.i@outlook.com?Subject=Hello"
                        class="contact-btn"
                        title="Email Azhar"
                        aria-label="Email Azhar"
                    >
                        <i class="ph-duotone ph-envelope"></i>
                        <span>Email</span>
                    </a>
                    <a
                        href="https://wa.me/97433338469"
                        class="contact-btn"
                        title="Text on WhatsApp"
                        aria-label="Text on WhatsApp"
                    >
                        <i class="ph-duotone ph-whatsapp-logo"></i>
                        <span>WhatsApp</span>
                    </a>
                    <a
                        href="tel:+97433338469"
                        class="contact-btn"
                        title="Call Azhar"
                        aria-label="Call Azhar"
                    >
                        <i class="ph-duotone ph-phone"></i>
                        <span>Call</span>
                    </a>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator" style="opacity: {Math.max(0, 1 - scrollY / 200)}">
            <div class="scroll-line"></div>
            <span>Scroll to explore</span>
        </div>
    </section>
    
    <!-- Projects Section -->
    <section class="projects-section">
        <div class="section-header">
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">A selection of work I'm proud of</p>
        </div>
        <Content />
    </section>
    
    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <p class="footer-text">© {new Date().getFullYear()} Azharul Islam</p>
            <p class="footer-subtext">Built with care</p>
        </div>
    </footer>
</div>

<style lang="scss">
    #app {
        min-height: 100vh;
    }

    /* Hero Section */
    .hero {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: var(--space-xl);
        position: relative;
        
        &.mounted {
            .hero-header {
                opacity: 1;
                transform: translateY(0);
            }
            
            .title-line {
                opacity: 1;
                transform: translateY(0);
            }
            
            .hero-description {
                opacity: 1;
                transform: translateY(0);
            }
            
            .contact-links {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    .hero-content {
        max-width: 900px;
        text-align: center;
    }

    .hero-header {
        margin-bottom: var(--space-3xl);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s var(--ease-out);
    }

    .hero-intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-xl);
    }

    .hero-title {
        font-family: var(--font-heading);
        font-size: var(--fs-4xl);
        font-weight: 500;
        line-height: 1.1;
        margin: 0;
    }

    .title-line {
        display: block;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.7s var(--ease-out);
        
        &.line-1 {
            transition-delay: 0.2s;
            color: var(--text-secondary);
            font-size: var(--fs-2xl);
            margin-bottom: var(--space-sm);
        }
        
        &.line-2 {
            transition-delay: 0.35s;
        }
    }

    .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-description {
        font-size: var(--fs-lg);
        color: var(--text-secondary);
        max-width: 600px;
        line-height: 1.7;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s var(--ease-out);
        transition-delay: 0.5s;
        margin: 0;
    }

    /* Contact Links */
    .contact-links {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
        justify-content: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s var(--ease-out);
        transition-delay: 0.65s;
    }

    .contact-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-md) var(--space-lg);
        background: var(--bg-glass);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-full);
        color: var(--text-primary);
        font-size: var(--fs-sm);
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s var(--ease-out);
        
        i {
            font-size: 1.25em;
            color: var(--accent-primary);
            transition: transform 0.3s var(--ease-bounce);
        }
        
        &:hover {
            background: var(--bg-glass-hover);
            border-color: var(--accent-primary);
            transform: translateY(-2px);
            
            i {
                transform: scale(1.1);
            }
        }
        
        &:active {
            transform: translateY(0);
        }
    }

    /* Scroll Indicator */
    .scroll-indicator {
        position: absolute;
        bottom: var(--space-2xl);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-sm);
        color: var(--text-muted);
        font-size: var(--fs-xs);
        transition: opacity 0.3s var(--ease-out);
        
        span {
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
    }

    .scroll-line {
        width: 1px;
        height: 40px;
        background: linear-gradient(to bottom, var(--text-muted), transparent);
        animation: scrollPulse 2s ease-in-out infinite;
    }

    @keyframes scrollPulse {
        0%, 100% {
            opacity: 1;
            transform: scaleY(1);
        }
        50% {
            opacity: 0.5;
            transform: scaleY(0.8);
        }
    }

    /* Projects Section */
    .projects-section {
        padding: var(--space-4xl) 0;
    }

    .section-header {
        text-align: center;
        margin-bottom: var(--space-3xl);
        padding: 0 var(--space-xl);
    }

    .section-title {
        font-size: var(--fs-3xl);
        font-weight: 500;
        margin: 0 0 var(--space-sm);
    }

    .section-subtitle {
        font-size: var(--fs-lg);
        color: var(--text-muted);
        margin: 0;
    }

    /* Footer */
    footer {
        padding: var(--space-3xl) var(--space-xl);
        border-top: 1px solid var(--glass-border);
    }

    .footer-content {
        text-align: center;
    }

    .footer-text {
        color: var(--text-secondary);
        margin: 0 0 var(--space-xs);
    }

    .footer-subtext {
        font-size: var(--fs-sm);
        color: var(--text-muted);
        margin: 0;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .hero {
            padding: var(--space-lg);
            min-height: calc(100vh - 60px);
        }
        
        .hero-header {
            margin-bottom: var(--space-2xl);
        }
        
        .hero-title {
            font-size: var(--fs-3xl);
        }
        
        .title-line.line-1 {
            font-size: var(--fs-xl);
        }
        
        .contact-btn span {
            display: none;
        }
        
        .contact-btn {
            padding: var(--space-md);
            
            i {
                font-size: 1.5em;
            }
        }
        
        .scroll-indicator {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .hero-description {
            font-size: var(--fs-base);
        }
    }
</style>
