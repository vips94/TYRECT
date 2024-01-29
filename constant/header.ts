export const navLinks = {
    Impact : [
        {
            label: 'Services',
            key: 'sevices',
            children: [
                {
                    label: 'Network Solutions',
                    key: 'network',
                    iconName: 'VirtualMachine',
                },
                {
                    label: 'Embedded Solutions',
                    key: 'embedded',
                    iconName: 'BlockStorage',
                    disabled: false,
                    hidden: false
                },
            ]
        },
        // {
        //     label: 'STORAGE',
        //     key: 'storage',
        //     hidden: false,
        //     children : [
        //         {
        //             label: 'Object-Storage',
        //             key: 'object-storage',
        //             iconName: 'ObjectStorage',
        //             disabled: false
        //         },
        //         {
        //             label: 'Block-Storage',
        //             key: 'block-storage',
        //             iconName: 'BlockStorage',
        //             disabled: false
        //         }
        //     ]
        // }
    ],
    edgeSolutions: [
        {
            label: 'BY USECASE',
            key: 'by-usecase',
            children: [
                {
                    label: 'All',
                    key: 'usecases',
                    iconName: 'ATG',
                },
                {
                    label: 'Retail',
                    key: 'retail',
                    iconName: 'Retail',
                },
                {
                    label: 'Healthcare',
                    key: 'healthcare',
                    iconName: 'Healthcare',
                },
                {
                    label: 'Finance',
                    key: 'finance',
                    iconName: 'Finance',
                },
                {
                    label: 'Gaming',
                    key: 'gaming',
                    iconName: 'Gaming',
                },
                {
                    label: 'Enterprise IT',
                    key: 'enterprise',
                    iconName: 'EnterpriseIT',
                },
                {
                    label: 'IoT',
                    key: 'iot',
                    iconName: 'IoT',
                },
                {
                    label: 'Data Security',
                    key: 'data-security',
                    iconName: 'DataSecurity',
                },
            ]
        },
        {
            label: 'BY ROLE',
            key: 'by-role',
            children: [
                {
                    label: 'CIO | CTO | CSO',
                    key: 'cio',
                    iconName: 'CIO',
                },
                {
                    label: 'DevSecOps',
                    key: 'devsecops',
                    iconName: 'DevSecOps',
                }
            ]
        }
    ],
    offers : [
        {
            label: 'Offers',
            key: 'offers',
            iconName: 'Offers',
        },
    ],
    resources: [
        {
            label: '',
            key: 'resources',
            children: [
                {
                    label: 'About Bekko',
                    key: 'about-bekko',
                    iconName: 'AboutUs'
                },
                {
                    label: 'Support',
                    key: 'support',
                    iconName: 'Support'
                },
                {
                    label: 'Get Started Guides',
                    key: 'get-started-guides',
                    iconName: 'GetStartedGuides'
                },
                {
                    label: 'Blog',
                    key: 'blog',
                    iconName: 'Blog'
                },
                {
                    label: 'Content Library',
                    key: 'content-library',
                    iconName: 'Resources',
                    hidden:  true
                },
                {
                    label: 'Awards',
                    key: 'awards',
                    iconName: 'Awards'
                },
                {
                    label: 'Partnerships',
                    key: 'partnerships',
                    iconName: 'Partnerships',
                    disabled : true
                },
            ]
        }
    ]
}