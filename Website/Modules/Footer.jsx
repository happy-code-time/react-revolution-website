import React from 'react';
import { Card } from '../../react-revolution/react-revolution';
import trans from '../Translations/trans';

class Footer extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            hash: window.location.hash
        };

        this.checkHash = null;
    }

    getCurrentYearText() 
    {
        const DATE = new Date();
        const year = DATE.getFullYear();

        if (2020 !== year) {
            return `2020 - ${year}`;
        }

        return '2020';
    }

    componentDidMount()
    {
        this.interval();
    }

    componentWillUnmount()
    {
        this.interval(false);
    }

    interval(attach = true)
    {
        clearInterval(this.checkHash);

        if(attach)
        {
            this.checkHash = setInterval( () => {

                if(this.state.hash !== window.location.hash)
                {
                    this.setState({
                        hash: window.location.hash
                    });
                }

            }, 1000);
        }
    }

    render() 
    {

        if('#/' !== this.state.hash)
        {
            return null;
        }

        return (
            <div className="Footer">

                <div className="content">
                    <Card
                        itemsPerLine={2}
                        mediaBreak={1024}
                        data={
                            [
                                {
                                    title: (
                                        <span>
                                            <i className="fab fa-github" />
                                            Git
                                        </span>
                                    ),
                                    content: (
                                        <div className='text text-center'>
                                            <div>
                                                <a href='https://github.com/janitzed/react-revolution.git'>
                                                    react-revolution.git
                                                </a>
                                            </div>
                                        </div>
                                    ),
                                },
                                {
                                    title: (
                                        <span>
                                            <i className="fas fa-gavel" />
                                            {
                                                trans('rights')
                                            }
                                        </span>
                                    ),
                                    content: (
                                        <div className='text text-center'>
                                            <div>
                                                {`Ⓒ ${this.getCurrentYearText()} MIT License`}
                                            </div>
                                        </div>
                                    ),
                                }
                            ]
                        }
                    />
                </div>
            </div>
        );
    }
};

export default Footer;