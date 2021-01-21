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

    const codes = [ code1, code2, code3, code3, code2, code1 ];
    return codes[Math.floor(Math.random() * codes.length)];
    };
    
    const exampleInstallationNpm = `npm i react-revolution`;
    
    const exampleInstallationYarn = `yarn add react-revolution`;
    
    export {
        exampleHome,
        exampleInstallationNpm,
        exampleInstallationYarn
    };