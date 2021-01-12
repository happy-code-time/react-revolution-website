import React from 'react';
import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';
import loadStyle from '../internalFunctions/loadStyle';
import LiveGenerationSteps from './LiveGenerationSteps';

class Steps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // current step
            step: 0,
            currentError: '',
            // user data
            moduleStyle: (typeof true == typeof props.moduleStyle) ? props.moduleStyle : false,
            globalStyle: (typeof true == typeof props.globalStyle) ? props.globalStyle : false,
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-steps',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            data: props.data && typeof [] === typeof props.data && props.data.length ? props.data : [],
            next: props.next && typeof '8' === typeof props.next ? props.next : 'Next',
            previous: props.previous && typeof '8' === typeof props.previous ? props.previous : 'Previous',
            submit: props.submit && typeof '8' === typeof props.submit ? props.submit : 'Submit',
            callbackCheck: typeof true == typeof props.callbackCheck && true === props.callbackCheck ? true : false,
            callbackCheckNavigate: typeof true == typeof props.callbackCheckNavigate && true === props.callbackCheckNavigate ? true : false,
            progressBar: typeof true == typeof props.progressBar && true === props.progressBar ? true : false,
            iconStep: typeof true == typeof props.iconStep && true === props.iconStep ? true : false,
            errorDataInside: typeof true == typeof props.errorDataInside && true === props.errorDataInside ? true : false,
            errorAlignTop: typeof true == typeof props.errorAlignTop && true === props.errorAlignTop ? true : false,
            liveGeneration: typeof true == typeof props.liveGeneration && true === props.liveGeneration ? true : false, 
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props
     * @param {object} state
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['addClass', 'liveGeneration', 'defaultClass', 'errorDataInside', 'errorAlignTop', 'id', 'data', 'next', 'previous', 'submit', 'progressBar', 'iconStep', 'callbackCheck', 'submitCallback', 'callbackCheckNavigate'], props, state)) {
            return {
                addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
                defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-steps',
                id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
                data: props.data && typeof [] === typeof props.data && props.data.length ? props.data : [],
                next: props.next && typeof '8' === typeof props.next ? props.next : 'Next',
                previous: props.previous && typeof '8' === typeof props.previous ? props.previous : 'Previous',
                submit: props.submit && typeof '8' === typeof props.submit ? props.submit : 'Submit',
                progressBar: typeof true == typeof props.progressBar && true === props.progressBar ? true : false,
                iconStep: typeof true == typeof props.iconStep && true === props.iconStep ? true : false,
                callbackCheck: typeof true == typeof props.callbackCheck && true === props.callbackCheck ? true : false,
                callbackCheckNavigate: typeof true == typeof props.callbackCheckNavigate && true === props.callbackCheckNavigate ? true : false,
                errorDataInside: typeof true == typeof props.errorDataInside && true === props.errorDataInside ? true : false,
                errorAlignTop: typeof true == typeof props.errorAlignTop && true === props.errorAlignTop ? true : false,
                liveGeneration: typeof true == typeof props.liveGeneration && true === props.liveGeneration ? true : false, 
            };
        }

        return null;
    }

    componentDidMount() {
        loadStyle(this.state.moduleStyle, this.state.globalStyle, this.state.defaultClass);
    }

    getHeadersJsx() {
        const { data, step, iconStep } = this.state;
        const liWidth = Math.ceil(100 / data.length - 1);
        const marginXUl = Math.ceil((100 - (liWidth * (data.length - 1))) / 2);
        const marginXLi = Math.ceil(marginXUl / (data.length - 1));

        return (
            <ul>
                {data.map((o, index) => {
                    const { icon, text } = o;

                    return (
                        <li
                            style={{ width: `calc(${liWidth}% + ${marginXLi}px)` }}
                            key={`step-${index}`}
                            className={`step ${step >= index ? 'step-filled' : ''} ${step === index ? 'step-active' : ''} ${iconStep ? 'cursor-pointer' : ''}`}
                            {...((iconStep) && { onClick: (e) => this.slide(step, index) })}
                        >
                            <div className={`${step >= index ? 'icon-filled' : 'icon-not-filled'} ${step === index ? 'icon-active' : ''}`}>
                                <span className="icon">{icon && icon}</span>
                            </div>
                            <div className={`${step >= index ? 'text-filled' : 'text-not-filled'} ${step === index ? 'text-active' : ''}`}>
                                <span className="text">{text && text}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }

    getCurrentStepJsx() {
        const { data, step, liveGeneration } = this.state;

        /**
         * Current state code generated
         */
        if (data && data.length && undefined !== data[step] && !liveGeneration) {
            return data[step].data;
        }
        
        return null;
    }

    async checkSubmit(){
        const { callbackCheckNavigate } = this.state;
        const { callback, callbackProps, onError, onErrorProps, submit } = this.state.data[this.state.data.length-1];

        const allowedToSetStep = await (callback)(callbackProps);
        /**
         * Current check returned false (navigate the user to the wrong page)
         */
        if (typeof false == typeof allowedToSetStep && false == allowedToSetStep && callbackCheckNavigate) {

            if (onError && 'function' == typeof onError) {
                const currentError =  await (onError)(onErrorProps).then(r => r).catch(e => '');
                return this.setState({ 
                    currentError,
                    step: this.state.data.length-1,
                });
            }
            else {
                return this.setState({
                    step: this.state.data.length-1,
                    currentError: ''
                });
            }
        }   

        if (submit && 'function' == typeof submit) {
            return this.setState({
                currentError: ''
            }, (submit)());
        }
    }

    async checkStep(currentStep, nextStep) {
        const { data, callbackCheckNavigate } = this.state;
        let allowedToSetStep = false;

        let current = currentStep;
        let end = nextStep - 1;

        const check = () => {
            const { callback, callbackProps, onError, onErrorProps } = data[current];

            if (!callback) {
                if (end > current) {
                    current += 1;
                    return check();
                }
            }
            else {

                try {

                    (async () => {
                        allowedToSetStep = await (callback)(callbackProps);
                        /**
                         * Current check returned false (navigate the user to the wrong page)
                         */
                        if (typeof false == typeof allowedToSetStep && false == allowedToSetStep && callbackCheckNavigate) {

                            if (onError && 'function' == typeof onError) {
                                const currentError =  await (onError)(onErrorProps).then(r => r).catch(e => '');
                                return this.setState({ 
                                    currentError,
                                    step: current,
                                });
                            }
                            else {
                                return this.setState({
                                    step: current,
                                    currentError: ''
                                });
                            }
                        }
                        /**
                         * Last step, all previously checks returned true
                         */
                        if(typeof true == typeof allowedToSetStep && true == allowedToSetStep && end == current){
                            return this.setState({ 
                                step: nextStep,
                                currentError: ''
                            });
                        }
                        /**
                         * Current check returned true, process further
                         */
                        if (typeof true == typeof allowedToSetStep && true == allowedToSetStep && end > current) {
                            current += 1;
                            check();
                        }
                    })();
                }
                catch (e) { }
            }
        };

        check();
    }

    slide(currentStep, nextStep) {
        const { data } = this.state;

        if (undefined !== data[currentStep]) {
            const { callbackCheck } = this.state;
            const { callback, callbackProps } = data[currentStep];

            /**
             * Ignore check for itself
             */
            if (currentStep == nextStep) {
                return;
            }

            /**
             * Ignore check for passed items
             */
            if (nextStep < currentStep) {
                return this.setState({ 
                    step: nextStep,
                    currentError: ''
                });
            }

            if (callbackCheck && callback) {
                return this.checkStep(currentStep, nextStep);
            }

            if (callback) {
                (callback)(callbackProps)
            }

            this.setState({ 
                step: nextStep,
                currentError: ''
            });
        }
    }

    getActionButtonsJsx() {
        const { step, data, next, previous, submit } = this.state;

        /**
         * Step: first
         */
        if (0 == step && 1 < data.length) {
            return (
                <div className="flex justify-content-between">
                    <span></span>
                    <button className="btn-next" onClick={() => this.slide(step, step + 1)}>
                        {next}
                    </button>
                </div>
            );
        }

        /**
         * Step: first & last
         */
        if (step === data.length - 1 && 1 == data.length) {
            return (
                <div className="flex justify-content-between">
                    <span></span>
                    <button className="btn-submit" onClick={() => this.checkSubmit()}>
                        {submit}
                    </button>
                </div>
            );
        }

        /**
         * Step: last
         */
        if (step === data.length - 1) {
            return (
                <div className="flex justify-content-between">
                    <button className="btn-previous" onClick={() => this.slide(step, step - 1)}>
                        {previous}
                    </button>
                    <button className="btn-next" onClick={() => this.checkSubmit()}>
                        {submit}
                    </button>
                </div>
            );
        }

        /**
         * Step: x
         */
        return (
            <div className="flex justify-content-between">
                <button className="btn-previous" onClick={() => this.slide(step, step - 1)}>
                    {previous}
                </button>
                <button className="btn-next" onClick={() => this.slide(step, step + 1)}>
                    {next}
                </button>
            </div>
        );
    }

    getProgressBarJsx() {
        let { step, data } = this.state;
        step += 1;
        let progress = ((100 / data.length - 1) * step);

        if (data.length === step) {
            progress = 100;
        }

        return (
            <div className="progress-bar">
                <span className="bar">
                    <span className="progress stripes animated" style={{ width: `${progress}%` }}></span>
                </span>
            </div>
        );
    }

    render() {
        const { defaultClass, addClass, id, data, progressBar, currentError, errorDataInside, errorAlignTop, liveGeneration } = this.state;

        if (!data.length) {
            return null;
        }

        return (
            <div className={`${defaultClass} ${addClass}`} id={id}>
                <div className="header">{this.getHeadersJsx()}</div>
                {
                    progressBar &&
                    <div className="progress-bar-wrapper">
                        {
                            this.getProgressBarJsx()
                        }
                    </div>
                }
                {
                    !errorDataInside && currentError && errorAlignTop &&
                    <span className="error">
                        {
                            currentError
                        }
                    </span>
                }
                <div className="content">
                    {
                        errorDataInside && currentError && errorAlignTop &&
                        <span className="error">
                            {
                                currentError
                            }
                        </span>
                    }
                    {
                        !liveGeneration && this.getCurrentStepJsx()
                    }
                    {
                        liveGeneration && <LiveGenerationSteps data={this.state.data} step={this.state.step} />
                    }
                    {
                        errorDataInside && currentError && !errorAlignTop &&
                        <span className="error">
                            {
                                currentError
                            }
                        </span>
                    }
                </div>
                {
                    !errorDataInside && currentError && !errorAlignTop &&
                    <span className="error">
                        {
                            currentError
                        }
                    </span>
                }
                <div className="footer">{this.getActionButtonsJsx()}</div>
            </div>
        );
    }
}

export default Steps;
