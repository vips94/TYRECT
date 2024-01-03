import Link from "next/link";
import { navLinks } from "./header";

const getIcon = (iconName:string) => {
    
    return <img src={`./images/productions/${iconName}.svg`} alt=''/>
}

const getItems = (items:any) => {
    return items?.map(({label, key, iconName, disabled, link, linkTarget, hidden} :any)=> hidden !== 'true' && ({ 
        label: (
            <Link
                href={{pathname: !link ? `/${key}` : link}}
                target={!linkTarget ? '_self' : linkTarget}
                aria-label={label}
                aria-hidden={disabled === 'true' ? 'true' : 'false'}
                tabIndex={disabled === 'true' ? -1 : 0}
                onClick={() => {

                }}
            >
            {label}
            </Link>
        ),
        key,
        ...(iconName && {icon: getIcon(iconName)}),
        ... (disabled === 'true' && {disabled}),
    }))
}

const getGroup = (item:any) => {
    return item?.map((elem:any) => elem?.hidden !== 'true' && (
        {
            label: (
                <span>
                    {elem?.label}
                </span>
            ),
            key: elem?.key,
            children: getItems(elem?.children),
            type: 'group'
        }
    ))
}

export const getNavItems = (setCurrentKey:any) => {
    return[
        {
            label:(
                <span>
                    Product Platform
                </span>
            ),
            key: 'product-platform-submenu',
            children: [
                {
                    label:(
                        <Link href={'/product-overview'}>
                            Product Overview
                        </Link>
                    ),
                    key: 'product-overview',
                    icon: getIcon('VirtualMachine')
                },
                ...getGroup(navLinks.productPlatform),
            ]
        },
        {
            label:(
                <span>
                    Edge Solutions
                </span>
            ),
            key: 'edge-solution-submenu',
            children: getGroup(
                [navLinks.edgeSolutions[0]] // [navLinks.edgeSolutions]
            )
        },
        {
            label:(
                <Link href={'/locations'}>
                    Locations
                </Link>
            ),
            key: 'locations',
        },
        {
            label:(
                <span>
                    Resources
                </span>
            ),
            key: 'resources-submenu',
            children: getGroup([navLinks.resources[0]])
        },
    ]
}

export const rootSubMenuKeys = [
    'product-platform-submenu',
    'edge-solution-submenu',
    'offers-submenu',
    'resources-submenu'
];

export const submenuKeyNameMap = {
    [rootSubMenuKeys[0]] : 'Product Platfrom',
    [rootSubMenuKeys[1]] : 'Edge Solution',
    [rootSubMenuKeys[2]] : 'Offers',
    [rootSubMenuKeys[3]] : 'Resources',
};