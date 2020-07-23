import * as React from 'react';

import uuid from '../../Functions/uuid';

import getDerivedStateFromPropsCheck from '../internalFunctions/getDerivedStateFromPropsCheck';

class CustomSuggestion extends React.Component {

    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this);
        this.setValue = this.setValue.bind(this);
        this.callbackEsc = this.callbackEsc.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.setFocusUpdater = this.setFocusUpdater.bind(this);
        this.setValueToInputField = this.setValueToInputField.bind(this);

        this.state = {
            /**
             * User
             */
            addClass: (props.addClass && typeof '8' == typeof props.addClass) ? props.addClass : '',
            defaultClass: (props.defaultClass && typeof '8' == typeof props.defaultClass) ? props.defaultClass : 'rr-custom-suggestion',
            id: (props.id && typeof '8' == typeof props.id) ? props.id : '',
            plainValue: (props.value && typeof '8' == typeof props.value) ? props.value : '',
            callback: (props.callback && 'function' == typeof props.callback) ? props.callback : undefined,
            callbackSelection: (props.callbackSelection && 'function' == typeof props.callbackSelection) ? props.callbackSelection : undefined,
            suggestions: (props.suggestions && typeof [] == typeof props.suggestions) ? props.suggestions : [],
            placeholder: (props.placeholder && typeof '8' == typeof props.placeholder) ? props.placeholder : '',
            props: (props.props && typeof {} == typeof props.props) ? props.props : {},
            inputType: (props.inputType && typeof '8' == typeof props.inputType) ? props.inputType : 'text',
            callbackRerender: (typeof true == typeof props.callbackRerender) ? props.callbackRerender : false,
            allowOnlyAZ: (typeof true == typeof props.allowOnlyAZ) ? props.allowOnlyAZ : false,
        };

        this.availableSorts = ['asc', 'desc'];
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props 
     * @param {object} state 
     */
    static getDerivedStateFromProps(props, state) {
        if (getDerivedStateFromPropsCheck(['value', 'suggestions'], props, state)) {
            const { callbackRerender } = state;

            if(callbackRerender){
                return {
                    suggestions: state.suggestions,
                };
            }

            return {
                suggestions: props.suggestions,
                plainValue: state.plainValue
            };
        }

        return null;
    }

    componentDidMount() {
        this.setFocusUpdater(true);
        document.addEventListener('mousedown', this.handleMouseDown);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleMouseDown);
    }

    setFocusUpdater(usercallback = false) {
        let timeout = usercallback ? 100 : 0;

        setTimeout(() => {

            if (this.inputNode) {
                const val = this.inputNode.value || this.inputNode.defaultValue;

                this.setState({
                    plainValue: val
                }, () => {

                    this.callback(val);
                });
            }
        }, timeout);
    }

    /**
     * Hide data div
     * while user not inside it
     * @param {React.MouseEvent|any} e
     */
    handleMouseDown(e) {
        if (this.refNodeUl && !this.refNodeUl.contains(e.target)) {
            this.setState({
                suggestions: [],
            });
        }
    }

    /**
     * On state change callback
     */
    async callback(plainValue, emptySuggestions = false) {
        const { callback } = this.state;

        if (callback) {
            const suggestions = await (callback)(plainValue, emptySuggestions);

            this.setState({
                suggestions: emptySuggestions ? [] : suggestions
            }); 
        }
    }

    /**
     * Esc callback
     */
    callbackEsc() {
        this.setState({
            suggestions: [],
        });
    }

    /**
     * Set value on change input field
     */
    setValue(e) {
        let value = e.target.value;
        this.setValueToInputField(value);
    }

    handleKeyDown(event){
        event.persist();

        if (event.key === 'Escape') {
            return this.callbackEsc();
        }
    }

    setInputValue(value, emptySuggestions = false){
        this.setValueToInputField(value, emptySuggestions);
    }

    setValueToInputField(value, emptySuggestions = false){
        const { allowOnlyAZ } = this.state;

        if (allowOnlyAZ) {
            value = value.replace(/[^a-zA-Z- ]/gmi, '');
            value = value.trim();
        }

        this.setState({
            plainValue: value
        }, () => {
            const { plainValue } = this.state;

            this.callback(plainValue, emptySuggestions);
        });
    }

    render() {
        const { addClass, defaultClass, id, props, suggestions, plainValue, placeholder, inputType } = this.state;

        return (
            <div className={`${defaultClass} ${addClass}`}>
                <div className="input">
                    <input
                        type={inputType}
                        value={plainValue}
                        onChange={(e) => this.setValue(e)}
                        placeholder={placeholder}
                        onKeyDown={ (e) => this.handleKeyDown(e) }
                        id={id}
                        {...props}
                    />
                    {
                        '' !== plainValue && suggestions && 0 !== suggestions.length &&
                        <div className="suggestions-area">
                            <ul
                                className="ul"
                                ref={(node) => this.refNodeUl = node}
                            >
                                <span className="suggestions" ref={ node => this.suggestionsHolder = node}>
                                    {
                                        suggestions.map( suggestion => {
                                            const { href, props, jsx, onClickValue } = suggestion;

                                            return (
                                                <li 
                                                    key={uuid()}
                                                    onClick={ () => this.setInputValue(onClickValue, true)}
                                                >
                                                    <a href={href} {...props}>
                                                    {
                                                        jsx
                                                    }
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </span>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default CustomSuggestion;