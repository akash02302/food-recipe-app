import ChiefsCard from "./ChiefsCard"

export default function ChiefSection(){
    
    const topChiefs = [
        {
            name: "Juan Carlos",
            recipeCount: "10",
            cuisine: "Mexican",
            imageSrc: "/top-chief/img_1 .jpg" 
        },
        {
            name: "John Doe",
            recipeCount: "05",
            cuisine: "Japanese",
            imageSrc: "/top-chief/img_2.jpg" 
        },
        {
            name: "Erich Maria",
            recipeCount: "13",
            cuisine: "Italian",
            imageSrc: "/top-chief/img_3.jpg" 
        },
        {
            name: "Chris Brown",
            recipeCount: "13",
            cuisine: "American",
            imageSrc: "/top-chief/img_4.jpg" 
        },
        {
            name: "Blake Lively",
            recipeCount: "09",
            cuisine: "French",
            imageSrc: "/top-chief/img_5.jpg" 
        },
        {
            name: "Ben Affleck",
            recipeCount: "04",
            cuisine: "Indian",
            imageSrc: "/top-chief/img_6.jpg" 
        }
    ];

    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/*<ChiefsCard />
                <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard /> */}
                {topChiefs.map((chief, index) => <ChiefsCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
} 