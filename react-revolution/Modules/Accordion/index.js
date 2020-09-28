import React from 'react';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

import uuid from '../internalFunctions/uuid';

import buildDropDownStructure from '../internalFunctions/buildDropDownStructure';

import loadStyle from '../internalFunctions/loadStyle';

class Accordion extends React.Component 
{

    constructor(props) {
        super(props);
        this.buildDataRecursive = this.buildDataRecursive.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleAllBack = this.toggleAllBack.bind(this);

        this.state = {
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-accordion',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : [],
            animation: (props.animation && typeof '8' == typeof props.animation) ? props.animation : undefined,
            closeOnClickOutside: typeof true == typeof props.closeOnClickOutside ? props.closeOnClickOutside : false,
        };

        this.refNode = React.createRef();
    }

    componentDidMount(){
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
        const { closeOnClickOutside } = this.state;

        if(closeOnClickOutside){
            document.documentElement.addEventListener('click', this.handleClick);
        }
    }

    componentWillUnmount(){
        const { closeOnClickOutside } = this.state;

        if(closeOnClickOutside){
            document.documentElement.removeEventListener('click', this.handleClick);
        }
    }


    handleClick(event){
        if(this.refNode && this.refNode.current && !this.refNode.current.contains(event.target)){
            this.toggleAllBack();
        }
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['data', 'defaultClass', 'id', 'animation'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-accordion',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: (props.data && typeof [] == typeof props.data) ? buildDropDownStructure(props.data) : [],
                animation: (props.animation && typeof '8' == typeof props.animation) ? props.animation : undefined,
            };
        }

        return null;
    }

    buildDataRecursive(data = [], isChild = false) {
        const jsx = [];

        if(data && data.length){
            for(let x = 0; x <= data.length-1; x++){
                let { text, dataToggle, toggled, unique, classList, props, childrensNestedCount, key } = data[x];
                const dataChildren = data[x].data;

                if(!classList){
                    classList = '';
                }

                if(!props || typeof props !== typeof {}){
                    props = {};
                }

                try{
                    Object.keys(props);
                }
                catch(e){
                    props = {};
                }

                jsx.push(
                    <div 
                        key={key}
                        className={`single-entry ${classList} ${(dataChildren && 0 !== dataChildren.length) ? 'hasChildren' : ''}`}
                        {...props}
                    >
                        {
                            <div 
                                className={`text ${isChild ? 'child' : ''} ${(dataChildren && 0 !== dataChildren.length) ? 'hasChildren' : ''} ${(dataToggle) ? 'hasData' : ''}`}
                                onClick={ () => this.toggle(unique)}
                            >
                            {
                                text
                            }
                            </div>
                        }
                        {
                            toggled && dataChildren && 0 !== dataChildren.length &&
                            <div className={`children children-n-${childrensNestedCount}`}>
                                {
                                    this.buildDataRecursive(dataChildren, true)
                                }
                            </div>
                        }
                        {
                            toggled && undefined == dataChildren && dataToggle &&
                            <div className="data">
                            {
                                dataToggle
                            }
                            </div>
                        }
                    </div>
                )
            }
        }

        return jsx;
    }

    /**
     * Recursive loop to change the 
     * toggled key to the oposite oolean value
     * @param {string} uniqueId 
     */
    toggle(uniqueId) {
        const allowedAnimations = ['height', 'scale', 'opacity'];
        const { data } = this.state;
        let { animation } = this.state;
        let timeouterForAnimationBack = 0;
        let closing = false;

        if(!allowedAnimations.includes(animation)){
            animation = undefined;
        }

        const loop = (datas) => {
            if (datas && datas.length) {
                for (let x = 0; x <= datas.length - 1; x++) {
                    let { unique } = datas[x];
                    const dataChildren = datas[x].data;

                    if (unique == uniqueId) {

                        if(false == !datas[x].toggled && animation){
                            timeouterForAnimationBack = 300;
                        }

                        const toggleEntry = () => {
                            datas[x].toggled = !datas[x].toggled;
                            datas[x].classList = !datas[x].toggled ? `toggled` : `toggling ${animation ? `animation-${animation}` : ''}`;
    
                            setTimeout(() => {
                                datas[x].classList = datas[x].toggled ? `toggled ${animation ? `animation-${animation}` : ''}` : '';
                            }, 300);
                        }

                        if(false == !datas[x].toggled){
                            datas[x].classList = `${datas[x].classList} ${animation ? `animation-${animation}-back` : ''}`;

                            return this.setState({
                                data
                            }, toggleEntry);
                        }

                        toggleEntry(); 
                        break;
                    }

                    if (dataChildren && typeof [] == typeof dataChildren && 0 !== dataChildren.length) {
                       loop(dataChildren);
                    }
                }
            }
        }

        loop(data);

        /**
         * Opening entry
         */
        if(!closing){
            return setTimeout( () => {
                this.setState({
                    data
                }, () => setTimeout(() => { 
                    this.setState({ data }); 
                }, 300));
            }, timeouterForAnimationBack);
        }
    }

    toggleAllBack(){
        const allowedAnimations = ['height', 'scale', 'opacity'];
        const { data } = this.state;
        let { animation } = this.state;
        let timeouterForAnimationBack = 0;

        if(!allowedAnimations.includes(animation)){
            animation = undefined;
        }

        const loop = (datas) => {
            if (datas && datas.length) {
                for (let x = 0; x <= datas.length - 1; x++) {
                    const dataChildren = datas[x].data;

                    if(animation){
                        timeouterForAnimationBack = 300;
                    }

                    datas[x].classList = `${datas[x].classList} ${animation ? `animation-${animation}-back` : ''}`;

                    const toggleEntry = () => {
                        setTimeout(() => {
                            datas[x].toggled = false;
                            datas[x].classList = '';

                            this.setState({
                                data
                            });
                        }, timeouterForAnimationBack);
                    }

                    this.setState({
                        data
                    }, toggleEntry);

                    if (dataChildren && typeof [] == typeof dataChildren && 0 !== dataChildren.length) {
                       loop(dataChildren);
                    }
                }
            }
        }

        loop(data);
    }


    render() {
        const { addClass, data, defaultClass, id } = this.state;

        return (
            <div 
                ref={this.refNode}
                className={`${defaultClass} ${addClass}`} 
                id={id}
                tabIndex="0"
            >
            {
                this.buildDataRecursive(data)
            }  
            </div>
        )
    }
}

export default Accordion;