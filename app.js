const products = [
    {
        id: 1,
        category: 'Football',
        src: 'Images/Black-and-Red-Football-Kit.jpg'
    },
    {
        id: 2,
        category: 'Football',
        src: 'Images/Blue-and-Yellow-Football-Kit.jpg'
    },
    {
        id: 3,
        category: 'Football',
        src: 'Images/Blue-Black-Football-Kit.jpg'
    },
    {
        id: 4,
        category: 'Rugby',
        src: 'Images/Rugby.jpg'
    },
    {
        id: 5,
        category: 'Rugby',
        src: 'Images/Rugby2.jpg'
    },
    {
        id: 6,
        category: 'Rugby',
        src: 'Images/Rugby3.jpg'
    },
    {
        id: 7,
        category: 'Tennis',
        src: 'Images/tennis1.jpg'
    },
    {
        id: 8,
        category: 'Tennis',
        src: 'Images/tennis2.jpg'
    },
    {
        id: 9,
        category: 'Tennis',
        src: 'Images/tennis3.jpg'
    },
    {
        id: 10,
        category: 'TrackSuites',
        src: 'Images/TrackSuite.jpg'
    },
    {
        id: 11,
        category: 'TrackSuites',
        src: 'Images/TrackSuite2.jpg'
    },
    {
        id: 12,
        category: 'Boxing',
        src: 'Images/boxing.jpg'
    },
    {
        id: 13,
        category: 'Cycling',
        src: 'Images/cycling.jpg'
    },
];

const ProductSection = document.querySelector('.products');
const BtnsSection = document.querySelector('.menu-btns');

window.addEventListener('DOMContentLoaded', ()=>{
    DisplayItem(products);
    DisplayButtons();
})

DisplayButtons = ()=>{
    const MenuBtn = products.reduce((values,item)=>{
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['All']);
    
    const displayBtn = MenuBtn.map((btnName)=>{
        return `<button class="filter-btn" type="button" data-id="${btnName}">${btnName}</button>`
    }).join('');
    BtnsSection.innerHTML = displayBtn;

    
    const FilterBtns = BtnsSection.querySelectorAll('.filter-btn');
    FilterBtns.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const Category = e.currentTarget.dataset.id;
            const MenuCategory = products.filter((menuItem)=>{
                if (menuItem.category === Category){
                    return menuItem;
                }
            })
            if (Category === 'All'){
                DisplayItem(products);
            } else {
                DisplayItem(MenuCategory);
            }
        })
    })
}

DisplayItem = (Items)=> {
    let display = Items.map((item)=>{
        return `<img src="${item.src}" alt="${item.category}">`
    }).join('');
    ProductSection.innerHTML = display
}