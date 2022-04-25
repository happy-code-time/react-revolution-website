import React from 'react';
import { Router } from 'react-router-dom';
import isNumber from '../../../react-revolution/source/functions/isNumber';
//@ts-ignore
import { MenuHeight } from '../../../react-revolution/public/react-revolution';
import PropsCheck from '../../Functions/PropsCheck';
import SETTINGS from '../../Settings';
import SvgCatering from '../../../Svg/SvgCatering';
import SvgDumbbell from '../../../Svg/SvgDumbbell';
import SvgHomepage from '../../../Svg/SvgHomepage';
import trans from '../../Translations';
import _Breadcrumb from '../Breadcrumb/_Breadcrumb';
import _FixedSidebar from '../FixedSidebar/_FixedSidebar';
import _Footer from '../Footer';

interface iStateProps {
    [key: string]: any
};

class Wrapper extends React.Component <iStateProps, iStateProps> {
    constructor(props) {
        super(props);
        this.resizeView = this.resizeView.bind(this);

        this.state = {
            sidebar: false,
            sidebarAt: isNumber(props.sidebarAt) ? props.sidebarAt : -1,
        };
    }

    /**
     * Force re-rendering of this component based
     * on keysChangeListners keys
     * @param {object} props
     * @param {object} state
     */
    static getDerivedStateFromProps(props, state) {
        if (PropsCheck(['sidebarAt'], props, state)) {
            return {
                sidebarAt: isNumber(props.sidebarAt) ? props.sidebarAt : -1,
            };
        }

        return null;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeView);
        this.resizeView();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeView);
    }

    resizeView() {
        const { sidebarAt } = this.state;
        const docWidth = document.documentElement.getBoundingClientRect().width;

        if (docWidth >= sidebarAt && true !== this.state.sidebar) {
            this.setState({ sidebar: true });
        }
        if (docWidth < sidebarAt && false !== this.state.sidebar) {
            this.setState({ sidebar: false });
        }
    }

    render() {
        return (
            <div className="ContainerGenerator">
                <div className='flex w-100'>
                    {
                        this.state.sidebar &&
                        <div className='p-4 pr-2 position-fixed h-100vh'>
                            <div className='Sidebar border-none p-3 min-h-100'>
                                <div className='Menu border-radius h-100 w-100 overflow-y-auto px-2 pb-3 mb-3'>
                                    <Router location={''} navigator={undefined}>
                                        <MenuHeight
                                            data={
                                                [
                                                    {
                                                        text: 'Diet Monster',
                                                        type: 'separator'
                                                    },
                                                    {
                                                        text: 'Buy a diet',
                                                        href: '/diet-template',
                                                        icon: SvgHomepage(26),
                                                    },
                                                    {
                                                        text: 'Create a diet',
                                                        href: '/diet-template#/create',
                                                        icon: SvgDumbbell(26),
                                                    },
                                                    {
                                                        text: 'My created diets',
                                                        href: '/diet-template#/created-by-user',
                                                        icon: SvgCatering(26),
                                                    },
                                                    // {
                                                    //     text: 'Diets',
                                                    //     icon: SvgSugar(SETTINGS.SVG.WIDTH.XL, SETTINGS.SVG.COLOR.GRAY),
                                                    //     children: [
                                                    //         {
                                                    //             text: 'All',
                                                    //             href: 'diets#/diet-health-data',
                                                    //             icon: SvgCircle(SETTINGS.SVG.WIDTH.XXS, SETTINGS.SVG.COLOR.GRAY),
                                                    //         },
                                                    //         {
                                                    //             text: 'Create',
                                                    //             href: 'diets#/diet-health-data-create',
                                                    //             icon: SvgCircle(SETTINGS.SVG.WIDTH.XXS, SETTINGS.SVG.COLOR.GRAY),
                                                    //         },
                                                    //     ]
                                                    // }
                                                ]
                                            }
                                        />
                                    </Router>
                                </div>
                            </div>
                        </div>
                    }
                    <div
                        className="are-content min-h-100vh p-3 w-100"
                        {...(this.state.sidebar) && {
                            style:
                            {
                                marginLeft: '15rem'
                            }
                        }
                        }
                    >
                        <div className="">
                            <div className='flex justify-content-between w-100 border border-radius bg-white-light'>
                                <span>
                                    111
                                </span>
                                <span className='d-inline-block mx-1 float-right'>
                                    {
                                        _FixedSidebar(
                                            <div className='PopupHover'>
                                                <span className='flex my-auto py-2 px-3 border-radius transition-duration color-text link'>
                                                    <span className='d-inline-block my-auto'>
                                                        {
                                                            SvgCatering(SETTINGS.SVG.WIDTH.XL)
                                                        }
                                                    </span>
                                                </span>
                                            </div>,
                                            <div className='row w-100 p-2'>
                                                <div className='font-bold text-muted border-bottom col-12 p-2'>
                                                    {
                                                        ('Food')
                                                    }
                                                </div>
                                                <div className='col-12 p-2'>
                                                    <a 
                                                        className='border-radius row w-100 overflow-hidden w-100 text-muted'
                                                        href='/app#/food'
                                                    >
                                                        Extended food search
                                                    </a>
                                                </div>
                                                <div className='col-12 p-2'>
                                                    <a 
                                                        className='border-radius row w-100 overflow-hidden w-100 text-muted'
                                                        href='/app#/food-create'
                                                    >
                                                        Food not found? Create a food
                                                    </a>
                                                </div>
                                                <div className='font-bold text-muted border-bottom col-12 p-2'>
                                                    {
                                                        ('Recipie')
                                                    }
                                                </div>
                                                <div className='col-12 p-2'>
                                                    <a 
                                                        className='border-radius row w-100 overflow-hidden w-100 text-muted'
                                                        href='/app#/recipie'
                                                    >
                                                        Extended recipie search
                                                    </a>
                                                </div>
                                                <div className='col-12 p-2'>
                                                    <a 
                                                        className='border-radius row w-100 overflow-hidden w-100 text-muted'
                                                        href='/app#/recipie-create'
                                                    >
                                                        Recipie not found? Create a food
                                                    </a>
                                                </div>
                                                <div className='font-bold text-muted border-bottom col-12 p-2'>
                                                    {
                                                        ('Diets')
                                                    }
                                                </div>
                                                <div className='col-12 p-2'>
                                                    <a 
                                                        className='border-radius row w-100 overflow-hidden w-100 text-muted'
                                                        href='/diet-template'
                                                    >
                                                        Extended diet search
                                                    </a>
                                                </div>
                                                <div className='col-12 p-2'>
                                                    <a 
                                                        className='border-radius row w-100 overflow-hidden w-100 text-muted'
                                                        href='/diet-template#/create'
                                                    >
                                                        Diet create
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    }
                                </span>
                            </div>
                            <span className='d-inline-block w-100 py-2'>
                                {
                                    _Breadcrumb()
                                }
                            </span>
                        </div>
                        <div className='w-100'>
                            {
                                this.props.children
                            }
                        </div>
                        <div className="are-footer">
                            <div className='w-100 border border-radius bg-white-light'>
                                best footer ever
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wrapper;