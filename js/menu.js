<script>
        const items = document.getElementsByClassName("item");
        const clouses = document.getElementsByClassName('close');
        for (close of clouses) {
                close.addEventListener('click', event => {
                console.log(event);
                event.toElement.parentElement.style.display = 'none';
                });
        }
        for(let item of items){
                
                console.log(item);
                item.addEventListener('mouseover', event => {
                        console.log(event);
                        const descriptions = document.getElementsByClassName('description');
                                for(desc of descriptions) {
                                desc.style.display = 'none';
                                }
                        const viewElement = event.toElement.getAttribute('data-view');
                        const view = document.getElementById(viewElement);
                        view.style.display = 'initial';
                });
        }

        /*acordeon*/
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) 
        {
                acc[i].addEventListener("click", 
                function() 
                        {
                                this.classList.toggle("active");
                                var panel = this.nextElementSibling;
                                if (panel.style.maxHeight){
                                        panel.style.maxHeight = null;
                                } 
                                else {
                                        panel.style.maxHeight = panel.scrollHeight + "px";
                                } 
                        });
        }
        /*fin acordeon*/

        /*Para cerrar ventana actual*/
        function close_tab_window() {
                window.open('', '_target').close();
                return false;
        }
        /**/        
</script>