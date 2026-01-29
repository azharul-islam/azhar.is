<script>
    import img from "../lib/assets/images/azhar.jpg?enhanced";

    import Logo from "./Logo.svelte";
    import Content from "./Content.svelte";
</script>

<div id="app">
    <div class="main-container">
        <div class="header-container">
            <div class="logo-container">
                <Logo />
            </div>
            
            <div class="profile-section">
                
                <div class="about">
                    <p>
                        Welcome to my portfolio! 👋🏻 My name is Azharul Islam. I'm a
                        Software Engineering Manager, Frontend Design and Development expert since 2016, based
                        in Qatar. Below are some of my featured projects.
                    </p>
                    <div class="contact-links">
                        <a
                            href="mailto:azhar.i@outlook.com?Subject=Hello"
                            class="contact-icon email"
                            title="Email Azhar"
                            aria-label="Email Azhar"
                        >
                            <i class="ph-duotone ph-envelope"></i>
                        </a>
                        <a
                            href="https://wa.me/97433338469"
                            class="contact-icon whatsapp"
                            title="Text on WhatsApp"
                            aria-label="Text on WhatsApp"
                        >
                            <i class="ph-duotone ph-whatsapp-logo"></i>
                        </a>
                        <a
                            href="tel:+97433338469"
                            class="contact-icon whatsapp"
                            title="Call Azhar"
                            aria-label="Call Azhar"
                        >
                            <i class="ph-duotone ph-phone"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Content />
    <footer>
        <p>© {new Date().getFullYear()} Azharul Islam</p>
    </footer>
</div>

<style lang="scss">
    $color-dark: #1c4e6c;

    .header-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 40px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
        justify-content: center;
    }

    .logo-container {
        flex-shrink: 0;
    }

    .profile-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        flex: 1;
    }

    .contact-links {
        display: flex;
        gap: 12px;
    }

    .contact-icon {
        text-decoration: none;
        color: var(--color-primary);
        font-size: 1.7em;
        display: flex;
        justify-content: center;
        transform: rotate(-12deg);
        align-items: center;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        background-color: #f6f6f6;
    }

    .contact-icon:hover {
        transform: translate(2px, -2px);
        color: black;
        box-shadow: -0.15rem 0.15rem 0 black;
    }

    .about {
        font-family: "Inter", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        max-width: 700px;
    }

    p {
        margin-block-start: 0em;
        margin-block-end: 0.8em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        line-height: 1.5rem;
    }


    a {
        user-select: none;
        margin: 8px 0px;
        font-weight: bold;
        color: var(--color-dark);
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s;
        box-shadow: none;
        -webkit-tap-highlight-color: transparent;

        &:visited {
            color: var(--color-dark);
        }

        &:hover {
            color: var(--color-accent);
            box-shadow: 0 4px 0 0 var(--color-accent);
        }

        &:active {
            color: var(--color-dark);
        }
    }

    footer {
        text-align: center; /* Center the content */
        padding: 2rem 2rem 0.5rem; /* Add padding (top, right, bottom, left) */
    }

    /* Responsive design for tablet and mobile */
    @media (max-width: 768px) {
        .header-container {
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 20px;
        }

        .logo-container {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .profile-section {
            align-items: center;
            text-align: center;
            width: 100%;
        }

        .about {
            align-items: center;
            text-align: center;
            max-width: 100%;
        }

        .contact-links {
            justify-content: center;
        }
    }

    @media (max-width: 480px) {
        .header-container {
            padding: 15px;
            gap: 25px;
        }

        .contact-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5em;
        }
    }
</style>
