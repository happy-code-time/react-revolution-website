const toggleZindex = (show) => {
    const content = document.getElementById('Content');
    const head: HTMLElement|null = document.getElementById('Head');

    if(content && head){
        
        if(show){
            head.style.zIndex = '0';
            return content.style.zIndex = '4';
        }

        head.style.zIndex = '3';
        return content.style.zIndex = '2';
    }
};

export default toggleZindex;