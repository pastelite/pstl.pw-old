<script lang="ts">
    import Bottombar from '$lib/bottombar.svelte';
import bottombar from '$lib/bottombar.svelte'

    let title: string = "pastelite";
</script>

<div class="center-container">
    <div id="pastelite">{title}.</div>
    <div>Hi I'm pastelite, a shitty hobby code-writer</div>
    <div>read more i think ></div>
</div>
<Bottombar/>

<style lang="scss">
    :global(body) {
        font-family: "Fredoka", sans-serif;
        background-color: #01172F;
        color: white;
        overflow:hidden
    }

    .center-container {
        position: absolute;
        top:0;
        left: 0;
        width:min-content;
        height: 100%;
        padding-left: 5%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;

        div {
            margin: 1em 2em;
            text-align: justify;
            font-size: max(1.5vw,1em);
        }
    }

    #pastelite {
        font-size: 15vw;
        color: #74B3CE;
        margin: 0;
        overflow:hidden;
        height: min-content;
        //margin-top: 30%;
        //color: white;
    }
</style>