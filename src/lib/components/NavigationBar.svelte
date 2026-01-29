<script>
    let isMinimized = false;
    let isMobileMenuActive = false;
</script>

<div class="nav-container">
    <div id="brand">
       AZHAR<span class="moonstone-blue">.IS</span>
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

        }

        &.minimized {
            height: 38px;
        }
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


   

    @media screen and (max-width: 900px) {

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
