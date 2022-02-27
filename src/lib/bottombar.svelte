<div id="bottombar">
    <a href=""><p>test1</p></a>
    <a href=""><p>test2</p></a>
    <a href=""><p>test3</p></a>
</div>

<style lang="scss">
    #bottombar {
        position: absolute;
        top:1em;
        right:2em;
        //width:100%;
        //height: 20%;

        display:flex;
        justify-content: center;
        align-content: center;
        font-size: 1.5em;

        a {
            text-decoration: none;
            color: white;
            margin: 0 20px 0 20px;

            p {
                position: relative;
                padding: 0;

                &:after {
                    position: absolute;
                    bottom:-5px;
                    left:0;
                    content: "";
                    width: 100%;
                    height: 10%;
                    background-color: aqua;
                    transform: translateY(10px);
                    opacity: 0;
                    transition: transform .2s, opacity .1s;
                }
            }

            &:hover {
                p:after {
                    transform: translateY(0);
                    opacity: 1;
                    transition: transform .2s, opacity .1s;
                }
            }
        }
    }
</style>