
import React from 'react';
import trans from '../Translations/trans';
//@ts-ignore
import { getCurrentYear, BackgroundImageFixed, UiBox, BoxVertical, BoxHorizontal } from '../../react-revolution/public/react-revolution';
import SvgHeartFilled from '../../Svg/SvgHeartFilled';
import SETTINGS from '../Settings';
import _PopupHover from '../Components/PopupHover/_PopupHover';
import SvgAngleDown from '../../Svg/SvgAngleDown';

class Root extends React.Component< { [key: string]: any }, { [key: string]: any }> {
    public countCallbacks: number;
    public examples: any[];

    constructor(props) {
        super(props);

        this.state = {
            text: this.generateRandomText()
        };
    }

    generateRandomText(){
        
        const items = [
            'You Are Awesome!',
            "It's so good to see you!"
        ];

        return items[Math.floor(Math.random() * items.length)];
    }

    render() {
        const { text } = this.state;

        return (
            <div className="w-100 h-100vh overflow-auto">
                <BackgroundImageFixed
                    image={'/public/images/ferenc-almasi-L8KQIPCODV8-unsplash.jpg'}
                />
                <div className='flex'>
                    <BoxHorizontal
                        data={
                            <p>dcasf dasfsd f sdfds</p>
                        }
                    />
                    <BoxVertical
                        data={
                            <div className="row m-0 p-2">
                                <div className='col-6 flex'>
                                    <span className='my-auto px-2'>
                                        {
                                            trans('DietMonster')
                                        }
                                    </span>
                                </div>
                                <div className='col-6'>
                                    <div className='float-right'>
                                        {
                                            _PopupHover(
                                                <span className='flex py-1 px-2'>
                                                    <span className='d-inline-block mr-2 my-auto'>
                                                        {
                                                            trans('Language')
                                                        }
                                                    </span>
                                                    <span className='d-inline-block my-auto'>
                                                        {
                                                            SvgAngleDown(SETTINGS.SVG.WIDTH.XXS, SETTINGS.SVG.COLOR.DARK)
                                                        }
                                                    </span>
                                                </span>,
                                                <div className='bg-white-light border-radius p-3'>

                                                </div>,
                                                true,
                                                'right'
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className='flex flex-column justify-content-between w-100 h-100 min-h-100vh position-relative'>
                    <div className="Section-xxl my-4 px-2">

                    </div>
                    <div className="Section w-100">
                        <div className='col-12 col-md-6 mx-auto'>
                            <UiBox
                                title={trans('Sign In')}
                                titleData={
                                    <p className='py-2 color-white'>
                                        {
                                            trans('Enter your email and password to sign in.')
                                        }
                                    </p>
                                }
                                data={
                                    <div className="py-2">

                                        <div className='p-2 my-2 w-100 flex content-center'>
                                            <span className='d-inline-block m-auto text-muted'>
                                                {
                                                    trans("Don't have an account?")
                                                }
                                                <a 
                                                    className='d-inline-block ml-2'
                                                    href='/sign-up'
                                                >
                                                    {
                                                        trans('Sign-up')
                                                    }
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="Section-xl my-2 px-4">
                        <div className="bg-transparent border-radius w-100 p-3">
                            <div className='row m-0'>
                                <div className='col-6 my-1 color-white'>
                                    <span className='d-inline-block px-1'>
                                        {
                                            `${trans('©')} ${getCurrentYear()},`
                                        }
                                    </span>
                                    <span className='d-inline-block px-1'>
                                        {
                                            trans('made with')
                                        }
                                    </span>
                                    <span className='d-inline-block px-1'>
                                        {
                                            SvgHeartFilled(SETTINGS.SVG.WIDTH.M, SETTINGS.SVG.COLOR.RED)
                                        }
                                    </span>
                                    <span className='d-inline-block px-1'>
                                        {
                                            trans('in Munich for a better live.')
                                        }
                                    </span>
                                </div>
                                <div className='col-6 my-1'>
                                    <div className='d-inline-block float-right'>
                                        <a 
                                            href='/sign-up'
                                            className='d-inline-block color-white mx-3'
                                        >
                                            {
                                                trans('Sign up')
                                            }
                                        </a>
                                        <a 
                                            href='/about-us'
                                            className='d-inline-block color-white mx-3'
                                        >
                                            {
                                                trans('About us')
                                            }
                                        </a>
                                        <a 
                                            href='/'
                                            className='d-inline-block color-white mx-3'
                                        >
                                            {
                                                trans('Home')
                                            }
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;
