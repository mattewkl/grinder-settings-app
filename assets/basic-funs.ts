const toggleBodyNoScroll = ():void => {
    const BODY = document.querySelector('body')
    BODY?.classList.toggle('no-scroll-y')
}