<script lang="ts">
    import image1 from "../lib/assets/images/portfolio-content/001.png?enhanced";
    import image2 from "../lib/assets/images/portfolio-content/002.png?enhanced";
    import image3 from "../lib/assets/images/portfolio-content/003.png?enhanced";
    import image4 from "../lib/assets/images/portfolio-content/004.png?enhanced";
    import image5 from "../lib/assets/images/portfolio-content/005.png?enhanced";

    let list: any[] = [
        {
            id: "lab-space",
            image: image1,
            name: "",
            title: "LabSpace",
            subtitle: "Lab equipment booking app",
        },
        {
            id: "shipment-tracker",

            image: image2,
            name: "",
            title: "Tracker",
            subtitle: "Website to track shipments",
        },
        {
            id: "fifa-command-center",

            image: image3,
            name: "",
            title: "Command Center",
            subtitle:
                "Command Center for managing operations during major events",
        },
        {
            id: "freight-management-app",

            image: image4,
            name: "",
            title: "SAP Freight Management App",
            subtitle: "An app for drivers to track their daily activities",
        },
        {
            id: "employee-productivity-tracking",
            image: image5,
            name: "",
            title: "Employee Productivity Tracking",
            subtitle:
                "An app for tracking various activities of warehouse workers to streamline planning, work assignment, and track productivity.",
        },
    ];
</script>

<div>
    <br />
    <ul class="content">
        {#each list as item (item.i)}
            <li>
                <a
                    href={`/${item.id}`}
                    style="text-decoration: none;color: inherit;"
                    ><enhanced:img src={item.image} class="preview" />
                    <div
                        style="display: flex; padding: 28px 0px 24px; justify-content: space-between;"
                    >
                        <div style="flex:1;">
                            <div class="title" style="margin-bottom: 0.2rem;">
                                {item.title}
                            </div>
                            <div class="subtitle">{item.subtitle}</div>
                        </div>
                        <div class="open-icon">
                            <i class="ph-bold ph-arrow-up-right"></i>
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
        // border: 1px solid black;
        // background-color: #bbbbbb2d;
        background-color: rgba(51, 44, 182, 0.107);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary);
        transform: rotate(-10deg);

        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        font-size: 1.5em;

    }

    

    .content li:hover .open-icon {
        transform: translate(2px, -2px);
        box-shadow: -0.18rem 0.18rem 0 black;
        color: black;
       background-color: #9494942d;


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
        font-family: "Inter", sans-serif;
        color: rgb(166, 166, 166);
    }

    @media only screen and (max-width: 500px) {
        .content {
            grid-template-columns: repeat(1, auto);
                // padding-inline-start: 0 ;
            // padding-inline-end: 0 !important;
            margin-left: 0px;
            /* set to 0 if your not using a list-style-type */
            padding: 0px 10px;
        }

        .content li {
            padding: 40px 20px 0 20px;
        }
  
    }
</style>
