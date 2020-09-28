import React from 'react';

class ScrollTop extends React.Component 
{
    constructor(props) {
        super(props);
        this.scrollEvent = this.scrollEvent.bind(this);
        this.scrollTop = this.scrollTop.bind(this);
        this.scrollRef = React.createRef();
        this.interval = '';
        this.showScroll = false;
        this.state = {
            timer: 200
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollEvent);
        this.scrollEvent();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollEvent);
    }

    scrollEvent() {
        if (100 <= document.documentElement.scrollTop && this.scrollRef) {
            if (!this.showScroll) {
                this.showScroll = true;
                this.scrollRef.current.classList.remove('d-none');
            }
        }
        else {
            if (this.showScroll) {
                this.showScroll = false;
                this.scrollRef.current.classList.add('d-none');
            }
        }
    }

    scrollTop() {
        clearInterval(this.interval);
        const { timer } = this.state;
        let userOnXPosition = document.documentElement.scrollTop;
        let time = parseInt(timer, 10);
        let pxToAdd = userOnXPosition / time*4;
        //
        this.interval = setInterval( () => {
            document.documentElement.scrollTop = userOnXPosition;
            userOnXPosition -= (pxToAdd);

            if(-10 >= userOnXPosition){
                clearInterval(this.interval);
            }
        }, 1 );
    }

    render() {
        return (
            <div
                ref={this.scrollRef}
                className="ScrollTop d-none"
                onClick={() => this.scrollTop()}
            >
                <i className="fas fa-angle-up"></i>
            </div>
        );
    }
};

export default ScrollTop;