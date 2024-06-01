<script>
    import img from "$lib/assets/images/azhar.jpg";
    import Logo from "./Logo.svelte";
    import Content from "./Content.svelte";
</script>

<div id="app" >
    <div class="main-container">
    <div style="display:flex;">
        <Logo />
    </div>
    <div
        style="display: flex; flex-direction: row; justify-content: center; padding: 0px 20px;"
    >
        <img src={img} height="80" alt="Picture of Azhar" />

        <div class="about">
            <div class="container talk-bubble tri-right left-top">
                <!--            <span class="container header">About Me</span>-->
                <p>
                    Welcome to my portfolio! 👋🏻 My name is Azharul Islam. I'm a
                    professional full-stack Software Developer since 2016, based
                    in Qatar, specialised in Mobile and Web apps.
                </p>
            </div>

            <div class="container talk-bubble">
                You can reach me on <a
                    href="mailto:azhar.i@outlook.com?Subject=Hello"
                    target="_top">azhar.i@outlook.com</a
                >
                or
                <a href="https://wa.me/97433338469" title="Text on WhatsApp"
                    >+974 3333 8469</a
                >.
            </div>
        </div>
    </div>
    <br />
</div>
    <Content />
</div>

<style lang="scss">
   
    $color-dark: #1c4e6c;

    .main-container {
       
        // background-color: rgb(236,190,241)
    }

    .talk-bubble {
        margin: 0 0 8px 35px;
        display: inline-block;
        position: relative;
        height: auto;
        background-color: white;
        font-size: 1rem;
        padding: 8px 14px 8px 14px;
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

    .tri-right.left-top:before {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        left: -25px;
        right: auto;
        top: -2px;
        bottom: auto;
        border: 23px solid;
        border-color: transparent transparent transparent transparent;
    }

    .tri-right.left-top:after {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        left: -20px;
        right: auto;
        top: 0px;
        bottom: auto;
        border: 22px solid;
        border-color: white transparent transparent transparent;
    }

    @media screen and (min-width: 992px) {
        .talk-bubble {
            margin: 0 90px 10px 35px;
            display: inline-block;
            position: relative;
            height: auto;
            font-size: 1rem;
            line-height: 1.7;
        }
    }
</style>
