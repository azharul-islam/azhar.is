<script>
    let isMinimized = false;
    let isMobileMenuActive = false;
</script>

<div class="nav-container">
    <div id="brand">
       AZHAR<span class="moonstone-blue">.DEV</span>
    </div>
    <nav
        class:minimized={isMinimized}
        class:nav-menu-active={isMobileMenuActive}
    >
        <a href="/">Blog</a>
        <a href="/about" style="margin-bottom: 27px;">About Me</a>
        <a href="/portfolio">Work</a>
    </nav>
</div>

<style lang="scss">
    .nav-container {
        grid-area: nav;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        padding: 36px 0px 45px 0px;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        transition: height 0.5s cubic-bezier(0.52, 0.16, 0.24, 1);

        a {
            user-select: none;
            margin: 8px 0px;
            font-family: "inria_sansbold";
            font-weight: bold;
            font-size: 22px;
            color: var(--color-dark);
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s;
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

            &.router-link-exact-active {
                color: var(--color-accent);
                box-shadow: 0 4px 0 0 var(--color-accent);
                pointer-events: none;
            }
        }

        &.minimized {
            height: 38px;
        }
    }

    #nav.nav-menu-active {
        height: 70px;
    }

    #brand {
        font-family: "disposabledroid_bbbold";
        font-size: 40px;
        background-color: var(--color-primary);
        color: #ffffff;
        padding: 10px;
        box-shadow: 0.22rem 0.22rem 0 var(--color-dark);
        transform: skew(0deg, -5deg) scaleX(0.9);
        user-select: none;
        margin: 0px 0px 30px;
    }

    .moonstone-blue {
        color: var(--color-light);
    }

    .menu-button {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        padding: 15px 18px 20px 18px;
        justify-self: start;
        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        div {
            width: 22px;
            height: 2px;
            background-color: var(--color-dark);
            margin: 7px 0;
            transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.1008s;
            transform: none;
        }
    }

    .menu-button.menu-visible {
        opacity: 1;
        pointer-events: auto;
        transform: scaleY(1);
    }

    .change .bar1 {
        transform: rotate(-45deg) translate(-2.5px, 4px);
    }

    .change .bar2 {
        transform: rotate(45deg) translate(-2.5px, -4px);
    }

    .swiper-pagination-bullet {
        width: 6px !important;
        height: 6px !important;
        background: white !important;
        opacity: 1 !important;
        border: 1px solid var(--color-dark) !important;
    }

    .swiper-pagination-bullet-active {
        background-color: var(--color-dark) !important;
    }

   

    @media screen and (max-width: 900px) {
        #app {
            padding: 0;
            grid-template-rows: 200px;
            grid-template-columns: 1fr;
            grid-template-areas:
                "nav"
                "content";
        }

        .nav-container {
            grid-area: nav;
            display: flex;
            flex-direction: row;

            align-items: flex-start;
            justify-content: space-around;
            padding: 36px 31px 45px 0px;
        }
        nav {
            flex-direction: column;
            align-items: flex-start;
            a {
                user-select: none;
                margin: 8px 0px;
                font-family: "inria_sansbold";
                font-weight: bold;
                font-size: 20px;
            }
        }

        #brand {
            align-self: center;
            margin: 0;
        }
    }
</style>
