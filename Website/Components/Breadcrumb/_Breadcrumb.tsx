import React from 'react';
import SETTINGS from '../../Settings';
import SvgHomepage from '../../../Svg/SvgHomepage';
import Breadcrumb from './Breadcrumb';

interface breadcrumbaMenuInterface {
    text?: string;
    href?: string;
    data?: {
        text?: string;
        href?: string;
        data?: {
            text?: string;
            href?: string;
            data?: {}[];
        }[];
    }[];
}

const _Breadcrumb = (lastEntryText = '', moduleMenu: breadcrumbaMenuInterface[] = []) => {
    return (
        <Breadcrumb
            firstCharToUpperCase={true}
            ignoreRootNode={true}
            removeHashFromDomain={true}
            hashRouter={true}
            overwriteText={true}
            overWriteDomainName={SvgHomepage(SETTINGS.SVG.WIDTH.S, SETTINGS.SVG.COLOR.GRAY)}
            hashOnEntry={0}
            hashAsSuffix={true}
            moduleMenu={{
                data: moduleMenu
            }}
            lastEntryText={lastEntryText}
        />
    );
};

export default _Breadcrumb;
