<script>
    import img from "../lib/assets/images/azhar.jpg?enhanced";

    import Logo from "./Logo.svelte";
    import Content from "./Content.svelte";
</script>

<div id="app">
    <div class="main-container">
        <div style="display:flex;">
            <Logo />
        </div>
        <div
            style="display: flex; flex-direction: row; justify-content: center; padding: 0px 20px;"
        >
            <!-- <enhanced:img src={img} height="80" alt="Picture of Azhar" /> -->

            <div class="about">
                <!--            <span class="container header">About Me</span>-->
                <p>
                    Welcome to my portfolio! 👋🏻 My name is Azharul Islam. I'm a
                    professional full-stack Software Developer since 2016, based
                    in Qatar, specialised in Mobile and Web apps.
                </p>
                <div class="contact-links">
                    <a
                        href="mailto:azhar.i@outlook.com?Subject=Hello"
                        class="contact-icon email"
                        title="Email Azhar"
                    >
                        <i class="ph-duotone ph-envelope"></i>
                    </a>
                    <a
                        href="https://wa.me/97433338469"
                        class="contact-icon whatsapp"
                        title="Text on WhatsApp"
                    >
                        <i class="ph-duotone ph-whatsapp-logo"></i>
                    </a>
                    <a
                        href="tel:+97433338469"
                        class="contact-icon whatsapp"
                        title="Call Azhar"
                    >
                        <i class="ph-duotone ph-phone"></i>
                    </a>
                </div>
            </div>
        </div>
        <br />
    </div>
    <Content />
    <footer>
        <p>© {new Date().getFullYear()} Azharul Islam</p>
    </footer>
</div>

<style lang="scss">
    $color-dark: #1c4e6c;

    .main-container {
        // background-color: rgb(236,190,241)
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
        grid-area: content;
        font-family: "Inter", sans-serif;

        margin: 10px 0 0 0;
        position: relative;
        display: grid;
        grid-template-columns: minmax(200px, 700px);
        justify-content: center;
    }

    p {
        margin-block-start: 0em;
        margin-block-end: 0.8em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        line-height: 1.5rem;
    }

    h1 {
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    img {
        border-radius: 50%;
        border: 1px solid black;
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
</style>
