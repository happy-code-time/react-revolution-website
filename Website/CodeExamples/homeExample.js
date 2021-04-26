const exampleHome = () => {

const code1 = `import { Stars } from 'react-revolution';

<Stars 
    count={5} 
    filled={2} 
    color='orange-yellow' 
/>`;

const code2 = `import { Icons } from 'react-revolution';

<Icons
    displayTabs={true}
    iconsType='Smileys'
    renderItems={
        [
            'Smileys',
            'Activity',
            'Travel'
        ]
    }
/>`;

const code3 = `import { Breadcrumbs } from 'react-revolution';

<Breadcrumbs 
    domainName='Home' 
/>`;

const code4 = `import { ImageBox } from 'react-revolution';

<ImageBox
    image='public/images/benjamin-voros-phIFdC6lA4E-unsplash.jpg'
    data={
        <p>
            Main data
        </p>
    }
/>`;

const code5 = `import { Range } from 'react-revolution';

<Range 
    min={1}
    max={8} 
/>`;


    const codes = [ code1, code2, code3, code4, code5];
    return codes[Math.floor(Math.random() * codes.length)];
    };
    
    const exampleInstallationNpm = `npm i react-revolution`;
    
    const exampleInstallationYarn = `yarn add react-revolution`;
    
    export {
        exampleHome,
        exampleInstallationNpm,
        exampleInstallationYarn
    };