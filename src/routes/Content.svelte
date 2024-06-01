<script lang="ts">
    import image1 from "../lib/assets/images/portfolio-content/001.png?enhanced";
    import image2 from "../lib/assets/images/portfolio-content/002.png?enhanced";
    import image3 from "../lib/assets/images/portfolio-content/003.png?enhanced";
    import image4 from "../lib/assets/images/azhar.jpg?enhanced";
    import image5 from "../lib/assets/images/azhar.jpg?enhanced";
    import image6 from "../lib/assets/images/azhar.jpg?enhanced";
    import image7 from "../lib/assets/images/azhar.jpg?enhanced";

    let list: any[] = [
        {
            image: image1,
            name: "",
            title: "LabSpace",
            subtitle: "Lab equipment booking app",
        },
        {
            image: image2,
            name: "",
            title: "Tracker",
            subtitle: "Website to track shipments",

        },
        {
            image: image3,
            name: "",
            title: "LabSpace",
            subtitle: "LabSpace",

        },
        {
            image: image4,
            name: "",
            title: "LabSpace",
            subtitle: "LabSpace",

        },
    ];
</script>

<div>
    <br />
    <ul class="content">
        {#each list as item (item.i)}
            <li>
                <a href="" style="text-decoration: none;color: inherit;"
                    ><enhanced:img src={item.image} class="preview"/>
                    <div
                        style="display: flex; padding: 28px 0px 24px; justify-content: space-between;"
                    >
                    <div>
                        <div class="title" style="margin-bottom: 0.2rem;">{item.title}</div>
                        <div class="subtitle">{item.subtitle}</div></div>
                        <div class="open-icon">
                            <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                style="color: black;"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.0788 1.96304L2.33407 13.7077L0.919861 12.2935L12.6645 0.548828L14.0788 1.96304Z"
                                    fill="CurrentColor"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.5 2H1.5V0H14.5V13H12.5V2Z"
                                    fill="CurrentColor"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .content {
        margin: auto;
        max-width: 2000px;
        padding: 12px 42px;
        display: grid;
        align-content: start;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, 420px);
        grid-row-gap: 16px;
        grid-column-gap: 16px;
        list-style: none;
        overflow-y: auto;
    }

    .content li {
        cursor: pointer;
        border-radius: 5px;
        padding: 40px 45px 0 45px;
        background-color: #f6f6f6;
    }

    .content .preview {
        width: 100%;
        height: 200px;
        border-radius: 6px;
       
        box-shadow: 0 1.5rem 20px -20px rgba(0, 0, 0, 0.345);
        transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
        object-fit: cover;
    }

    .open-icon {
        border-radius: 100%;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 1000ms cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .content li:hover .open-icon {
        transform: translate(2px, -2px);
        box-shadow: -0.32rem 0.32rem 0 black;
    }
    .content li:hover .preview {
        box-shadow: 0 2rem 15px -25px rgba(0, 0, 0, 0.654);
    }

    .title {
        font-family: Lora, sans-serif;
        font-size: 1.5em;
        font-weight: 700;
    }

    .subtitle {
        font-size: 0.8em;
        font-family:  "Inter", sans-serif;
        color: rgb(166, 166, 166);
    }
</style>
